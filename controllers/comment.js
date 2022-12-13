const Comment = require("../models/Comment");
const Blog = require("../models/Blog");

module.exports = {
  createComment: async (req, res) => {
    try {
      const id = req.params.id;
      const comment = new Comment({
        comment: req.body.comment,
        user: req.user.username,
        likes: 0,
        userId: req.user.id,
        blogId: req.params.id,
      });
      await comment.save();
      const postRelated = await Blog.findById(req.params.id);
      postRelated.comments.push(comment);
      await postRelated.save(function (err) {
        if (err) {
          console.log(err);
        }
      });
      console.log("Comment has been added!");
      res.redirect(`/blogs/${req.params.id}`);
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  },

  deleteComment: async (req, res) => {
    try {
      const post = await Blog.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { comments: req.params.commentId },
        },
        { new: true }
      );

      if (!post) {
        return res.status(404).redirect(`/blogs/${req.params.id}`);
      }
      await Comment.findByIdAndDelete(req.params.commentId);
      return res.status(200).redirect(`/blogs/${req.params.id}`);
    } catch (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    }
  },
};
