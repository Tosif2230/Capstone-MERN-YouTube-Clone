import { z } from "zod";

export const createChannelSchema = z.object({
  channelName: z.string().min(3, "Channel name must be at least 3 characters"),
  description: z.string().optional(),
  channelBanner: z.string().url("Invalid banner URL").optional(),
});
