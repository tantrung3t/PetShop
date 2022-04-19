const jwt = require('jsonwebtoken');

const secretKey = "token";

var account = require('../models/account.model');

exports.account_orders = function (req, res) {

    try {
        var token = req.params.token

        //kiem tra neu token hop len thi tra kq = {id: id tai khoan , iat: thoi gian dang nhap, exp: thoi gian het han}
        // get id user user data.id
        var dataToken = jwt.verify(token, secretKey)

        account.account_orders(dataToken.id, function (data) {
            res.send(data);
        })

    }
    catch (error) {
        //tra ve loi nieu token khong hop le
        return res.json({
            status: 401,
            message: 'Token expires or Deny',
        })
    }

}

exports.update_account = function (req, res) {
    var dataBody = req.body

    account.update_account(dataBody, function (data) {
        res.send(data);
    })

}
