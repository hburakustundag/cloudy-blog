const Blog = require("../models/Blog");
const Comment = require("../models/Comment");
const cloudinary = require("../middleware/cloudinary");

module.exports = {
  getBlogs: async (req, res) => {
    try {
      const blogPosts = await Blog.find().sort({ date: -1 }).lean();
      res.status(200);
      res.render("blogs.ejs", { blogs: blogPosts, user: req.user });
    } catch (error) {
      console.error(error);
    }
  },

  getNewBlog: async (req, res) => {
    res.status(200).render("newblog.ejs", { user: req.user });
  },

  getOneBlog: async (req, res) => {
    try {
      const blogPost = await Blog.findById(req.params.id).populate({
        path: "comments",
        options: { sort: { date: 1 } },
      });
      const date = new Date(blogPost.date).toLocaleString();
      res.render("post.ejs", {
        blog: blogPost,
        user: req.user,
        date: date,
      });
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
        caption: req.body.caption,
        user: req.user.username,
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

  likePost: async (req, res) => {
    try {
      await Blog.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.status(200);
      res.redirect(`/blogs/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },

  deletePost: async (req, res) => {
    try {
      const blog = await Blog.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(blog.cloudinaryId);
      await Blog.deleteOne({ _id: req.params.id });
      console.log("Deleted Post");
      res.status(200);
      res.redirect("/blogs");
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  },
};
