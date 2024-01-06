'use client';
import { deleteInvoice } from '@/app/lib/server-actions/invoice';
import { TableActionButton } from '@/app/ui/common/Button';
import { TrashIcon } from '@heroicons/react/24/outline';

export async function InvoiceDelete({ id }: { id: string }) {
  return (
    <>
      <TableActionButton
        onClick={() => deleteInvoice(id, '/dashboard/invoices', undefined)}
        icon={<TrashIcon />}
      >
        Delete
      </TableActionButton>
    </>
  );
}
