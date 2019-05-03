const axios = require("axios");

const getZip = async (req, res) => {
  try {
    let response = await axios.get(
      `https://www.zipcodeapi.com/rest/${
        process.env.REACT_APP_ZIPCODE_KEY
      }/info.json/${req.query.zip}/radians`
    );
    res.status(200).send(response.data.city);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
module.exports = { getZip };
