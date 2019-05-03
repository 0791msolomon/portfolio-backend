const mongoose = require("mongoose");

const Todo = mongoose.model("todo", {
  task: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  priority: {
    type: Number,
    required: true
  }
});

module.exports = { Todo };
