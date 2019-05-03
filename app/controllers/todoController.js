const { Todo } = require("../models/Todo");

const getTodos = async (req, res) => {
  Todo.find()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
const postTodo = (req, res) => {
  let todo = new Todo({
    task: req.body.todo,
    priority: req.body.priority
  });
  todo
    .save()
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
module.exports = { getTodos, postTodo };
