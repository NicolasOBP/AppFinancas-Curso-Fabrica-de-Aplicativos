import { z } from "zod";

export const userSignInSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string(),
});

export type UserSignInSchema = z.infer<typeof userSignInSchema>;
