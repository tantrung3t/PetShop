
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

