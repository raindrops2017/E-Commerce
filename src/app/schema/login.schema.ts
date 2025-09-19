import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Invalid email format"
    }),

  password: z
    .string()
    .nonempty('Password is required')
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message: "Password must be at least 8 characters, include one uppercase letter, one number, and one special character"
    })
})

export type loginFormValues = z.infer <typeof loginSchema>;
