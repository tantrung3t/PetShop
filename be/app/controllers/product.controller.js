
var product  = require('../models/product.model');

exports.get_product_id = function(req, res) {
    var id = req.params.id;
    product.get_product_id(id, function(data){
        res.send(data);
    })
}

exports.get_all_product = function(req, res) {
    var id = req.params.id;
    product.get_all_product(id, function(data){
        res.send(data);
    })
}

exports.get_thu_an_cun = function(req, res) {
    product.get_thu_an_cun(function(data){
        res.send(data);
    })
}

exports.get_thu_an_meo = function(req, res) {
    product.get_thu_an_meo(function(data){
        res.send(data);
    })
}

exports.get_do_choi_thu_cung = function(req, res) {
    product.get_do_choi_thu_cung(function(data){
        res.send(data);
    })
}

exports.get_phu_kien_thu_cung = function(req, res) {
    product.get_phu_kien_thu_cung(function(data){
        res.send(data);
    })
}

exports.get_chuong_thu_cung = function(req, res) {
    product.get_chuong_thu_cung(function(data){
        res.send(data);
    })
}

