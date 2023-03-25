// import thư viện 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mySql = require('mysql');
const app = express()

// Cổng localhost:0212
const Port = process.env.PORT || 1202

// Sử dụng thư viện 
app.use(morgan('combined')) 
app.use(cors()) 
app.use(bodyParser.urlencoded({extended:false}))

// Connect with MySql
const db = mySql.createPool({
    host : 'localhost',
  	user : 'root',
  	password : 'password',
  	database : 'appshop'
})

// Xây dựng Path với các methor (post, get, put, delete)
app.get('/api/getUser',(req,res)=>{
    const sqlSelect = "SELECT * FROM user"
    db.query(sqlSelect,(error,result)=>{
        res.send(result)??res.send('failures')
    })
})
app.post('/api/postUser',(req,res)=>{
    const sqlInsert = "INSERT INTO user (phone,password) VALUES (?,?)"
    const Phone = req.body.phone
    const Password = req.body.password
    db.query(sqlInsert,[Phone,Password],(error,result)=>{
        console.log(result);
    })
})

// app lắng nghe port 
app.listen(Port,()=>{
    console.log(`app listening success at http://localhost: ${Port}`);
})