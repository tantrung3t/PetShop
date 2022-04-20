const db = require('../common/connect');

const Account = function (account) {
}

Account.account_orders = function (account_id, result) {

    var strquery = "SELECT orders.order_id, products.product_id, products.product_name, products.product_image, products.product_price, orders.order_status, orders.order_date, orders.order_address, orders.order_payment_momo,orders.order_total, orders_detail.orders_detail_quantity FROM `orders`, `orders_detail`, `products` WHERE orders.order_id = orders_detail.order_id and products.product_id = orders_detail.product_id and orders.account_id = " + account_id

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
    var strquery = "UPDATE `infomation` SET `info_fname`='"+ dataBody.info_fname +"',`info_lname`='"+ dataBody.info_lname +"',`info_date`='"+ dataBody.info_date + "',`info_address`='"+ dataBody.info_address +"',`info_phone_number`='"+ dataBody.info_phone_number +"',`info_email`='"+ dataBody.info_email +"', `info_sex`='"+ dataBody.info_sex +"' WHERE account_id = " + dataBody.account_id
    
    db.query(strquery, function (err, data) {
        if (err) {
            result({
                status: 400,
                message: "Error update database"
            });
        }
        else {
            result({
                status: 200,
                message: "Update to database successfully"
            });
        }
    })
}




module.exports = Account;