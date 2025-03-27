import { z } from "zod";

export const loginFormSchema = z.object({
  username: z.string().optional(),
  email: z.string().email({ message: "Email inválido" }).nonempty({ message: "Email é obrigatório" }),
  password: z
    .string()
    .nonempty({ message: "Senha é obrigtória" })
    .min(8, { message: "Mínimo oito caracteres" })
    .max(20, { message: "Máximo vinte caracteres" }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
