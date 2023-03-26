const express = require("express");
const auth = require("../middleware/auth.middleware");
const Product = require("../models/Product");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Product.find();
    res.status(200).send(list);
  } catch (e) {
    res.status(500).json({
      message:
        "На сервере произошла ошибка при получении данных о продуктах. Попробуйте позже",
    });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
    });
    res.status(201).send(newProduct);
  } catch (e) {
    res.status(500).json({
      message:
        "На сервере произошла ошибка при сощдании нового продукта. Попробуйте позже",
    });
  }
});

router.delete("/:productId", auth, async (req, res) => {
  try {
    const { productId } = req.params;
    const removedProduct = await Product.findById(productId);
    await removedProduct.remove();
    return res.send(null);
  } catch (e) {
    res.status(500).json({
      message:
        "На сервере произошла ошибка при удалении продукта. Попробуйте позже",
    });
  }
});

module.exports = router;
