var express = require('express');
var mysql = require('mysql2');
var app = express();

function getMySQLConnection() {
	return mysql.createConnection({
	  host: "localhost",
    user: "root",
    database: "chhome",
    password: "VjSa1Der"
	});
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();  // передаем обработку запроса методу app.post("/postuser"...
  });
// Настройка сервера
// ---------------------------------------------------------------------------------------------
// Методы сервера

app.post("/registration",function(req,res){
    console.log("Получил запрос на пост");
    // если не переданы данные, возвращаем ошибку
    if(!req.body) return res.sendStatus(400);
    var connection = getMySQLConnection();
    connection.connect();
        connection.query(`INSERT INTO "chhome"."users" ("name", "sname", "login", "password", "mail", "admin") VALUES (${req.name}, ${req.sname}, ${req.login}, ${req.password}, ${req.mail}, '0');`,function(error,result){ 
            if (error)
            {
                console.log(error);
            }
            // else{
            //     res.send(result);
            // }
        });
});

// app.get("/posts",function(req,res){
//     var connection = getMySQLConnection();
//     connection.connect();
        // connection.query('SELECT * FROM test.posts;',function(error,result){
        //     if (error){console.log(error);}
        //     else{
        //         res.send(result);
        //     }
        // });
// });
  
app.listen(3000,function(){
    console.log("Порт 3000 поднят");
});