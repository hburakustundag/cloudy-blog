const router = require("express").Router();
const blogsController = require("../controllers/blogs");
const upload = require("../middleware/multer");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, blogsController.getBlogs);
router.get("/:id", blogsController.getSampleBlogs);
router.post("/", upload.single("file"), blogsController.createBlog);
router.put("/", blogsController.addOneLike);
router.delete("/", blogsController.deleteBlog);

module.exports = router;
