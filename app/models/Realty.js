const mongoose = require("mongoose");

const Home = mongoose.model("realty", {
  img: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

module.exports = { Home };
