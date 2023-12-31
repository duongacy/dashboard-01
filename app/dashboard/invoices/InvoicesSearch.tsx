'use client';
import FormControlInput from '@/app/ui/common/Input';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface IProps {
  className?: string
}
export default function InvoicesSearch({ className = '' }: IProps) {
  const pathname = usePathname();
  const { replace } = useRouter()

  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  const handleChangeSearch = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newSearchParams = new URLSearchParams();
    if (value) {
      newSearchParams.set('query', value)
    } else {
      newSearchParams.delete('query')
    }
    const newURL = `${pathname}?${newSearchParams.toString()}`
    replace(newURL)
  }, 300)

  return (
    <>
      <FormControlInput label='Search invoices...' icon={<MagnifyingGlassIcon />} className={className} defaultValue={query} onChange={handleChangeSearch} />
    </>
  );
}
