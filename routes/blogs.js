const router = require("express").Router();
const blogsController = require("../controllers/blogs");
const upload = require("../middleware/multer");
const commentController = require("../controllers/comment");
const { ensureAuth } = require("../middleware/auth");

router.get("/", blogsController.getBlogs);
router.get("/new", blogsController.getNewBlog);
router.get("/:id", blogsController.getOneBlog);
router.post("/", upload.single("file"), blogsController.createBlog);
router.put("/:id", blogsController.likePost);
router.delete("/:id", blogsController.deletePost);

router.post("/:id/comment", ensureAuth, commentController.createComment);
router.delete("/:id/:commentId", commentController.deleteComment);

module.exports = router;
