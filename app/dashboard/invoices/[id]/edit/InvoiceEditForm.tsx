'use client';

import { TCustomerSelectOption } from '@/app/lib/schemas/customer';
import { TInvoice, TUpdateInvoice, updateInvoiceSchema } from '@/app/lib/schemas/invoice';
import { updateInvoice } from '@/app/lib/server-actions/invoice';
import { Button } from '@/app/ui/button';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

export default function InvoiceEditForm({
    invoice,
    customers,
}: {
    invoice: TInvoice;
    customers: TCustomerSelectOption[];
}) {
    const { register, handleSubmit, formState: { errors } } = useForm<TUpdateInvoice>({
        values: invoice,
        resolver: zodResolver(updateInvoiceSchema)
    })

    const handleValid: SubmitHandler<TUpdateInvoice> = (data) => {
        updateInvoice(data, '/dashboard/invoices', '/dashboard/invoices')
    }
    const handleInvalid: SubmitErrorHandler<TUpdateInvoice> = (error) => {
        console.log("error", error);

    }

    return (
        <>
            <form onSubmit={handleSubmit(handleValid, handleInvalid)} >
                <div className="rounded-md bg-gray-50 p-4 md:p-6">
                    <div className="mb-4">
                        <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                            Choose customer
                        </label>
                        <div className="relative">
                            <select
                                id="customer"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                {...register('customer_id')}
                            >
                                <option value="" disabled>
                                    Select a customer
                                </option>
                                {customers.map((customer) => (
                                    <option key={customer.id} value={customer.id}>
                                        {customer.name}
                                    </option>
                                ))}
                            </select>
                            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                        {errors.customer_id && <small className='text-red-600'>{errors.customer_id.message}</small>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                            Choose an amount
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="amount"
                                    type="number"
                                    step="0.01"
                                    placeholder="Enter USD amount"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    {...register('amount')}
                                />
                                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                            {errors.amount && <small className='text-red-600'>{errors.amount.message}</small>}
                        </div>
                    </div>

                    <fieldset>
                        <legend className="mb-2 block text-sm font-medium">
                            Set the invoice status
                        </legend>
                        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                            <div className="flex gap-4">
                                <div className="flex items-center">
                                    <input
                                        id="pending"
                                        type="radio"
                                        value="pending"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                        {...register('status')}
                                    />
                                    <label
                                        htmlFor="pending"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        Pending <ClockIcon className="h-4 w-4" />
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="paid"
                                        type="radio"
                                        value="paid"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                        {...register('status')}
                                    />
                                    <label
                                        htmlFor="paid"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                    >
                                        Paid <CheckIcon className="h-4 w-4" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard/invoices"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Edit Invoice</Button>
                </div>
            </form>
        </>
    );
}
