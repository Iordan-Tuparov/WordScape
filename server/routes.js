const router = require("express").Router();

const authController = require("./controllers/authController");
const listController = require("./controllers/listController");

router.use("/auth", authController);
router.use("/list", listController);

module.exports = router;
