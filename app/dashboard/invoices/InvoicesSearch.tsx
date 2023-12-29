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

  const handleChange = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newParams = new URLSearchParams();
    if (value) {
      newParams.set('query', value)
    } else {
      newParams.delete('query')
    }
    const newURL = `${pathname}?${newParams.toString()}`
    replace(newURL)
  }, 300)

  return (
    <FormControlInput label='Search invoices...' icon={<MagnifyingGlassIcon />} className={className} defaultValue={query} onChange={handleChange} />
  );
}
