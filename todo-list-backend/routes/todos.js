const express = require('express');
const router = express.Router({ mergeParams: true });

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   database: 'testdb',
//   user: 'yojji',
//   password: 'password'
// });

// connection.connect((error) => {
//     if (error) {
//         console.error('error connecting: ' + error.stack);
//         return;
//     }
//     console.log('Connected as id ' + connection.threadId);

// });
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'yojji',
    password: 'password',
    database: 'todo_list'
  }
});

router.get('/', (req, res) => {
  // connection.query('SELECT * FROM todos', (error, result) => {
  //   if (error) throw error;
  //   console.log(result);
  //   res.send(result);
  // });
  knex
    .select('*')
    .from('todos')
    .then(todos => res.send(todos));
});

router.post('/', (req, res) => {
  // connection.query(
  //   'INSERT INTO todos(text, categoryId) VALUES (' +
  //     "'" +
  //     req.body.todo.text +
  //     "'" +
  //     ', ' +
  //     Number(req.body.todo.category) +
  //     ')',
  //   (error, result) => {
  //     if (error) throw error;
  //     console.log(result);
  //     res.send('Todo has toggled successfully ' + req.body);
  //   }
  // );
  knex('todos').insert({
    text: req.body.todo.text,
    categoryId: Number(req.body.todo.category)
  });
});

router.put('/:id', (req, res) => {
  // connection.query(
  //   'UPDATE todos SET completed = NOT completed WHERE id = ' + req.params.id,
  //   (error, result) => {
  //     if (error) throw error;
  //     console.log(result);
  //     res.send('Todo has added successfully ' + req.params.id);
  //   }
  // );
  knex('todos')
    .where({ id: req.params.id })
    .update({ completed: !completed });
});

router.delete('/:id', (req, res) => {
  // connection.query(
  //   'DELETE FROM todos WHERE id = ' + req.params.id,
  //   (error, result) => {
  //     if (error) throw error;
  //     console.log(result);
  //     res.send('Todo has added successfully ' + req.params.id);
  //   }
  // );
  knex('todos')
    .where({ id: req.params.id })
    .del();
});

module.exports = router;
