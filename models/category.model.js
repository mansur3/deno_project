import { require } from "../dep.js";

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  categoryPriority: { type: Number, required: true },
});

const categoryModel = mongoose.model("category", categorySchema);

export { categoryModel };
