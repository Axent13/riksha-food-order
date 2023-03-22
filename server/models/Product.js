const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    components: {
      type: String,
    },
    weight: {
      type: String,
    },
    kkals: {
      type: String,
    },
    oldPrice: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    properties: {
      type: Object,
    },
    features: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", schema);
