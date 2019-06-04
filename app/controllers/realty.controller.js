const { Home } = require("../models/Realty");

const addHomes = (req, res) => {
  let price = Math.floor(Math.random() * 600000) + 100000;
  let rooms = Math.floor(Math.random() * 7) + 2;
  let bathrooms = Math.floor(Math.random() * 8) + 2;
  let squareFoot = Math.floor(Math.random() * 10000) + 2000;
  let home = new Home({
    time: Date.parse(new Date()),
    img: req.body.image,
    address: req.body.address,
    price: `$${price}`,
    state: req.body.state,
    rooms: rooms,
    baths: bathrooms,
    footage: squareFoot
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

const hundredListings = (req, res) => {
  Home.find({}, null, { limit: 100, sort: { time: -1 } })
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
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
const getHome = (req, res) => {
  Home.findById(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
const updateOne = (req, res) => {
  let rooms = Math.floor(Math.random() * 7) + 2;
  let bathrooms = Math.floor(Math.random() * 8) + 2;
  let squareFoot = Math.floor(Math.random() * 10000) + 2000;
  Home.findByIdAndUpdate(
    req.params.id,
    {
      $set: { rooms: rooms, baths: bathrooms, footage: squareFoot }
    },
    { upsert: true, new: true },
    function(err, doc) {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(doc);
    }
  );
};

const deleteOne = (req, res) => {
  let id = req.params.id;
  Home.findByIdAndDelete(id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const getPaging = (req, res) => {
  let start = req.params.page * 30;
  Home.find()
    .skip(start)
    .limit(30)
    .then(response => {
      res.status(200).send(response);
    });
};

const totalCount = (req, res) => {
  Home.countDocuments({})
    .then(response => {
      res.status(200).send({ response });
    })
    .catch(err => {
      res.status(500).send({ err });
    });
};
module.exports = {
  totalCount,
  getPaging,
  addHomes,
  getHomes,
  getHome,
  recentListings,
  getChunks,
  hundredListings,
  updateOne,
  deleteOne
};
