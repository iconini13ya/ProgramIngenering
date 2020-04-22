var express = require('express');
var mysql = require('mysql2');
var app = express();

// создаем парсер для данных в формате json
const jsonParser = express.json();

function getMySQLConnection() {
	return mysql.createConnection({
	  host: "localhost",
    user: "root",
    database: "chhome",
    password: "VjSa1Der"
	});
}

// настройка CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
  });
// Настройка сервера
// ---------------------------------------------------------------------------------------------
// Методы сервера

app.post("/registration",jsonParser,function(req,res){
    // если не переданы данные, возвращаем ошибку
    if(!req.body) return res.sendStatus(400);
    var connection = getMySQLConnection();
    connection.connect();
        connection.query(`INSERT INTO chhome.users (uname, sname, login, upassword, mail, adminrole) VALUES (`+`"`+`${req.body.name}`+`"`+`,`+`"`+`${req.body.sname}`+`"`+`,`+`"`+`${req.body.login}`+`"`+`,`+`"`+`${req.body.password}`+`"`+`,`+`"`+`${req.body.mail}`+`"`+`, '0');`,function(error,result){ 
            if (error)
            {
                console.log(error);
            }
            else{
                res.send(result.body);
            }
        });
        
});

app.get("/enter",function(req,res){
    var connection = getMySQLConnection();
    connection.connect();
        connection.query(`SELECT * FROM chhome.users WHERE login=`+`"`+`${req.query.login}`+`" AND upassword=`+`"`+`${req.query.password}`+`"`+`;`,function(error,result){
            if (error){console.log(error);}
            else{
                res.send(result);
            }
        });      
});
  
app.listen(3000,function(){
    console.log("Порт 3000 поднят");
});