const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// connect to mlab database
mongoose.connect('mongodb://test:test123@ds249967.mlab.com:49967/todo-tist', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

// get an instance of router
const router = express.Router();

router.get('/todos', (req, res) => {
  res.send('im the home page!');
});

router.post('/todos', (req, res) => {
  res.send('im the about page!');
});

// apply the routes to our application
app.use('/', router);

// run server
app.listen(PORT, () => {
  console.log('now listening for requests on port ', PORT);
});
