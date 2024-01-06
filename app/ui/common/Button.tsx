import Link from 'next/link';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface TableActionButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: ReactNode;
  href?: string;
}

export function TableActionButton({
  className,
  icon,
  children,
  href,
  ...props
}: TableActionButtonProps) {
  if (!href)
    return (
      <button
        className={twMerge(
          'rounded-md border p-2 hover:bg-gray-100',
          className,
        )}
        type="submit"
        {...props}
      >
        <span className="sr-only">{children}</span>
        <div className="w-5">{icon}</div>
      </button>
    );

  return (
    <Link
      href={href}
      className={twMerge('rounded-md border p-2 hover:bg-gray-100', className)}
    >
      {icon && <div className="w-5">{icon}</div>}
    </Link>
  );
}
