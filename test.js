const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    user:'avnadmin',
    password:process.env.DB_PASS,
    database:'defaultdb',
    ssl: {ca:fs.readFileSync(__dirname + "/mysql-ca.crt")}
})

const app = express();

app.get("/", function(req, res){
    connection.query("SELECT * FROM testtable", function(error, result){
        if(error){
            res.send("Något gick fel!");
        }else{
            res.send(result[0]);
        }
    })
    
})

app.listen(3000);