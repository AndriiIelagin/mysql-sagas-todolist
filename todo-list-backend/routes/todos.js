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
//         console.error('error connecting: ' + error.stack);
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
  console.log('typeof', req.body.todo)
  console.log('req.body.todo.text', typeof req.body.todo.text)
  console.log('req.body.todo.categoryId', typeof Number(req.body.todo.category))
  connection.query("INSERT INTO todos(text, categoryId) VALUES (" + "'" + req.body.todo.text + "'" + ", " + Number(req.body.todo.category) + ")", (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send('Todo has added successfully ' + req.body);
  });
});

module.exports = router;
