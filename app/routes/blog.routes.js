const router = require("express").Router();

const blogController = require("../controllers/blog.controller");

module.exports = router;

router.get("/", blogController.getAll);
router.post("/", blogController.postBlog);
router.post("/like/:id", blogController.likePost);
router.post("/reply", blogController.reply);
