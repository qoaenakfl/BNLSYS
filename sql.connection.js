var mysql = require('mysql');

exports.connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'qoaenakfl',
    password : 'cjstkd12'
    database : 'InventorySYS' 
})

module.exports = mysql;