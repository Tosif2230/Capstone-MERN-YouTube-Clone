import { z } from "zod";

export const createVideoSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  thumbnailUrl: z.string().url("Invalid thumbnail URL"),
  videoUrl: z.string().url("Invalid video URL"),
  channelId: z.string().min(1, "Channel ID is required"),
  category: z.string().min(2, "Category is required"),
});
