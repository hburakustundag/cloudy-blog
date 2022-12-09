const Blog = require("../models/Blog");

module.exports = {
  getIndex: async (req, res) => {
    const blog = await Blog.find({ user: "Johnny Bravo" });
    res.render("index", { user: req.user, blogs: blog });
  },
};
