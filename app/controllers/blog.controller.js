const { Blog } = require("../models/Blog");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const addComment = (req, res) => {
  Blog.findOneAndUpdate(
    { _id: req.body.id },
    {
      $push: {
        replies: {
          comment: req.body.reply,
          name: req.body.name,
          time: Date.parse(new Date())
        }
      }
    },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.status(200).send(doc);
    }
  );
};

const postBlog = (req, res) => {
  let image;
  if (req.body.image) {
    image = req.body.image;
  } else {
    image =
      "https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg";
  }
  let blog = new Blog({
    title: req.body.title,
    body: req.body.body,
    time: Date.parse(new Date()),
    image
  });
  blog
    .save()
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getAll = (req, res) => {
  Blog.find()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

const likePost = (req, res) => {
  Blog.findById({ _id: req.params.id }).then(doc => {
    let likes;
    doc.likes ? (likes = doc.likes += 1) : (likes = 1);
    Blog.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { likes } },
      { new: true },
      function(err, doc2) {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        }
        res.status(200).send(doc2);
      }
    );
  });
};
const reply = (req, res) => {
  Blog.findOneAndUpdate(
    { _id: req.body.id },
    {
      $push: {
        replies: { comment: req.body.comment, time: Date.parse(new Date()) }
      }
    },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.status(200).send(doc);
    }
  );
};

function getBlog(req, res) {
  Blog.findById(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(response);
    });
  // console.log(req.params.id);
}
module.exports = { postBlog, getAll, likePost, reply, getBlog, addComment };
