const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });
const { generateUserImage } = require("../utils/helpers");

router.patch("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;

    if (userId === req.user._id) {
      const { image } = generateUserImage(req.body.name);

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { ...req.body, image },
        {
          new: true,
        }
      );

      res.send(updatedUser);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.get("/:userId", auth, async (req, res) => {
  const { userId } = req.params;

  try {
    const { _id, name, email, image, isAdmin } = await User.findOne({
      _id: userId,
    });
    res.send({ _id, name, email, image, isAdmin });
  } catch (e) {
    res.status(500).json({
      message: "Пользователь не найден на сервере.",
    });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const list = await User.find();
    res.send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
