const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (username) {
        return /^[A-Za-z0-9]+$/.test(username);
      },
      message: "The username must be only upper,lower and numbers characters!",
    },
  },
  Password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
