import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import { NextPage } from "next";
import { fetchInvoicesPages } from "@/app/lib/query/invoice";
import InvoicesTable from "./components/InvoicesTable";
import { InvoicesTableSkeleton } from "./components/InvoicesTableSkeleton";
import { Search } from "@/app/ui/common/Search";
import Pagination from "@/app/ui/common/Pagination";
import { CreateButton } from "@/app/ui/common/Button";

const Page: NextPage<{
  searchParams: { page?: string; query?: string };
}> = async ({ searchParams: { page = "1", query = "" } }) => {
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="" />
        <CreateButton href="/dashboard/invoices/create">Create</CreateButton>
      </div>
      <div className="flex-grow">
        <Suspense key={query + page} fallback={<InvoicesTableSkeleton />}>
          <InvoicesTable query={query} currentPage={Number(page)} />
        </Suspense>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Page;
