
var product = require('../models/product.model');

const jwt = require('jsonwebtoken');

const secretKey = "token";

exports.get_product_id = function (req, res) {
    var id = req.params.id;
    product.get_product_id(id, function (data) {
        res.send(data);
    })
}

exports.get_all_product = function (req, res) {
    var id = req.params.id;
    product.get_all_product(id, function (data) {
        res.send(data);
    })
}

exports.get_thu_an_cun = function (req, res) {
    product.get_thu_an_cun(function (data) {
        res.send(data);
    })
}

exports.get_thu_an_meo = function (req, res) {
    product.get_thu_an_meo(function (data) {
        res.send(data);
    })
}

exports.get_do_choi_thu_cung = function (req, res) {
    product.get_do_choi_thu_cung(function (data) {
        res.send(data);
    })
}

exports.get_phu_kien_thu_cung = function (req, res) {
    product.get_phu_kien_thu_cung(function (data) {
        res.send(data);
    })
}

exports.get_chuong_thu_cung = function (req, res) {
    product.get_chuong_thu_cung(function (data) {
        res.send(data);
    })
}


//add product

exports.add_product = function (req, res) {
    var token = req.body.token;



    var product_data = {
        "product_brand_id": req.body.product_brand_id,
        "product_type_id": req.body.product_type_id,
        "product_name": req.body.product_name,
        "product_price": req.body.product_price,
        "product_description": req.body.product_description,
        "product_amount": req.body.product_amount,
        "product_sold": req.body.product_sold,
        "product_image": req.body.product_image
    }
    try {
        //kiem tra neu token hop len thi tra kq = account_id
        var kq = jwt.verify(token, secretKey)
        product.add_product(product_data, function (data) {
            res.send(data);
        })

    }
    catch (error) {
        //tra ve loi nieu token het han hoac khong hop le
        return res.json({
            status: 401,
            message: 'Token expires or Deny',
        })
    }
}