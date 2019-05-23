const { Contact } = require("../models/Contact");
var mailgun = require("mailgun-js");
var DOMAIN = "mg.mattsolomondomain.com";
const apiKey = process.env.REACT_APP_MAILGUN_KEY || process.env.MAILGUN_KEY;
var mailgun = require("mailgun-js")({
  apiKey,
  domain: DOMAIN
});

const createContact = (req, res) => {
  // let contact = new Contact({
  //   name: req.body.name,
  //   company: req.body.company,
  //   email: req.body.email
  // });
  // contact
  //   .save()
  //   .then(response => {
  //     res.status(201).send(response);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).send(err);
  //   });
  var data = {
    from: "0791msolomon@gmail.com",
    to: "0791msolomon@gmail.com",
    subject: `${req.body.company} is Interested in you`,
    text: `${req.body.name} is interested in you for ${
      req.body.company
    }, reply back to them at ${req.body.email}`
  };
  mailgun
    .messages()
    .send(data)
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
};
module.exports = { createContact };
