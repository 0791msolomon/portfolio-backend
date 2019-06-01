const router = require("express").Router();
const realtyController = require("../controllers/realty.controller");

router.post("/", realtyController.addHomes);
router.get("/", realtyController.getHomes);
router.get("/home/:id", realtyController.getHome);
router.get("/recentListings", realtyController.recentListings);
router.get("/hundredListings", realtyController.hundredListings);
router.get("/chunks", realtyController.getChunks);
router.put("/home/:id", realtyController.updateOne);
router.delete("/:id", realtyController.deleteOne);
module.exports = router;
