import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
    href: string;
    icon?: ReactNode;
}
export function LinkButton({ href, icon }: IProps) {
    return (
        <Link
            href={href}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            {icon && <div className="w-5">
                {icon}
            </div>}
        </Link>
    );
}