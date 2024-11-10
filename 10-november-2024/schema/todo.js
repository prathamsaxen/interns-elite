const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500, 
    },
  },
  {
    timestamps: true, 
  }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
