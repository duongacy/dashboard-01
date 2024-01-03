
import { lusitana } from '@/app/ui/fonts';
import CustomersPagination from './CustomersPagination';
import CustomersTable from './CustomersTable';
import CustomersSearch from './CustomersSearch';
import { fetchCustomersPages } from '@/app/lib/query/customer';

export default async function page({ searchParams }: {
    searchParams: {
        page?: string;
        query?: string;
    }
}) {
    const totalPages = await fetchCustomersPages(searchParams.query || '') as number

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <CustomersSearch />
                {/* Create button here */}
            </div>
            <div className='flex-grow'>
                <CustomersTable query={searchParams.query || ''} currentPage={Number(searchParams.page || 1)} />
            </div>
            <div className="mt-5 flex w-full justify-center">
                {/* Pagination here */}
                <CustomersPagination totalPages={totalPages} />
            </div>
        </div>
    );
}
