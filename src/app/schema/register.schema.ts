import * as z from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .nonempty('Name is required')
    .min(3, 'Minimum length 3 characters')
    .max(20, 'Maximum length 20 characters'),

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
    }),

  rePassword: z
    .string()
    .nonempty('Repassword is required')
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message: "Repassword doesn't match"
    }),

  phone: z
    .string()
    .nonempty('Phone is required')
    .regex(/^01[0-2,5][0-9]{8}$/, {
      message: "Phone must be a valid Egyptian number"
    })
})
.refine((data) => data.password === data.rePassword, {
  path: ['rePassword'],
  message: 'Passwords do not match !!'
});

export type RegisterFormValues = z.infer <typeof registerSchema>;
