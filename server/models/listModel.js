const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  _owner: { type: mongoose.Types.ObjectId, ref: "user" },
});

const List = mongoose.model("list", listSchema);

module.exports = List;
