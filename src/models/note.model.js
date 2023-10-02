const mongoose = require("mongoose");


const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: { type: String, required: true },
    author: { type: String, required: true },
    date: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports =                                                                                                        mongoose.model("Note", noteSchema);