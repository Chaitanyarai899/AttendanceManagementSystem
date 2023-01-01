const express = require("express");
const router = express.Router();
const mysql = require("mysql");

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


router.post("/api/employee", (req, res)=>{    
    connection.query(`SELECT name, designation, date_of_joining FROM employee WHERE instructor_id = ? AND password = ?`, 
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

router.post("/api/classes", (req, res)=>{
    
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


router.get("/api/students", (req, res)=>{

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

module.exports = router;