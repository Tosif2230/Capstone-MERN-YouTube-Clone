dotenv.config();
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


const app = express();

app.use(express.json());// MIddleware Parsing

// Connect DB
connectDB();

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send("Root Path");
});

app.listen(PORT, () => {
  console.log(`Server connected at port ${PORT}`);
});
