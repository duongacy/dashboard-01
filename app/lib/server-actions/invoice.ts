'use server';
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { TCreateInvoice, TUpdateInvoice, updateInvoiceSchema } from "../schemas/invoice";

export async function createInvoice({ customer_id, amount, date, status }: TCreateInvoice, revalidateLink?: string, redirectLink?: string) {
    await sql`
        insert into invoices (customer_id, amount, date, status) values
        (${customer_id}, ${amount}, ${date}, ${status})
    `
    revalidateLink && revalidatePath(revalidateLink)
    redirectLink && redirect(redirectLink)
}

export async function updateInvoice({ customer_id, amount, status, id }: TUpdateInvoice, revalidateLink?: string, redirectLink?: string) {
    await sql`
        update invoices
        set customer_id = ${customer_id}, amount = ${amount}, status = ${status}
        where id = ${id}
    `
    revalidateLink && revalidatePath(revalidateLink)
    redirectLink && redirect(redirectLink)
}

export async function deleteInvoice(id:string, revalidateLink?: string, redirectLink?: string) {
    await sql`
        delete from invoices
        where id = ${id}
    `
    revalidateLink && revalidatePath(revalidateLink)
    redirectLink && redirect(redirectLink)
}