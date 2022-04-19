const db = require('../common/connect');

const Account = function (account) {
}

Account.account_orders = function (account_id, result) {

    var strquery = "SELECT orders.order_id, products.product_id, products.product_name, products.product_image, products.product_price, orders.order_status, orders.order_date, orders.order_address, orders.order_payment_momo, orders_detail.orders_detail_quantity FROM `orders`, `orders_detail`, `products` WHERE orders.order_id = orders_detail.order_id and products.product_id = orders_detail.product_id and orders.account_id = " + account_id

    db.query(strquery, function (err, data) {
        if (err || data.length === 0) {
            result(null);
        }
        else {
            result(data);
        }
    })
}

Account.update_account = function (dataBody, result) {
    
    result(dataBody);
}




module.exports = Account;