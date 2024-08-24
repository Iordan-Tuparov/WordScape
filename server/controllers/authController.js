const router = require("express").Router();

const expressFileUpload = require("express-fileupload");
const fileUpload = require("express-fileupload");
const path = require("path");

const imageFolder = path.join("./", "images");

const authService = require("../services/authService");
const { errorHelper } = require("../middlewares/errorHandler");

router.use(fileUpload());

router.post("/register", async (req, res) => {
  const { avatar } = req.files;

  avatar.mv(path.join(imageFolder, avatar.name));
  try {
    const { username, password, userPath } = req.body;

    const user = await authService.register(username, password, userPath);
    const accessToken = await authService.createToken(user);

    res.status(200).json({
      username: user.Username,
      accessToken,
      _id: user._id,
    });
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "MongoServerError") {
      return res.status(400).json({ message: errorHelper(error) });
    }

    res.status(500).json({
      error: "An error occurred while registering the user",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await authService.login(username, password);
    const accessToken = await authService.createToken(user);

    res
      .status(200)
      .json({ username: user.Username, accessToken, _id: user._id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
