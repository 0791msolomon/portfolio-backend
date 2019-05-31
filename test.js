const axios = require("axios");
const check = () => {
  axios.get("http://localhost:5000/api/blog").then(res => {
    console.log(res.data);
    process.exit();
  });
};
// check();
// process.exit();

const most = word => {
  let obj = {};
  for (let char of word) {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }
  let letter = "";
  let count = 0;
  for (let char in obj) {
    if (char > count) {
      count = char;
      letter = obj[char];
    }
  }
  console.log(letter, count);
};
