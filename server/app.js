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

app.post("/api/student", (req, res)=>{
    connection.query(`SELECT name FROM edcStudents WHERE enrollmentNo = ?`,
    [req.body.enroll],
    function(error, result){
        if(error){
            throw error;
        }else{
            res.send(result);
        }
    })
})

app.get("/api/attendanceStats", (req, res)=>{
    console.log("Working fine");
    connection.query(`SELECT PA FROM attendance WHERE Enrollement_no = ? AND periodID=?`,
    [req.body.enroll, req.body.period],
    function(error, result){
        if(error){
            throw error;
        }else{
            var status = checkAttendanceStats(JSON.stringify(result[0].PA))
            res.send({message: status});

        }
    })
})

function checkAttendanceStats(status){
    console.log(status);
    if(status!==0){
        status = "present";
        return status;
    }
}

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


app.get("/api/students", (req, res)=>{

    connection.query(`SELECT enrollmentNO, name from edcStudents where  edcStudents.course IN (select edcBatchAllocation.course from edcBatchAllocation where batch_id = ?) AND  edcStudents.stream IN (select edcBatchAllocation.stream from edcBatchAllocation where batch_id = ?);`,
    [req.body.batch, req.body.batch],
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
