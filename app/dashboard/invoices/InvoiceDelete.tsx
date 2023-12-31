'use client';
import { deleteInvoice } from "@/app/lib/server-actions/invoice";
import { TrashIcon } from "@heroicons/react/24/outline";

export async function InvoiceDelete({ id }: { id: string }) {
    return (
        <button className="rounded-md border p-2 hover:bg-gray-100" type="submit" onClick={() => deleteInvoice(id, '/dashboard/invoices', undefined)}>
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" />
        </button>
    );
}