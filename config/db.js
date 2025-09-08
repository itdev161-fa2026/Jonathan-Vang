// config/db.js
import mongoose from "mongoose";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const config = require("config"); // works with ESM

const db = config.get("mongoURI");

const connectDatabase = async () => {
  try {
    await mongoose.connect(db);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDatabase;
