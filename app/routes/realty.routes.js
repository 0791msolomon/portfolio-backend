const router = require("express").Router();
const realtyController = require("../controllers/realty.controller");

router.post("/", realtyController.addHomes);
router.get("/", realtyController.getHomes);
router.get("/recentListings", realtyController.recentListings);
router.get("/chunks", realtyController.getChunks);
module.exports = router;
