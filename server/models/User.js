const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    isAdmin: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
