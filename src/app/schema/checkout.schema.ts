

import * as z from "zod";

export const checkoutSchema = z.object({
  details: z.string()
    .nonempty('Adress is required')
    .regex(/^[/^[a-zA-Z0-9\s.,'#-]+$/, {
      message: "Invalid adress"}),

   phone: z.string()
      .nonempty('Phone is required')
      .regex(/^01[0-2,5][0-9]{8}$/, {
        message: "Phone must be a valid Egyptian number"
      }),

        city: z.string()
      .nonempty('City is required')
      .regex(/^([a-zA-Z\u0080-\u024F]+(?:[ -][a-zA-Z\u0080-\u024F]+)*)[ ,]+([a-zA-Z\u0080-\u024F]+(?:[ -][a-zA-Z\u0080-\u024F]+)*)$/, {
        message: "City name must be followed by your country with space between"})

})

export type checkoutFormValues = z.infer <typeof checkoutSchema>;
