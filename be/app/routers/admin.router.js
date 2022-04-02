module.exports = function(router) {
    var adminController = require('../controllers/admin.controller');

    router.get('/admin/orders/list', adminController.list_orders);
    router.get('/admin/order/:id', adminController.products_orders_by_id);

    //accept or deny order
    router.post('/admin/orders/deny_or_accept_order', adminController.deny_or_accept_order)

    //thong ke 4 thang
    router.get('/admin/statistic/4month', adminController.statistic_4month)

    //thong ke thang truoc theo loai sp
    router.get('/admin/statistic/sales_last_month', adminController.sales_last_month)
    //thong ke thang này theo loai sp
    router.get('/admin/statistic/sales_this_month', adminController.sales_this_month)
}