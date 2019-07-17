const express = require('express');
const router = express.Router({ mergeParams: true });

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

router.get('/', (req, res) => {
  connection.query('SELECT * FROM todos', (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send(result);
  });
});

router.post('/', (req, res) => {
  connection.query(
    'INSERT INTO todos(text, categoryId) VALUES (' +
      "'" +
      req.body.todo.text +
      "'" +
      ', ' +
      Number(req.body.todo.category) +
      ')',
    (error, result) => {
      if (error) throw error;
      console.log(result);
      res.send('Todo has toggled successfully ' + req.body);
    }
  );
});

router.put('/:id', (req, res) => {
  connection.query('UPDATE todos SET completed = NOT completed WHERE id = ' + req.params.id, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send('Todo has added successfully ' + req.params.id);
  });
});

router.delete('/:id', (req, res) => {
  connection.query('DELETE FROM todos WHERE id = ' + req.params.id, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.send('Todo has added successfully ' + req.params.id);
  });
});

module.exports = router;
