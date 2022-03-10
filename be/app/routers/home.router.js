
module.exports = function(router) {
    var homeController = require('../controllers/home.controller');

    router.get('/home_bestseller', homeController.bestseller);
    router.get('/home_promotion', homeController.promotion);
}