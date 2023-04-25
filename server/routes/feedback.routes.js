const express = require("express");
const Feedback = require("../models/Feedback");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Feedback.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message:
        "На сервере произошла ошибка при получении данных об отзывах. Попробуйте позже",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const newFeedback = await Feedback.create({
      ...req.body,
    });
    res.status(201).send(newFeedback);
  } catch (e) {
    res.status(500).json({
      message:
        "На сервере произошла ошибка при создании нового отзыва. Попробуйте позже",
      e,
    });
  }
});

module.exports = router;
