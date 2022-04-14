var admin = require('../models/admin.model');
const jwt = require('jsonwebtoken');

const secretKey = "token";

exports.list_orders = function (req, res) {
    admin.list_orders(function (data) {
        res.send(data);
    })
}

exports.products_orders_by_id = function (req, res) {
    var id = req.params.id;
    admin.products_orders_by_id(id, function (data) {
        res.send(data);
    })
}

exports.statistic_4month = function (req, res) {

    admin.statistic_4month(function (data) {
        res.send(data);
    })
}
exports.sales_last_month = function (req, res) {

    admin.sales_last_month(function (data) {
        res.send(data);
    })
}
exports.sales_this_month = function (req, res) {

    admin.sales_this_month(function (data) {
        res.send(data);
    })
}

exports.orders_and_quantity_sales = function (req, res) {
    admin.orders_and_quantity_sales(function (data) {
        res.send(data);
    })
}

exports.deny_or_accept_order = function (req, res) {
    // var token = req.body.token;

    // try {
    //     //kiem tra neu token hop len thi lam tiếp công việc
    //     var kq = jwt.verify(token, secretKey)
    //     product.edit_product(product_edit_data, function (data) {
    //         res.send(data);
    //     })

    // }
    // catch (error) {
    //     //tra ve loi nieu token het han hoac khong hop le
    //     return res.json({
    //         status: 401,
    //         message: 'Token expires or Deny',
    //     })
    // }
    var order_id = req.body.order_id;
    var status_order = req.body.status_order;


    admin.deny_or_accept_order(order_id, status_order, function (data) {
        res.send(data);
    })

}

exports.inventory_product = function (req, res){
    admin.inventory_product(function (data) {
        res.send(data);
    })
}

