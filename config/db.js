import { require } from "../dep.js";
// import mongoose from "mongoose";
const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/deno_project");
  console.log("Database connected");
}
export { connect };
