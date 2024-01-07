import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { TCreateInvoice, TUpdateInvoice } from "../schemas/invoice";
import { fetchPaidInvoicesCount } from "../query/invoice";

export async function createInvoice(
  { customer_id, amount, date, status }: TCreateInvoice,
  revalidateLink?: string,
  redirectLink?: string,
) {
  try {
    await sql`
            insert into invoices (customer_id, amount, date, status) values
            (${customer_id}, ${amount}, ${date}, ${status})
        `;
    revalidateLink && revalidatePath(revalidateLink);
    return {
      message: "Created Invoice.",
    };
    // redirectLink && redirect(redirectLink)
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }
}

export async function updateInvoice(
  { customer_id, amount, status, id }: TUpdateInvoice,
  revalidateLink?: string,
  redirectLink?: string,
) {
  try {
    await sql`
            update invoices
            set customer_id = ${customer_id}, amount = ${amount}, status = ${status}
            where id = ${id}
        `;
    revalidateLink && revalidatePath(revalidateLink);
    return {
      message: "Updated Invoice.",
    };
    // redirectLink && redirect(redirectLink)
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Invoice.",
    };
  }
}

export async function deleteInvoice(
  id: string,
  revalidateLink?: string,
  redirectLink?: string,
) {
  try {
    await sql`
            delete from invoices
            where id = ${id}
        `;
    revalidateLink && revalidatePath(revalidateLink);
    return {
      message: "Deleted Invoice.",
    };
    // redirectLink && redirect(redirectLink)
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice.",
    };
  }
}

export async function fetchPageInvoiceCountClient() {
  return await fetchPaidInvoicesCount();
}
