import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.routes.js";
import videoRoutes from "./routes/video.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import channelRoutes from "./routes/channel.routes.js";


// Connect DB
connectDB();

const app = express();

app.use(express.json()); // MIddleware Parsing

app.get("/", (req, res) => {
  res.send("Root Path");
});

authRoute(app)
videoRoutes(app)
commentRoutes(app)
channelRoutes(app)

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server connected at port ${PORT}`);
});
