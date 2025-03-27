import { z } from "zod";

export const registerFormSchema = z.object({
    username: z.string().optional(),
    name: z.string().optional(),
    email: z.string().email({ message: "Email inválido" }).nonempty({ message: "Email é obrigatório" }),
    password: z
        .string()
        .nonempty({ message: "Senha é obrigatória" })
        .min(8, { message: "Mínimo oito caracteres" })
        .max(20, { message: "Máximo vinte caracteres" }),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
