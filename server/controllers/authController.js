const router = require("express").Router();

const authService = require("../services/authService");

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await authService.register(username, password);
    const accessToken = await authService.createToken(user);

    res
      .status(200)
      .json({ username: user.Username, accessToken, _id: user._id });
  } catch {
    res.status(400).json({ message: "Bad request!" });
  }
});

module.exports = router;
