module.exports = function(router) {
    var adminController = require('../controllers/admin.controller');

    router.get('/admin/orders/list', adminController.list_orders);
    router.get('/admin/order/:id', adminController.products_orders_by_id);

    //accept or deny order
    router.post('/admin/orders/deny_or_accept_order', adminController.deny_or_accept_order)
    
}