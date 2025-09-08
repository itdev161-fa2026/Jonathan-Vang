import express from "express";
import connectDatabase from "./config/db.js";

const app = express();

// connect to MongoDB first
connectDatabase();

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
