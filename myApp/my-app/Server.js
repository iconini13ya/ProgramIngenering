var express = require('express');
var mysql = require('mysql2');
var app = express();

function getMySQLConnection() {
	return mysql.createConnection({
	  host: "localhost",
    user: "root",
    database: "test",
    password: "VjSa1Der"
	});
}

app.get("/posts",function(req,res){
    var connection = getMySQLConnection();
    connection.connect();
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');

    connection.query('SELECT * FROM test.posts;',function(error,result){
        if (error){console.log(error);}
        else{
            res.send(result);
        }
    });
    
    
});
  
app.listen(3000,function(){
    console.log("Порт 3000 поднят");
});