const mongoose = require("mongoose");

let url = `mongodb://localhost:27017/WordScape`;

module.exports = () => mongoose.connect(url).then(() => {
    console.log("dataBase connected!");
  });