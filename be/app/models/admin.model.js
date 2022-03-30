const db = require('../common/connect');

const admin = function () {
}

admin.list_orders = function (result) {
    var strquery = "SELECT orders.order_id, infomation.info_name, infomation.info_phone_number, orders.order_date, infomation.info_address FROM `orders`, `infomation` WHERE orders.order_status = 0 and orders.account_id = infomation.account_id"
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

admin.products_orders_by_id = function (id, result) {
    var strquery = "SELECT products.product_id, products.product_name, products.product_price, orders_detail.orders_detail_quantity FROM `orders_detail`, `products` WHERE products.product_id = orders_detail.product_id and orders_detail.order_id = " + id
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

admin.deny_or_accept_order = function (order_id, status_order, result) {
    var strquery = "UPDATE `orders` SET `order_status`= '" + status_order + "' WHERE order_id = " + order_id
    db.query(strquery, function (err, data) {
        if (err) {
            result({
                status: 400,
                message: "Error"
            });
        }
        else {
            result({
                status: 200,
                message: "Successful"
            });
        }
    })
}


module.exports = admin;