require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mysql = require("mysql");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

var connection = mysql.createConnection({
    host     : process.env.HOST,
    port     : process.env.PORT,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});


connection.connect(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("mysql connected");
    }
});


app.get("/api/allStudents", (req, res)=>{
    connection.query(`SELECT * FROM attendance`, function(error, result){
        if(error){
            throw error;
        }else{
            res.send(result);
        }
    })
})


app.listen(8080, (req, res)=> {
    console.log("Server listening on port 8080");
})
