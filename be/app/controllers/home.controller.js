
var home  = require('../models/home.model');

exports.bestseller = function(req, res) {
    home.bestseller(function(data){
        res.send(data);
    })
}

exports.promotion = function(req, res) {
    home.promotion(function(data){
        res.send(data);
    })
}