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

app.use(bodyParser.json());
app.use(express.json());
  

const connection = mysql.createConnection({
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


//Web API's

app.get("/api/attendance", (req, res)=>{
    connection.query(`SELECT PA FROM attendance WHERE Enrollement_no = ?`,
    [req.body.enroll], 
    function(error, result){
        if(error){
            throw error;
        }else{
            res.send(result);
        }
    })
})


//APP API's
app.post("/api/employee", (req, res)=>{
    
    connection.query(`SELECT name, designation, date_of_joining FROM edcEmployee WHERE instructor_id = ? AND password = ?`, 
    [req.body.id, req.body.password],
    function(error, result){
        if(error){
            throw error;
        }else{
            res.send(result);         
        }
    }
    )
});

app.post("/api/classes", (req, res)=>{
    
    connection.query(`SELECT batch_id, subject_name, subject_code FROM edcSubjectAllocation WHERE instructor_code = ?`,
    [req.body.id],
    function(error, result){
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
