import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "Invalid password" }),
});

export type TSignin = z.infer<typeof signinSchema>;
