const express = require('express');
const router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'testdb',
    user     : 'yojji',
    password : 'password',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);

});

router.get('/todos', (req, res) => {
  connection.query("SELECT * FROM categories", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

router.post('/todos', (req, res) => {
  res.send('im the about page!');
});

module.exports = router;
