import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import InvoiceEditForm from './InvoiceEditForm';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const invoice = await fetchInvoiceById(id)
    const customers = await fetchCustomers()
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <InvoiceEditForm invoice={invoice} customers={customers} />
        </main>
    );
}