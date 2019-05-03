const { Contact } = require("../models/Contact");

const createContact = (req, res) => {
  let contact = new Contact({
    name: req.body.name,
    company: req.body.company,
    email: req.body.email
  });
  contact
    .save()
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
module.exports = { createContact };
