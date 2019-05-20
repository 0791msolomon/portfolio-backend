const mongoose = require("mongoose");

const Blog = mongoose.model("blogs", {
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: 2
  },
  body: {
    type: String,
    required: true,
    trime: true,
    minLength: 5
  },
  image: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  likes: {
    type: Number,
    required: false
  },
  replies: {
    type: Array,
    required: false
  }
});

module.exports = { Blog };
