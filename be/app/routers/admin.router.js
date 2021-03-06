module.exports = function(router) {
    var adminController = require('../controllers/admin.controller');

    router.get('/admin/orders/list', adminController.list_orders);
    router.get('/admin/orders/list_nhanhang', adminController.list_orders_nhanhang);

    router.get('/admin/order/:id', adminController.products_orders_by_id);

    //accept or deny order
    router.post('/admin/orders/deny_or_accept_order', adminController.deny_or_accept_order)

    router.post('/admin/orders/yes_or_no', adminController.yes_or_no)

    //thong ke 4 thang
    router.get('/admin/statistic/4month', adminController.statistic_4month)

    //thong ke thang truoc theo loai sp
    router.get('/admin/statistic/sales_last_month', adminController.sales_last_month)
    //thong ke thang này theo loai sp
    router.get('/admin/statistic/sales_this_month', adminController.sales_this_month)

    //thong ke don hang va luong san pham ban ra
    router.get('/admin/statistic/orders_and_quantity_sales', adminController.orders_and_quantity_sales)

    //thong ke hang ton
    router.get('/admin/statistic/inventory_product', adminController.inventory_product)

    //san pham sap het hang
    router.get('/admin/statistic/outstockproduct', adminController.outStockProduct)

    //add brand
    router.post('/admin/brand/add', adminController.addBrand)
}