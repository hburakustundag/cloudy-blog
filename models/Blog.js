const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  blog: {
    type: String,
    required: true,
  },
  user: {
    type: String,
  },
  caption: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Blog", BlogSchema);
