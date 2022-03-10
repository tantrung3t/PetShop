module.exports = function(router) {
    var productController = require('../controllers/product.controller');

    router.get('/product/:id', productController.get_product_id);
    
}