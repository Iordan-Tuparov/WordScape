const User = require("../models/userModel");

const { SALT, SECRET } = require("../config/env");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (username, password,userPath) => {
  const trimedUsername = username.trim();
  const trimedPassword = password.trim();

  const hashedPassword = await bcrypt.hash(trimedPassword, SALT);

  const createdUser = User.create({
    Username: trimedUsername,
    Password: hashedPassword,
    userPath
  });

  if (!createdUser) {
    throw {
      message: "Invalid request!",
    };
  }

  return createdUser;
};

exports.login = async (username, password) => {
  const user = await User.findOne({ Username: username });

  if (!user) {
    throw { message: "Password or username is not valid!" };
  }

  const isValid = await bcrypt.compare(password, user.Password);

  if (!isValid) {
    throw { message: "Invalid username or password!" };
  }

  return user;
};

exports.createToken = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        _id: user._id,
        Username: user.Username,
      },
      SECRET,
      { expiresIn: "2d" },
      (err, decodedToken) => {
        if (err) {
          return reject(err);
        }

        resolve(decodedToken);
      }
    );
  });
};
