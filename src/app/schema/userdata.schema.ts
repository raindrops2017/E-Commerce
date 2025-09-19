import * as z from "zod";

export const UserInfoSchema = z.object({
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

  phone: z
    .string()
    .nonempty('Phone is required')
    .regex(/^01[0-2,5][0-9]{8}$/, {
      message: "Phone must be a valid Egyptian number"
    })
});

export type UserInfoFormValues = z.infer <typeof UserInfoSchema>;
