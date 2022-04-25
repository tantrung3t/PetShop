module.exports = function (router) {
    var thanhtoanController = require('../controllers/thanhtoan.controller');

    router.post('/payment/momo_payment', thanhtoanController.momo_payment);
    router.post('/payment/cash_payment', thanhtoanController.cash_payment);
    // router.post('/payment/cash_payment', (req, res) => {
    //     console.log(req.body)
    // })
    // router.post('/payment/momo_payment', (req, res) => {
    //     console.log(req.body)
    // })
    router.post('/payment/status', thanhtoanController.status_payment)
}