
var product  = require('../models/product.model');

exports.get_product_id = function(req, res) {
    var id = req.params.id;
    product.get_product_id(id, function(data){
        res.send(data);
    })
}
