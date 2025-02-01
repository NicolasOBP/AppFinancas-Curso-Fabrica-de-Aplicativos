import { z } from "zod";

export const userSignUpSchema = z.object({
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha muito curta"),
});

export type UserSignUpSchema = z.infer<typeof userSignUpSchema>;
