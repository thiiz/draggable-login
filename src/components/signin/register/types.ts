import { z } from "zod";

export type SiginInputs = {
    email: string,
    password: string,
    cf_password: string,
    terms: boolean,
};

export type Inputs = "email" | "password" | 'cf_password' | 'terms';


export const createRegisterFormSchema = z.object({
    email: z.string()
        .nonempty('Email')
        .email('Invalid email address'),
    password: z.string()
        .nonempty('Password')
        .min(6, 'Min 6 characters'),
    cf_password: z.string()
        .nonempty('Confirm password'),
    terms: z.literal(true)
}).refine((data) => data.password === data.cf_password, {
    message: "Passwords don't match",
    path: ["cf_password"],
});