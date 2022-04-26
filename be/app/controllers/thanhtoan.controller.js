var payment = require('../models/thanhtoan.model');
const db = require('../common/connect');

exports.momo_payment = function (request, response) {
    var dataInsertId;
    var strquery = "INSERT INTO `orders`(`account_id`, `order_status`, `order_address`, `order_payment_momo`, `order_total`) VALUES ('" + request.body.account_id + "','0','" + request.body.order_address + "','1', '"+ request.body.amount +"')"
    var strqueryInsertListProducts = "INSERT INTO `orders_detail` (`order_id`, `product_id`, `orders_detail_quantity`) VALUES "
    db.query(strquery, function (err, data) {
        if (err) {
            response.send({
                status: 400,
                message: "Error insert to database"
            });
        }
        else {
            dataInsertId = data.insertId;
            // result("order: " + data.insertId)
            request.body.listProducts.map((item, i, row) => {
                if (i + 1 === row.length) {
                    strqueryInsertListProducts += "(" + data.insertId + ", " + item.product_id + ", " + item.shopping_cart_amount + ");"
                }
                else {
                    strqueryInsertListProducts += "(" + data.insertId + ", " + item.product_id + ", " + item.shopping_cart_amount + "),"
                }

                db.query("DELETE FROM `shopping_cart` WHERE account_id = "+ request.body.account_id +" and product_id = " + item.product_id, function(err, data){
                    if(err){
                        response.send({
                            status: 400,
                            message: "Error delete cart to database"
                        });
                    }
                })
            })

            db.query(strqueryInsertListProducts, function (err, data) {
                if (err) {
                    response.send({
                        status: 400,
                        message: "Error insert to database"
                    });
                }
                else {
                    //https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
                    //parameters

                    var partnerCode = "MOMOWABV20220402";
                    var accessKey = "iRNIAZVLNMWeeotJ";
                    var secretkey = "A6YWdGEHBcNqeCHOdbGsZpJAi463oczR";
                    var requestId = partnerCode + new Date().getTime();
                    var orderId = "DH00" + dataInsertId; 
                    var orderInfo = "Thanh toán cho đơn hàng trên T2K PetShop";
                    var redirectUrl = "http://localhost:3000/thanhtoan/";
                    var ipnUrl = "http://localhost:3000/thanhtoan/";
                    // var ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
                    var amount = request.body.amount;
                    var requestType = "captureWallet"
                    var extraData = ""; //pass empty value if your merchant does not have stores

                    //before sign HMAC SHA256 with format
                    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
                    var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType
                    //puts raw signature
                    // console.log("--------------------RAW SIGNATURE----------------")
                    // console.log(rawSignature)
                    //signature 
                    const crypto = require('crypto');
                    var signature = crypto.createHmac('sha256', secretkey)
                        .update(rawSignature)
                        .digest('hex');
                    console.log("--------------------SIGNATURE----------------")
                    // console.log(signature)

                    //json object send to MoMo endpoint
                    const requestBody = JSON.stringify({
                        partnerCode: partnerCode,
                        accessKey: accessKey,
                        requestId: requestId,
                        amount: amount,
                        orderId: orderId,
                        orderInfo: orderInfo,
                        redirectUrl: redirectUrl,
                        ipnUrl: ipnUrl,
                        extraData: extraData,
                        requestType: requestType,
                        signature: signature,
                        lang: 'en'
                    });
                    //Create the HTTPS objects
                    const https = require('https');
                    const options = {
                        hostname: 'test-payment.momo.vn',
                        port: 443,
                        path: '/v2/gateway/api/create',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Content-Length': Buffer.byteLength(requestBody)
                        }
                    }

                    //Send the request and get the response
                    const req = https.request(options, res => {
                        console.log(`Status: ${res.statusCode}`);
                        console.log(`Headers: ${JSON.stringify(res.headers)}`);
                        res.setEncoding('utf8');
                        res.on('data', (body) => {
                            console.log('Body: ');
                            console.log(body);


                            console.log('payUrl: ');

                            var resData = {
                                payUrl: JSON.parse(body).payUrl,
                                order_id: 1
                            }

                            console.log(resData);
                            response.send(resData);
                        });
                        res.on('end', () => {
                            // console.log('No more data in response.');
                        });
                    })

                    req.on('error', (e) => {
                        console.log(`problem with request: ${e.message}`);
                    });
                    // write data to request body
                    console.log("Sending....")
                    req.write(requestBody);
                    req.end();


                }
            })
        }
    })

}

exports.cash_payment = function (req, res) {
    payment.cash_payment(req.body, function (data) {
        res.send(data);
    })
}

exports.status_payment = function (req, res) {
    payment.status_payment(req.body, function (data) {
        res.send(data);
    })
}