import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import InvoiceCreateForm from "./InvoiceCreateForm";
import { fetchCustomers } from "@/app/lib/query/customer";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <InvoiceCreateForm customers={customers} />
    </main>
  );
}
