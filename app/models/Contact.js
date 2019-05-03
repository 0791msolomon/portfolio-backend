const mongoose = require("mongoose");

const Contact = mongoose.model("contacts", {
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  company: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  email: {
    type: String,
    required: true,
    trime: true,
    minLength: 1
  }
});
module.exports = { Contact };
