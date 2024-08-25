const router = require("express").Router();

const fileUpload = require("express-fileupload");
const path = require("path");

const authService = require("../services/authService");
const errorHelper = require('../middlewares/errorHandler')

const imageFolder = path.join(__dirname, "../images");

router.use(fileUpload());

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const { avatar } = req.files;

    const imageName = `${username}-${avatar.name}`;
    const imagePath = path.join(imageFolder, imageName);

    await avatar.mv(imagePath);

    const user = await authService.register(username, password, avatar.name);
    const accessToken = await authService.createToken(user);

    res.status(200).json({
      username: user.Username,
      accessToken,
      _id: user._id,
      avatarUrl: `/images/${imageName}`,
    });
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "MongoServerError") {
      return res.status(400).json({ message: errorHelper(error) });
    }
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    
    const user = await authService.login(username, password);

    const imageName = `${username}-${user.avatarName}`;

    const accessToken = await authService.createToken(user);

    res.status(200).json({
      username: user.Username,
      accessToken,
      _id: user._id,
      avatarUrl: `/images/${imageName}`,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
