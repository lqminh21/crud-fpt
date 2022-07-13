var mysql = require('mysql2');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'minh2121',
    database : 'personal_infomation'
});
connection.connect(function(err){
    if(err) throw err
    console.log('Database connected')
})
module.exports = connection

