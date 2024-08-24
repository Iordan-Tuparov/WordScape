const router = require("express").Router();
const express = require('express');
const path = require('path');

const imageFolder = path.join(__dirname, 'images');
router.use('/images', express.static(imageFolder));

const authController = require("./controllers/authController");
const listController = require("./controllers/listController");

router.use("/auth", authController);
router.use("/list", listController);

module.exports = router;
