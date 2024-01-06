'use client';
import { TableActionButton } from '@/app/ui/common/Button';
import { PencilIcon } from '@heroicons/react/24/outline';

export async function InvoiceEdit({ id }: { id: string }) {
  return (
    <>
      <TableActionButton
        href={`/dashboard/invoices/${id}/edit`}
        icon={<PencilIcon />}
      >
        Edit
      </TableActionButton>
    </>
  );
}
