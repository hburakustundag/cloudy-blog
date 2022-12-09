const router = require("express").Router();
const blogsController = require("../controllers/blogs");
const upload = require("../middleware/multer");
const { ensureAuth } = require("../middleware/auth");

router.get("/", blogsController.getBlogs);
router.get("/new", blogsController.getNewBlog);
router.get("/:id", blogsController.getOneBlog);
router.post("/", upload.single("file"), blogsController.createBlog);
router.put("/:id", blogsController.likePost);
router.delete("/:id", blogsController.deletePost);

module.exports = router;
