import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3, "Username should be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password should be at least 8 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password is required"),
});
