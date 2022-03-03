var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webbanhang'
});

connection.connect(function(err) {
    if(err) console.log("Ket noi CSDL that bai!");
    else{
        console.log("Da ke noi den CSDL!")
    }
});

module.exports = connection;