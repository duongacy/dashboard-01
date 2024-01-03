'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function CustomersSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname()
    const { replace } = useRouter()
    const handleChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        const newSearchParams = new URLSearchParams();
        if (value) {
            newSearchParams.set('query', value)
        }
        else {
            newSearchParams.delete('query');
        }
        const newURL = `${pathname}?${newSearchParams.toString()}`;
        replace(newURL);
    }, 300)
    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={'Search customers...'}
                defaultValue={searchParams.get('query') || ''}
                onChange={handleChange}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    );
}
