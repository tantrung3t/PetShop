const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

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

exports.orderByID = function (req, res) {
    var orderID = req.params.id

    account.orderByID(orderID, function (data) {
        res.send(data);
    })

}

exports.forgotPassword = function (req, res) {

    var transporter =  nodemailer.createTransport({ // config mail server
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 't2kpetshop@gmail.com', //Tài khoản gmail vừa tạo
            pass: 't2kpetshopb1805828' //Mật khẩu tài khoản gmail vừa tạo
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });
    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 't2kpetshop@gmail.com',
    //         pass: 't2kpetshopb1805828'
    //     }
    // });

    var content = '';
    content += `
        <div style="padding: 10px; background-color: rgb(145, 194, 204);">
            <div style="padding: 10px; background-color: rgb(255, 255, 255);">
                <h3 style="color: rgb(0, 133, 255);">Chào bạn!</h3>
                <h4 style="color: rgb(90, 35, 35);">Bạn đã gửi thông tin yêu cầu cấp lại mật khẩu mới.</h4>
                <h5 style="color: rgb(90, 35, 35);">Mật khẩu mới của bạn là: </h5>
                <h5 style="color: rgb(90, 35, 35);">Vui lòng bảo mật các thông tin cá nhân!</h5>
            </div>
        </div>
    `;

    var mailOptions = {
        from: 't2kpetshop@gmail.com',
        to: 'tantrung.dmc@gmail.com',
        subject: 'Quên mật khẩu tài khoản T2K Shop',
        text: 'Mật khẩu',
        html: content
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(500).send('error');
        }
        else {
            // console.log('Message sent: %s', info.messageId);
            // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.status(200).send('success');
        }
    });


    // let testAccount = await nodemailer.createTestAccount();
    // let transporter = nodemailer.createTransport({
    //     service: "Gmail",
    //     auth: {
    //         user: "sender@gmail.com",
    //         pass: "passwordSender"
    //     }
    // });

    // let info = await transporter.sendMail({
    //     from: '"KhanhPT👻" <sender@gmail.com>', // sender address
    //     to: "receiver1@gmail.com, receiver2@gmail.com", // list of receivers
    //     subject: "Test send email ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Test chức năng gửi mail ứng dụng Nodejs với Nodemailer</b>" // html body
    // });
    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}
