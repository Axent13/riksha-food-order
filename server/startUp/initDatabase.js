const Product = require("../models/Product");
const productsMock = require("../mock/products.json");
const feedbacksMock = require("../mock/feedbacks.json");
const Feedback = require("../models/Feedback");

module.exports = async () => {
  const products = await Product.find();
  if (products.length !== productsMock.length) {
    await createInitialEntity(Product, productsMock);
  }

  const feedbacks = await Feedback.find();
  if (feedbacks.length !== feedbacksMock.length) {
    await createInitialEntity(Feedback, feedbacksMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
