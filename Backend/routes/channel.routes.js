import {
  createChannel,
  getChannelById,
  getVideosByChannel,
} from "../controller/channel.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";
import { createChannelSchema } from "../validations/channel.validation.js";

export default function channelRoutes(app) {
  //Create Channel
  app.post(
    "/api/channels",
    authMiddleware,
    validate(createChannelSchema),
    createChannel
  );
  //Get Channel by Id
  app.get("/api/channels/:id", getChannelById);
  //Get Video by ChannelId
  app.get("/api/channels/:id/videos", getVideosByChannel);
}
