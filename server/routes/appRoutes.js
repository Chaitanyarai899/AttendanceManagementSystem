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


router.post("/api/login", (req, res)=>{  
    const id = req.body.id;
    const password = req.body.password; 
    
    connection.query(`SELECT name, designation, date_of_joining FROM employee WHERE instructor_id = ? AND password = ?`, 
    [id, password],
    function(error, result){
        if(error){
            throw error;
        }else{
            if(result[0] == null){
                res.status(400).send({message: "User doesn't exist"})
            }else{
                res.send({message: "Successfully logedin", result: result})
            }
        }
    }
    )
});

router.post("/api/classes", (req, res)=>{
    const id = req.body.id;

    connection.query(`SELECT batch_id, subject_name, subject_code, type FROM subject_allocation WHERE instructor_id = ?`,
    [id],
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