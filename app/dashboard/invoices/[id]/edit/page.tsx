import InvoiceEditForm from "./InvoiceEditForm";
import { notFound } from "next/navigation";
import { fetchInvoiceById } from "@/app/lib/query/invoice";
import { fetchCustomers } from "@/app/lib/query/customer";
import Breadcrumbs from "@/app/ui/common/Breadcrumbs";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const invoice = await fetchInvoiceById(id);
  if (!invoice) {
    notFound();
  }
  const customers = await fetchCustomers();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <InvoiceEditForm invoice={invoice} customers={customers} />
    </main>
  );
}
