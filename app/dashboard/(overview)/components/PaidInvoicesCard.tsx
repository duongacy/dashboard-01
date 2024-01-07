import { fetchPaidInvoicesCount } from "@/app/lib/query/invoice";
import { formatCurrency } from "@/app/lib/utils";
import { DashboardCard } from "@/app/ui/common/DashboardCard";

export async function PaidInvoicesCard() {
  const sum = await fetchPaidInvoicesCount();
  return (
    <DashboardCard
      title="Collected"
      value={formatCurrency(sum)}
      type="collected"
    />
  );
}
