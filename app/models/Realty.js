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
  },
  rooms: {
    type: Number,
    required: false
  },
  baths: {
    type: Number,
    required: false
  },
  footage: {
    type: Number,
    required: false
  }
});

module.exports = { Home };
