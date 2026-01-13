import {
  createVideo,
  deleteVideo,
  dislikeVideo,
  getAllVideos,
  getVideoById,
  likeVideo,
  updateVideo,
} from "../controller/video.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";
import { createVideoSchema } from "../validations/video.validation.js";

export default function videoRoutes(app) {
  // Public
  app.get("/api/videos", getAllVideos);
  app.get("/api/videos/:id", getVideoById);

  // Protected
  app.post(
    "/api/videos",
    authMiddleware,
    validate(createVideoSchema),
    createVideo
  );

  //Update and Delete (Only User)
  app.patch("/api/videos/:id", authMiddleware, updateVideo);
  app.delete("/api/videos/:id", authMiddleware, deleteVideo);

  //Like and dislike (Only User)
  app.post("/api/videos/:id/like", authMiddleware, likeVideo);
  app.post("/api/videos/:id/dislike", authMiddleware, dislikeVideo);
}
