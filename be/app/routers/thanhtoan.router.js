module.exports = function (router) {
    var thanhtoanController = require('../controllers/thanhtoan.controller');

    router.post('/momo_payment', thanhtoanController.momo_payment);
}