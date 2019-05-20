const router = require("express").Router();

const blogController = require("../controllers/blog.controller");

module.exports = router;
router.get("/:id", blogController.getBlog);
router.put("/:id", blogController.addComment);

router.get("/", blogController.getAll);
router.post("/", blogController.postBlog);
router.put("/like/:id", blogController.likePost);
router.post("/reply", blogController.reply);
