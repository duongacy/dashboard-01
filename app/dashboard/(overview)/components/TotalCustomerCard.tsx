import { fetchCustomersCount } from "@/app/lib/query/customer";
import { DashboardCard } from "@/app/ui/common/DashboardCard";

export async function TotalCustomerCard() {
  const sum = await fetchCustomersCount();
  return <DashboardCard title="Collected" value={sum} type="customers" />;
}
