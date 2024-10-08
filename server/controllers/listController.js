const router = require("express").Router();

const { auth } = require("../middlewares/authMiddleware");
const listService = require("../services/listService");

router.get("/getAllLists", async (req, res) => {
  const allLists = await listService.getAllLists();

  res.status(200).json(allLists);
});

router.post("/create", auth, async (req, res) => {
  try {
    const listData = {
      ...req.body,
      _owner: req.user._id,
      creator: req.user.Username,
    };

    const createdList = await listService.create(listData);

    res.status(200).json({ createdList });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// router.post("/like", async (req, res) => {
//   const { userId, listId } = req.body;

//   const currentLikes = await listService.likeCurrentList(userId, listId);

//   res.status(200).json({ likes: currentLikes.likes.length });
// });

module.exports = router;
