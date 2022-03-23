const db = require('../common/connect');

const home = function () {
}

home.bestseller = function (result) {
    var strquery = "select product_id, product_name, product_price, product_image, product_sold from products WHERE isDelete = 0 order by product_sold desc limit 6;"
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

home.promotion = function (result) {
    var strquery = "SELECT products.product_id, products.product_name, products.product_price, products.product_image, promotions.promotion_price FROM `products`, promotions WHERE products.isDelete = 0 and products.product_id = promotions.product_id order by promotions.promotion_price desc limit 6;"
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}



module.exports = home;