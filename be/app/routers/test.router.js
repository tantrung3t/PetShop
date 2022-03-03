
module.exports = function(router) {
    var testController = require('../controllers/test.controller');

    router.get('/test', testController.test);
}