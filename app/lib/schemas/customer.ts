import { z } from "zod";

export const customerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  image_url: z.string(),
});
export const createCustomerSchema = customerSchema.omit({ id: true });
export const customerOptionForSelectSchema = customerSchema.pick({
  id: true,
  name: true,
});
export const customerTableRowSchema = customerSchema.extend({
  total_invoices: z.coerce.number(),
  total_pending: z.coerce.number(),
  total_paid: z.coerce.number(),
});

export type TCustomer = z.infer<typeof customerSchema>;
export type TCreateCustomer = z.infer<typeof createCustomerSchema>;
export type TCustomerSelectOption = z.infer<
  typeof customerOptionForSelectSchema
>;
export type TCustomerTableRow = z.infer<typeof customerTableRowSchema>;
