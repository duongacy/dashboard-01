import { lusitana } from "@/app/ui/fonts";
import CustomersTable from "./components/CustomersTable";
import { fetchCustomersPages } from "@/app/lib/query/customer";
import { Search } from "@/app/ui/common/Search";
import Pagination from "@/app/ui/common/Pagination";

export default async function page({
  searchParams,
}: {
  searchParams: {
    page?: string;
    query?: string;
  };
}) {
  const totalPages = (await fetchCustomersPages(
    searchParams.query || "",
  )) as number;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="" />
        {/* Create button here */}
      </div>
      <div className="flex-grow">
        <CustomersTable
          query={searchParams.query || ""}
          currentPage={Number(searchParams.page || 1)}
        />
      </div>
      <div className="mt-5 flex w-full justify-center">
        {/* Pagination here */}
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
