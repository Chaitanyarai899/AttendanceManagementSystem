require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const appRoutes = require("./routes/appRoutes");
const webRoutes = require("./routes/webRoutes");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(appRoutes);
app.use(webRoutes);
  

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
    connection.query(`SELECT * FROM student`, function(error, result){
        if(error){
            throw error;
        }else{
            res.send(result);
        }
    })
})


//Web API's
//APP API's



app.listen(8080, (req, res)=> {
    console.log("Server listening on port 8080");
})
