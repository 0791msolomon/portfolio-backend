const router = require("express").Router();
const triviaController = require("../controllers/trivia.controller.js");

router.get("/", triviaController.findWord);
router.get("/randomTrivia", triviaController.randomTrivia);
router.get("/number", triviaController.getNumber);

module.exports = router;
