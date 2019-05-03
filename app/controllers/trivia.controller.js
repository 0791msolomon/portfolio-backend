const axios = require("axios");

const findWord = async (req, res) => {
  try {
    let response = await axios.get(
      `http://api.urbandictionary.com/v0/define?term=${req.query.word}`
    );
    res.status(200).send(response.data.list[0].definition);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const getNumber = async (req, res) => {
  try {
    let response = await axios.get(
      `http://numbersapi.com/${req.query.number}/trivia  `
    );
    res.status(200).send(response.data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const randomTrivia = async (req, res) => {
  try {
    let response = await axios.get("http://jservice.io/api/random");
    res.status(200).send(response.data);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { findWord, getNumber, randomTrivia };
