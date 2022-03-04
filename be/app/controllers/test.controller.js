
var Test = require('../models/test.model');

exports.test = function(req, res) {
    Test.get_test(function(data){
        res.send(data);
    })
}