import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
          "rounded-md border p-2 hover:bg-gray-100",
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
      className={twMerge("rounded-md border p-2 hover:bg-gray-100", className)}
    >
      {icon && <div className="w-5">{icon}</div>}
    </Link>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function CreateButton({ children, href }: { children: ReactNode, href: string }) {
  return (
    <Link
      href={href}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      {children && <span className="hidden md:block">{children}</span>}{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
