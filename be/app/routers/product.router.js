module.exports = function(router) {
    var productController = require('../controllers/product.controller');

    router.get('/product/:id', productController.get_product_id);
    router.get('/products', productController.get_all_product);

    router.get('/products/thucancun', productController.get_thu_an_cun);    
    router.get('/products/thucanmeo', productController.get_thu_an_meo);
    router.get('/products/dochoithucung', productController.get_do_choi_thu_cung);
    router.get('/products/phukienthucung', productController.get_phu_kien_thu_cung);
    router.get('/products/chuongthucung', productController.get_chuong_thu_cung);

    //lay san pham theo brand
    router.get('/brand/:id', productController.get_brand_by_id)

    //add product
    router.post('/products', productController.add_product);

    //edit product
    router.post('/products/edit', productController.edit_product);

    //delete product
    router.post('/products/delete', productController.delete_product)

    //get product brand
    router.get('/products/brand', productController.get_product_brand)

    //get product in shopping cart
    router.get('/products/cart/:id', productController.get_product_in_shopping_cart)
    
    //add product in shopping cart
    router.post('/products/cart', productController.add_product_in_shopping_cart)

    //search products
    router.post('/products/search', productController.search)

    //delete product in shopping cart
    router.post('/shoppingcart/delete', productController.shopping_cart_delete)

}