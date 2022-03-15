module.exports = function(router) {
    var productController = require('../controllers/product.controller');

    router.get('/product/:id', productController.get_product_id);
    router.get('/products', productController.get_all_product);

    router.get('/products/thucancun', productController.get_thu_an_cun);    
    router.get('/products/thucanmeo', productController.get_thu_an_meo);
    router.get('/products/dochoithucung', productController.get_do_choi_thu_cung);
    router.get('/products/phukienthucung', productController.get_phu_kien_thu_cung);
    router.get('/products/chuongthucung', productController.get_chuong_thu_cung);

    //add product
    router.post('/products', productController.add_product);
}