const db = require('../common/connect');

const jwt = require('jsonwebtoken');

const secretKey = "token";

module.exports = function (router) {


    router.post('/login', function (req, res, next) {
        var username = req.body.username;
        var password = req.body.password;

        var strquery = "SELECT * FROM `accounts` WHERE account_username = '" + username + "' and account_password = '" + password + "'"

        db.query(strquery, function (err, data) {
            if (!err) {
                if (data.length == 0) {
                    return res.json({
                        status: 200,
                        message: 'Fail',
                        token: null
                    })
                }
                else {
                    var token = jwt.sign(data[0].account_id, secretKey)
                    return res.json({
                        status: 200,
                        message: 'OK',
                        token: token
                    })
                }
            }
            else {

                res.status(500).json("Loi server")
            }
        })

    })

    router.get('/private/:token', function (req, res) {
        try {
            var token = req.params.token

            //kiem tra neu token hop len thi tra kq = account_id
            var kq = jwt.verify(token, secretKey)
            return res.json({
                message: 'Ok',
                id: kq
            })

        }
        catch (error) {
            //tra ve loi nieu token khong hop le
            return res.json({
                message: 'Sai token dang nhap',
            })
        }
    })

}