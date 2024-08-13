const User = require("../models/userModel");

const { SALT,SECRET } = require("../config/env");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, SALT);

  const createdUser = User.create({
    Username: username,
    Password: hashedPassword,
  });

  if (!createdUser) {
    throw {
      message: "Invalid request!",
    };
  }

  return createdUser;
};

exports.createToken = (user) => {
  return new Promise((resolve, reject) => {
      jwt.sign(
          {
              _id: user._id,
              username: user.username,
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