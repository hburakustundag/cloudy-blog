const router = require("express").Router();
const blogsController = require("../controllers/blogsController");

router.get("/", blogsController.getBlogs);
router.post("/createBlog", blogsController.createBlog);
router.put("/addOneLike", blogsController.addOneLike);
router.delete("/deleteBlog", blogsController.deleteBlog);

module.exports = router;
