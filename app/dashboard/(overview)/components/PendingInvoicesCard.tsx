import { fetchPendingInvoicesCount } from "@/app/lib/query/invoice";
import { formatCurrency } from "@/app/lib/utils";
import { DashboardCard } from "@/app/ui/common/DashboardCard";

export async function PendingInvoicesCard() {
  const sum = await fetchPendingInvoicesCount();
  return (
    <DashboardCard
      title="Collected"
      value={formatCurrency(sum)}
      type="pending"
    />
  );
}
