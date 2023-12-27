import { lusitana } from '@/app/ui/fonts';
import InvoicesSearch from './InvoicesSearch';
import InvoicesPagination from './InvoicesPagination';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import InvoicesTable from './InvoicesTable';
import { CreateInvoice } from '@/app/ui/invoices/buttons';

export default async function Page({ searchParams }: {
    searchParams: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams.query || '';
    const currentPage = Number(searchParams.page || 1)
    const totalPage = await fetchInvoicesPages(query);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <InvoicesSearch />
                <CreateInvoice />
            </div>
            <div className='flex-grow'>
                <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                    <InvoicesTable query={query} currentPage={currentPage} />
                </Suspense>
            </div>
            <div className="mt-5 flex w-full justify-center">
                <InvoicesPagination totalPages={totalPage} />
            </div>
        </div>
    );
}