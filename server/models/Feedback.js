const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Feedback", schema);
