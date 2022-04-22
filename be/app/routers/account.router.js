const db = require('../common/connect');

const jwt = require('jsonwebtoken');

const secretKey = "token";

module.exports = function (router) {
    var accountController = require('../controllers/account.controller');

    router.post('/login', function (req, res) {
        var username = req.body.username;
        var password = req.body.password;

        var strquery = "SELECT accounts.account_id, infomation.info_lname, infomation.info_fname, infomation.info_date, infomation.info_address, infomation.info_phone_number, infomation.info_email, infomation.info_sex FROM `accounts`, infomation WHERE account_username = '"+ username +"' and account_password = '"+ password +"' and accounts.account_id = infomation.account_id;"

        db.query(strquery, function (err, data) {
            if (!err) {
                if (data.length == 0) {
                    return res.json({
                        status: 400,
                        message: 'Fail Login',
                        token: null
                    })
                }
                else {
                    var token = jwt.sign({id: data[0].account_id}, secretKey, { expiresIn: '1h'} )
                    return res.json({
                        status: 200,
                        message: 'OK',
                        token: token,
                        profile: data[0]
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

            //kiem tra neu token hop len thi tra kq = {id: id tai khoan , iat: thoi gian dang nhap, exp: thoi gian het han}
            // get id user user data.id
            var data = jwt.verify(token, secretKey)
            return res.json({
                message: 'Ok',
                data: data
            })

        }
        catch (error) {
            //tra ve loi nieu token khong hop le
            return res.json({
                status: 401,
                message: 'Token expires or Deny',
            })
        }
    })

    router.post('/signup', function (req, res) {
        var username_sign_up = req.body.username_sign_up;
        var password_sign_up = req.body.password_sign_up;
        var name_sign_up = req.body.name_sign_up;
        var email_sign_up = req.body.email_sign_up;

        var strquery_add_username_password = "INSERT INTO `accounts`(`account_username`, `account_password`) VALUES ('"+ username_sign_up +"','" + password_sign_up + "')"
        //them tai khoan va mat khau vao csdl
        db.query(strquery_add_username_password, function (err, data){
            //khong tao duoc
            if(err || data.length == 0) return res.json("Tạo tài khoản thất bại!")
            //tao dc
            else{
                var strquery_account_id = "SELECT * FROM `accounts` WHERE account_username = '"+ username_sign_up + "'"
                //thuc hien cau lenh truy van de tim account_id vua tao
                db.query(strquery_account_id, function (err, data){
                    var strquery_add_info_with_account_id = "INSERT INTO `infomation` (`account_id`,`info_fname`, `info_email`) VALUES ('"+ data[0].account_id +"', '"+ name_sign_up +"', '"+ email_sign_up +"')"
                    
                    db.query(strquery_add_info_with_account_id, function (err, data){
                        return res.json({
                            status: 200,
                            message: 'OK'
                        })
                    })
                })
            }
            
        })
        })
        
        //get orders of account
        router.get('/account/orders/:token', accountController.account_orders);
        router.get('/account/order/:id', accountController.orderByID);

        //update account
        router.post('/account/update', accountController.update_account);

        router.post('/account/forgotpassword', accountController.forgotPassword);
}