import { z } from "zod";

export type SiginInputs = {
    email: string,
    password: string,
};
export type Inputs = "email" | "password";

export const createLoginFormSchema = z.object({
    email: z.string()
        .nonempty('Email')
        .email('Enter a valid email address'),
    password: z.string()
        .nonempty('Password')
})
