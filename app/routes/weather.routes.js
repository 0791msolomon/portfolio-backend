const router = require("express").Router();

const weatherController = require("../controllers/weatherController.js");

router.get("/", weatherController.getZip);

module.exports = router;
