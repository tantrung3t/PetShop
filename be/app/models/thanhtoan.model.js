const db = require('../common/connect');

const payment = function () {
}

payment.inventory_product = function (result) {
    var strquery = "SELECT * FROM products WHERE product_id NOT IN (SELECT products.product_id FROM `orders`, orders_detail, products WHERE MONTH(NOW()) - MONTH(order_date) != 2 and orders.order_id = orders_detail.order_id and orders_detail.product_id = products.product_id) and product_sold < (product_amount * 0.5) and isDelete = 0"
    db.query(strquery, function (err, data) {
        if (err) {
            result(null)
        }
        else {
            result(data)
        }
    })
}

payment.cash_payment = function (reqData, result) {
    var strquery = "INSERT INTO `orders`(`account_id`, `order_status`, `order_address`, `order_payment_momo`, `order_total`) VALUES ('" + reqData.account_id + "','0','" + reqData.order_address + "','0', '"+ reqData.amount +"')"
    var strqueryInsertListProducts = "INSERT INTO `orders_detail` (`order_id`, `product_id`, `orders_detail_quantity`) VALUES "
    db.query(strquery, function (err, data) {
        if (err) {
            result({
                status: 400,
                message: "Error insert to database"
            });
        }
        else {
            // order = data;
            // result("order: " + data.insertId)
            reqData.listProducts.map((item, i, row) => {
                if (i + 1 === row.length) {
                    strqueryInsertListProducts += "(" + data.insertId + ", " + item.product_id + ", " + item.shopping_cart_amount + ");"
                }
                else {
                    strqueryInsertListProducts += "(" + data.insertId + ", " + item.product_id + ", " + item.shopping_cart_amount + "),"
                }

                db.query("DELETE FROM `shopping_cart` WHERE account_id = "+ reqData.account_id +" and product_id = " + item.product_id, function(err, data){
                    if(err){
                        response.send({
                            status: 400,
                            message: "Error delete cart to database"
                        });
                    }
                })
            })

            db.query(strqueryInsertListProducts, function (err, data) {
                if (err) {
                    result({
                        status: 400,
                        message: "Error insert to database"
                    });
                }
                else {
                    result({
                        status: 200,
                        message: "Insert to database successfully!"
                    });
                }
            })
        }
    })
}

payment.status_payment = function (reqData, result) {
    if (reqData.payment_status === 2) {
        var strqueryUpdate = "UPDATE `orders` SET `order_payment_momo`='2' WHERE order_id = " + reqData.order_id
        db.query(strqueryUpdate, function (err, data) {
            if (err) {
                result({
                    status: 400,
                    message: "Error Update to database"
                });
            }
            else {
                result({
                    status: 200,
                    message: "Update to database successfully"
                })
            }
        })
    }
    else {
        var strqueryDelete1 = "DELETE FROM `orders_detail` WHERE order_id = " + reqData.order_id
        var strqueryDelete2 = "DELETE FROM `orders` WHERE order_id = " + reqData.order_id
        db.query(strqueryDelete1, function (err, data) {
            if (err) {
                result({
                    status: 400,
                    message: "Error Delete to database"
                });
            }
            else {
                db.query(strqueryDelete2, function (err, data) {
                    if (err) {
                        result({
                            status: 400,
                            message: "Error Delete to database"
                        })
                    }
                    else {
                        result({
                            status: 200,
                            message: "Delete to database successfully"
                        })
                    }
                })
            }
        })
    }
}


module.exports = payment;