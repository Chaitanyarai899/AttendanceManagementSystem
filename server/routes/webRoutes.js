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

router.get("/api/attendance", (req, res)=>{
    connection.query(`SELECT PA FROM attendance WHERE enrollement_no = ?`,
    [req.body.enroll], 
    function(error, result){
        if(error){
            throw error;
        }else{
            res.send(result);
        }
    })
})

router.post("/api/student", (req, res)=>{
    const enroll = req.body.enroll;

    connection.query(`SELECT * FROM student WHERE enrollment_no = ?`,
    [enroll],
    function(error, result){
        if(error){
            throw error;
        }else{
            res.send(result);
        }
    })
})

router.get("/api/attendanceStats", (req, res)=>{
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


module.exports = router;