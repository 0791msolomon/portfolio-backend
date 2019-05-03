const router = require("express").Router();

const contactFormController = require("../controllers/contactForm.controller");
module.exports = router;

// router.get("/search", todoController.getAll);
// router.get("/:id", todoController.findById);
router.post("/", contactFormController.createContact);
// router.put("/:id", todoController.updateTodo);
// router.delete("/:id", todoController.deleteTodo);
