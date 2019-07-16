const express = require('express');
const router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  database: 'testdb',
  user: 'yojji',
  password: 'password'
});

// connection.connect((error) => {
//     if (error) {
//         console.erroror('error connecting: ' + error.stack);
//         return;
//     }
//     console.log('Connected as id ' + connection.threadId);

// });

router.get('/todos', (req, res) => {
  connection.query('SELECT * FROM todos', (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send(result);
  });
});

router.post('/todos', (req, res) => {
  // console.log(req.body.json())
  const values = req.body.json().then(todo => Object.values(todo));
  connection.query("INSERT INTO todos(text, categoryId) VALUES ?", [values],  (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send('Todo has added successfully ' + req.body);
  });
});

module.exports = router;
