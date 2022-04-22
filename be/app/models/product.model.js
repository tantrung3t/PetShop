
const db = require('../common/connect');

const product = function () {
}

product.search = function (search, result) {
    var strquery = "SELECT * FROM `products` WHERE product_name LIKE '%" + search + "%'"
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}


product.get_brand_by_id = function (id, result) {
    var strquery = "SELECT  products.product_id, products.product_name, products.product_price, products.product_image, products.product_amount, products.product_sold , products_brand.product_brand_name, products_type.product_type_name   FROM `products`, products_brand, products_type WHERE products.isDelete = 0 and products.product_brand_id = products_brand.product_brand_id and products.product_type_id = products_type.product_type_id and products_brand.product_brand_id = " + id;
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

product.get_product_id = function (id, result) {
    var strquery = "SELECT products.product_type_id, products.product_id, products.product_name, products.product_price, products.product_image, products.product_amount, products.product_sold, products.product_description, products_brand.product_brand_name, products_type.product_type_name   FROM `products`, products_brand, products_type WHERE products.isDelete = 0 and products.product_brand_id = products_brand.product_brand_id and products.product_type_id = products_type.product_type_id and products.product_id = " + id;
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

product.get_all_product = function (id, result) {
    var strquery = "SELECT products.product_id, products.product_name, products.product_price, products.product_description, products.product_image, products.product_amount, products.product_sold , products_brand.product_brand_name, products_brand.product_brand_id, products_type.product_type_name, products_type.product_type_id FROM `products`, products_brand, products_type WHERE products.isDelete = 0 and products.product_brand_id = products_brand.product_brand_id and products.product_type_id = products_type.product_type_id ORDER BY products.product_id ASC";
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

product.get_thu_an_cun = function (result) {
    var strquery = "SELECT  products.product_id, products.product_name, products.product_price, products.product_image, products.product_amount, products.product_sold , products_brand.product_brand_name, products_type.product_type_name   FROM `products`, products_brand, products_type WHERE products.isDelete = 0 and products.product_brand_id = products_brand.product_brand_id and products.product_type_id = products_type.product_type_id and products_type.product_type_id = 1";
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

product.get_thu_an_meo = function (result) {
    var strquery = "SELECT  products.product_id, products.product_name, products.product_price, products.product_image, products.product_amount, products.product_sold , products_brand.product_brand_name, products_type.product_type_name   FROM `products`, products_brand, products_type WHERE products.isDelete = 0 and products.product_brand_id = products_brand.product_brand_id and products.product_type_id = products_type.product_type_id and products_type.product_type_id = 2";
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

product.get_do_choi_thu_cung = function (result) {
    var strquery = "SELECT  products.product_id, products.product_name, products.product_price, products.product_image, products.product_amount, products.product_sold , products_brand.product_brand_name, products_type.product_type_name   FROM `products`, products_brand, products_type WHERE products.isDelete = 0 and products.product_brand_id = products_brand.product_brand_id and products.product_type_id = products_type.product_type_id and products_type.product_type_id = 3";
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

product.get_phu_kien_thu_cung = function (result) {
    var strquery = "SELECT  products.product_id, products.product_name, products.product_price, products.product_image, products.product_amount, products.product_sold , products_brand.product_brand_name, products_type.product_type_name   FROM `products`, products_brand, products_type WHERE products.isDelete = 0 and products.product_brand_id = products_brand.product_brand_id and products.product_type_id = products_type.product_type_id and products_type.product_type_id = 4";
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

product.get_chuong_thu_cung = function (result) {
    var strquery = "SELECT  products.product_id, products.product_name, products.product_price, products.product_image, products.product_amount, products.product_sold , products_brand.product_brand_name, products_type.product_type_name   FROM `products`, products_brand, products_type WHERE products.isDelete = 0 and products.product_brand_id = products_brand.product_brand_id and products.product_type_id = products_type.product_type_id and products_type.product_type_id = 5";
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

product.get_product_brand = function (result) {
    var strquery = "SELECT * FROM `products_brand`";
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}



//Add products
product.add_product = function (product_data, result) {

    var strquery = "INSERT INTO `products`(`product_brand_id`, `product_type_id`, `product_name`, `product_price`, `product_description`, `product_amount`, `product_sold`, `product_image`) VALUES ('" + product_data.product_brand_id + "','" + product_data.product_type_id + "','" + product_data.product_name + "','" + product_data.product_price + "','" + product_data.product_description + "','" + product_data.product_amount + "','" + product_data.product_sold + "','" + product_data.product_image + "')"

    db.query(strquery, function (err) {
        if (err) {
            result({
                status: 400,
                message: "Fail to add product to database"
            });
        }
        else {
            result({
                status: 200,
                message: "Add product to database successfully"
            });
        }
    })

    // var data = {
    //     status: 200,
    //     message: "OK"
    // }
    // result(data)
}

//edit product
product.edit_product = function (product_edit_data, result) {

    var strquery = "UPDATE `products` SET `product_brand_id`='" + product_edit_data.product_brand_id + "',`product_type_id`='" + product_edit_data.product_type_id + "',`product_name`='" + product_edit_data.product_name + "',`product_price`='" + product_edit_data.product_price + "',`product_description`='" + product_edit_data.product_description + "',`product_amount`='" + product_edit_data.product_amount + "', `product_image`='" + product_edit_data.product_image + "' WHERE `product_id`='" + product_edit_data.product_id + "'"

    db.query(strquery, function (err) {
        if (err) {
            result({
                status: 400,
                message: "Fail to edit product to database"
            });
        }
        else {
            result({
                status: 200,
                message: "Edit product to database successfully"
            });
        }
    })

    // var data = {
    //     status: 200,
    //     message: "OK"
    // }
    // result(data)
}

//delete product
product.delete_product = function (product_id, result) {
    var strquery = "UPDATE `products` SET `isDelete`='1' WHERE product_id = " + product_id
    db.query(strquery, function (err) {
        if (err) {
            result({
                status: 400,
                message: "Fail to delete product to database"
            });
        }
        else {
            result({
                status: 200,
                message: "Delete product to database successfully"
            });
        }
    })
}

//get all product from shopping_cart in database
product.get_product_in_shopping_cart = function (account_id, result) {
    var strquery = "SELECT shopping_cart.product_id, products.product_image, products.product_price, products.product_name, shopping_cart.shopping_cart_amount FROM `shopping_cart`, `products` WHERE products.isDelete = 0 and shopping_cart.product_id = products.product_id and shopping_cart.account_id = " + account_id
    db.query(strquery, function (err, data) {
        if (err || data.length == 0) {
            result(null);
        }
        else {
            result(data);
        }
    })

}

//add product in shopping cart
product.add_product_in_shopping_cart = function (product_id, account_id, shopping_cart_amount, result) {

    var strquery1 = "SELECT * FROM `shopping_cart` WHERE product_id = " + product_id + " and account_id = " + account_id

    db.query(strquery1, function (err, data) {
        if (data.length > 0) {
            var strquery = "UPDATE `shopping_cart` SET `shopping_cart_amount`= shopping_cart_amount + "+ shopping_cart_amount +" WHERE product_id = "+ product_id +" and account_id = " + account_id
            db.query(strquery, function (err, data) {
                if (err) {
                    result({
                        status: 400,
                        message: "Fail to add to database"
                    });
                }
                else {
                    result({
                        status: 200,
                        message: "Add to database successfully"
                    });
                }
            })
        }
        else {
            var strquery = "INSERT INTO `shopping_cart`(`product_id`, `account_id`, `shopping_cart_amount`) VALUES ('" + product_id + "','" + account_id + "','" + shopping_cart_amount + "')"
            db.query(strquery, function (err, data) {
                if (err) {
                    result({
                        status: 400,
                        message: "Fail to add to database"
                    });
                }
                else {
                    result({
                        status: 200,
                        message: "Add to database successfully"
                    });
                }
            })
        }
    })




}



module.exports = product;