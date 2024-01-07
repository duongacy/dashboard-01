import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import { PaidInvoicesCard } from "./components/PaidInvoicesCard";
import { PendingInvoicesCard } from "./components/PendingInvoicesCard";
import { TotalCustomerCard } from "./components/TotalCustomerCard";
import { TotalInvoicesCard } from "./components/TotalInvoicesCard";
import { LatestInvoices } from "./components/LatestInvoices";
import { RevenueChart } from "./components/RevenueChart";
import { DashboardCardSkeleton } from "@/app/ui/common/DashboardCardSkeleton";
import { RevenueChartSkeleton } from "./components/RevenueChartSkeleton";
import { LatestInvoicesSkeleton } from "./components/LatestInvoicesSkeleton";

export default async function page() {
  return (
    <main>
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<DashboardCardSkeleton/>}>
          <PaidInvoicesCard />
        </Suspense>
        <Suspense fallback={<DashboardCardSkeleton />}>
          <PendingInvoicesCard />
        </Suspense>
        <Suspense fallback={<DashboardCardSkeleton />}>
          <TotalInvoicesCard />
        </Suspense>
        <Suspense fallback={<DashboardCardSkeleton />}>
          <TotalCustomerCard />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
