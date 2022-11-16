const router = require("express").Router();
const blogsController = require("../controllers/blogs");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, blogsController.getBlogs);
router.post("/", blogsController.createBlog);
router.put("/", blogsController.addOneLike);
router.delete("/", blogsController.deleteBlog);

module.exports = router;
