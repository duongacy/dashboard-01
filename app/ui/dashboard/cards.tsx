import { fetchCustomersCount } from '@/app/lib/query/customer';
import {
  fetchInvoicesCount,
  fetchPaidInvoicesCount,
  fetchPendingInvoicesCount,
} from '@/app/lib/query/invoice';
import { formatCurrency } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';
import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <p className="ml-2 text-sm font-medium">{title}</p>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

export async function PaidInvoicesCard() {
  const sum = await fetchPaidInvoicesCount();
  return (
    <Card title="Collected" value={formatCurrency(sum)} type="collected" />
  );
}

export async function PendingInvoicesCard() {
  const sum = await fetchPendingInvoicesCount();
  return <Card title="Collected" value={formatCurrency(sum)} type="pending" />;
}

export async function TotalInvoicesCard() {
  const sum = await fetchInvoicesCount();
  return <Card title="Collected" value={sum} type="collected" />;
}

export async function TotalCustomerCard() {
  const sum = await fetchCustomersCount();
  return <Card title="Collected" value={sum} type="customers" />;
}
