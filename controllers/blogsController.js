const Blog = require("../models/Blog");

module.exports = {
  getBlogs: async (req, res) => {
    try {
      const blogPosts = await Blog.find();
      res.render("blogs.ejs", { blogs: blogPosts });
    } catch (error) {
      console.error(error);
    }
  },

  createBlog: async (req, res) => {
    try {
      await Blog.create({
        title: req.body.title,
        blog: req.body.blog,
        likes: 0,
      });
      console.log("Blog has been created");
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
