import { lusitana } from '@/app/ui/fonts';
import InvoicesSearch from './InvoicesSearch';
import InvoicesPagination from './InvoicesPagination';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import InvoicesTable from './InvoicesTable';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { NextPage } from 'next';
import { fetchInvoicesPages } from '@/app/lib/query/invoice';

const Page: NextPage<{ searchParams: { page?: string, query?: string } }> = async ({ searchParams: {
    page = '1', query = ''
} }) => {
    const totalPages = await fetchInvoicesPages(query);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <InvoicesSearch className='flex-grow' />
                <CreateInvoice />
            </div>
            <div className='flex-grow'>
                <Suspense key={query + page} fallback={<InvoicesTableSkeleton />}>
                    <InvoicesTable query={query} currentPage={Number(page)} />
                </Suspense>
            </div>
            <div className="mt-5 flex w-full justify-center">
                <InvoicesPagination totalPages={totalPages} />
            </div>
        </div>
    );
}

export default Page