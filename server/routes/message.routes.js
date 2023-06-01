const express = require("express");
const Message = require("../models/Message");
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).send(newMessage);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка при отправке сообщения.",
      e,
    });
  }
});

module.exports = router;
