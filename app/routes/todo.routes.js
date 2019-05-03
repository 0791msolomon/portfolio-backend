const router = require("express").Router();
const todoController = require("../controllers/todoController.js");

router.get("/", todoController.getTodos);
router.post("/", todoController.postTodo);
module.exports = router;
