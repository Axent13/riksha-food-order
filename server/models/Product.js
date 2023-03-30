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
      type: Number,
    },
    kkals: {
      type: Number,
    },
    oldPrice: {
      type: Number,
    },
    price: {
      type: Number,
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
