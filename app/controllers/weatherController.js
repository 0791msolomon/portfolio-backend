const axios = require("axios");

const getZip = async (req, res) => {
  try {
    // let response = await axios.get(
    //   `https://www.zipcodeapi.com/rest/${
    //     process.env.REACT_APP_ZIPCODE_KEY
    //   }/info.json/${req.query.zip}/radians`
    // );
    let forecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${
        req.query.zip
      },us&units=${req.query.unit}&APPID=${
        process.env.REACT_APP_WEATHER_API_KEY
      }`
    );
    let data = {
      // city: response.data.city,
      forecastInfo: forecast.data
    };
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
module.exports = { getZip };
