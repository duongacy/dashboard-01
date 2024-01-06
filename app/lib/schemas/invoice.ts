import { z } from 'zod';
import { customerSchema } from './customer';

export const invoiceSchema = z.object({
  id: z.string(),
  customer_id: z.string().min(4, {
    message: 'Please enter a valid value',
  }),
  amount: z.coerce.number().gt(0, {
    message: 'Please enter a valid value',
  }),
  date: z.string(),
  status: z.enum(['pending', 'paid']),
});
export const createInvoiceSchema = invoiceSchema.omit({
  id: true,
});
export const updateInvoiceSchema = invoiceSchema.omit({
  date: true,
});
export const invoiceTableRowSchema = z.intersection(
  invoiceSchema.pick({
    id: true,
    amount: true,
    date: true,
    status: true,
  }),
  customerSchema.pick({
    name: true,
    email: true,
    image_url: true,
  }),
);
export const latestInvoiceSchema = z.intersection(
  invoiceSchema.pick({ id: true, amount: true }),
  customerSchema.pick({ name: true, email: true, image_url: true }),
);

export type TInvoice = z.infer<typeof invoiceSchema>;
export type TCreateInvoice = z.infer<typeof createInvoiceSchema>;
export type TUpdateInvoice = z.infer<typeof updateInvoiceSchema>;
export type TInvoiceTableRow = z.infer<typeof invoiceTableRowSchema>;
export type TLatestInvoice = z.infer<typeof latestInvoiceSchema>;
