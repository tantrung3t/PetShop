 const db =  require('../common/connect');

 const Test = function(test){
 }

    Test.get_test = function(result) {
        db.query("select * from products", function (err, data){
            if(err){
              result(null);
            }
            else {
              result(data);
            }
          })
 }

 module.exports = Test;