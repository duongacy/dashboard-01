import { fetchInvoicesCount } from "@/app/lib/query/invoice";
import { DashboardCard } from "@/app/ui/common/DashboardCard";

export async function TotalInvoicesCard() {
  const sum = await fetchInvoicesCount();
  return <DashboardCard title="Collected" value={sum} type="collected" />;
}
