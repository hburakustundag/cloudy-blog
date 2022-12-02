const Blog = require("../models/Blog");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getBlogs: async (req, res) => {
    try {
      const blogPosts = await Blog.find({ userId: req.user.id });
      res.render("blogs.ejs", { blogs: blogPosts, user: req.user });
    } catch (error) {
      console.error(error);
    }
  },

  getSampleBlogs: async (req, res) => {
    try {
      const sampleBlog = await Blog.find({ _id: req.params.id });
      res.render("blogs.ejs", { blogs: sampleBlog });
    } catch (error) {
      console.error(error);
    }
  },

  createBlog: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Blog.create({
        title: req.body.title,
        blog: req.body.blog,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        likes: 0,
        userId: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/blogs");
    } catch (err) {
      console.log(err);
    }
  },

  addOneLike: async (req, res) => {
    try {
      await Blog.findOneAndUpdate(
        { _id: req.body.blogIdFromJSFile },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Like Added");
      res.json("Like Added");
    } catch (err) {
      console.log(err);
    }
  },

  deleteBlog: async (req, res) => {
    try {
      await Blog.findOneAndDelete({ _id: req.body.blogIdFromJSFile });
      console.log("Blog Deleted");
      res.json("Blog Deleted");
    } catch (error) {
      console.error(error);
    }
  },
};
