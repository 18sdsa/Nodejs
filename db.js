var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"sg666666",
    database:"girls"
});

connection.connect();

connection.query("select * from admin",function(error,results,fields){
    if(error)
    {
        throw error;
    }
    {
        console.log(results);
    }
    
})

connection.end();

