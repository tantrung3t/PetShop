
var product = require('../models/product.model');

const jwt = require('jsonwebtoken');

const secretKey = "token";

exports.get_product_id = function (req, res) {
    var id = req.params.id;
    product.get_product_id(id, function (data) {
        res.send(data);
    })
}

exports.get_all_product = function (req, res) {
    var id = req.params.id;
    product.get_all_product(id, function (data) {
        res.send(data);
    })
}

exports.get_products_by_brand = function (req, res) {
    var id = req.params.id;
    product.get_products_by_brand(id, function (data) {
        const temp = data.map(ele => {
            return {
                brandName: ele.product_brand_name,
                products: data
            }
        })
        res.send(temp);
    })
}

exports.get_thu_an_cun = function (req, res) {
    product.get_thu_an_cun(function (data) {
        res.send(data);
    })
}

exports.get_thu_an_meo = function (req, res) {
    product.get_thu_an_meo(function (data) {
        res.send(data);
    })
}

exports.get_do_choi_thu_cung = function (req, res) {
    product.get_do_choi_thu_cung(function (data) {
        res.send(data);
    })
}

exports.get_phu_kien_thu_cung = function (req, res) {
    product.get_phu_kien_thu_cung(function (data) {
        res.send(data);
    })
}

exports.get_chuong_thu_cung = function (req, res) {
    product.get_chuong_thu_cung(function (data) {
        res.send(data);
    })
}

exports.get_product_brand = function (req, res) {
    product.get_product_brand(function (data) {
        res.send(data);
    })
}

exports.get_brand_by_id = function (req, res) {
    var id = req.params.id;
    product.get_brand_by_id(id, function (data) {
        res.send(data);
    })
}


exports.search = function(req, res) {
    product.search(req.body.search, function(data){
        res.send(data);
    })
}

exports.shopping_cart_delete = function(req, res) {
    product.shopping_cart_delete(req.body, function(data){
        res.send(data);
    })
}


//add product

exports.add_product = function (req, res) {
    var token = req.body.token;



    var product_data = {
        "product_brand_id": req.body.product_brand_id,
        "product_type_id": req.body.product_type_id,
        "product_name": req.body.product_name,
        "product_price": req.body.product_price,
        "product_description": req.body.product_description,
        "product_amount": req.body.product_amount,
        "product_sold": req.body.product_sold,
        "product_image": req.body.product_image
    }
    try {
        //kiem tra neu token hop len thi tra kq = account_id
        var kq = jwt.verify(token, secretKey)
        product.add_product(product_data, function (data) {
            res.send(data);
        })

    }
    catch (error) {
        //tra ve loi nieu token het han hoac khong hop le
        return res.json({
            status: 401,
            message: 'Token expires or Deny',
        })
    }
}

//edit product
exports.edit_product = function (req, res) {
    var token = req.body.token;

    var product_edit_data = {
        "product_id": req.body.product_id,
        "product_brand_id": req.body.product_brand_id,
        "product_type_id": req.body.product_type_id,
        "product_name": req.body.product_name,
        "product_price": req.body.product_price,
        "product_description": req.body.product_description,
        "product_amount": req.body.product_amount,
        "product_image": req.body.product_image
    }
    try {
        //kiem tra neu token hop len thi tra kq = account_id
        var kq = jwt.verify(token, secretKey)
        product.edit_product(product_edit_data, function (data) {
            res.send(data);
        })

    }
    catch (error) {
        //tra ve loi nieu token het han hoac khong hop le
        return res.json({
            status: 401,
            message: 'Token expires or Deny',
        })
    }
}

//delete product
exports.delete_product = function (req, res) {
    var token = req.body.token;

    var product_id = req.body.product_id
    
    try {
        //kiem tra neu token hop len thi tra kq = account_id
        var kq = jwt.verify(token, secretKey)
        product.delete_product(product_id, function (data) {
            res.send(data);
        })

    }
    catch (error) {
        //tra ve loi nieu token het han hoac khong hop le
        return res.json({
            status: 401,
            message: 'Token expires or Deny',
        })
    }
}

//get product in shopping cart
exports.get_product_in_shopping_cart = function (req, res) {
    var token = req.params.id;
    
    try {
        //kiem tra neu token hop len thi tra kq = account_id
        var kq = jwt.verify(token, secretKey)
        var account_id = kq.id;
        product.get_product_in_shopping_cart(account_id, function (data) {
            res.send(data);
        })

    }
    catch (error) {
        //tra ve loi nieu token het han hoac khong hop le
        return res.json({
            status: 401,
            message: 'Token expires or Deny',
        })
    }
}

//add product in shopping cart
exports.add_product_in_shopping_cart = function (req, res) {
    var token = req.body.token;
    var product_id = req.body.product_id;
    var shopping_cart_amount = req.body.shopping_cart_amount;
    
    try {
        //kiem tra neu token hop len thi tra kq = account_id
        var kq = jwt.verify(token, secretKey)
        var account_id = kq.id;

        product.add_product_in_shopping_cart(product_id, account_id, shopping_cart_amount, function (data) {
            res.send(data);
        })
 
    }
    catch (error) {
        //tra ve loi nieu token het han hoac khong hop le
        return res.json({
            status: 401,
            message: 'Token expires or Deny',
        })
    }
}