import * as z from "zod";

export const RepasswordSchema = z.object({
 
  currentpassword: z
    .string()
    .nonempty('Password is required')
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message: "Password must be at least 8 characters, include one uppercase letter, one number, and one special character"
    }),

     newpassword: z
    .string()
    .nonempty('Password is required')
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message: "Password must be at least 8 characters, include one uppercase letter, one number, and one special character"
    }),

  rePassword: z
    .string()
    .nonempty('Repassword is required')
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      message: "confirm password doesn't match"
    }),
})

.refine((data) => data.newpassword === data.rePassword, {
  path: ['confirmpassword'],
  message: 'New passwords do not match !!'
});

export type RepasswordFormValues = z.infer <typeof RepasswordSchema>;
