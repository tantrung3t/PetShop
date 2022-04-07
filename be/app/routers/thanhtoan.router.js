module.exports = function (router) {
    var thanhtoanController = require('../controllers/thanhtoan.controller');

    router.post('/thanhtoan', thanhtoanController.thanhtoan);
}