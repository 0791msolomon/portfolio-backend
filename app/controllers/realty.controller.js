const { Home } = require("../models/Realty");

const addHomes = (req, res) => {
  let price = Math.floor(Math.random() * 600000) + 100000;
  let home = new Home({
    time: Date.parse(new Date()),
    img: req.body.image,
    address: req.body.address,
    price: `$${price}`,
    state: "WY"
  });
  home
    .save()
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getHomes = (req, res) => {
  Home.find()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const recentListings = (req, res) => {
  Home.find({}, null, { limit: 5, sort: { time: -1 } })
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
const getChunks = (req, res) => {
  Home.find({}, null, { limit: 100, sort: { time: -1 } })
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
module.exports = { addHomes, getHomes, recentListings, getChunks };
