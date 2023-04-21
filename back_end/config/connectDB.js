const mySql = require('mysql');
// Connect with MySql

const db = mySql.createConnection({
    host : 'localhost',
  	user : 'root',
  	password : '',
  	database : 'shop1974'
})
module.exports = db;