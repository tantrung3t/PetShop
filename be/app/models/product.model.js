
const db = require('../common/connect');

const product = function () {
}

product.get_product_id = function (id, result) {
    var strquery = "SELECT  products.product_id, products.product_name, products.product_price, products.product_image, products.product_sold, products.product_description, products_brand.product_brand_name, products_type.product_type_name   FROM `products`, products_brand, products_type WHERE products.product_brand_id = products_brand.product_brand_id and products.product_type_id = products_type.product_type_id and products.product_id = " + id;
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
    var strquery = "SELECT  products.product_id, products.product_name, products.product_price, products.product_image, products.product_sold , products_brand.product_brand_name, products_type.product_type_name   FROM `products`, products_brand, products_type WHERE products.product_brand_id = products_brand.product_brand_id and products.product_type_id = products_type.product_type_id";
    db.query(strquery, function (err, data) {
        if (err) {
            result(null);
        }
        else {
            result(data);
        }
    })
}




module.exports = product;