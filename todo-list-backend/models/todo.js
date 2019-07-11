const mongoose = require('mongoose');

// Create schema
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: 'Please, enter todo'
  },
  completed: {
    type: Boolean,
    default: false
  }
});

// Create model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
