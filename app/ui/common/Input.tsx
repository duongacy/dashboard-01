import clsx from "clsx";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  direction?: "row" | "column";
  icon?: ReactNode;
}
export default function FormControlInput({
  className,
  direction = "row",
  icon,
  label,
  ...props
}: IProps) {
  return (
    <div
      className={twMerge(
        clsx("flex gap-x-10 gap-y-2", {
          "flex-col": direction === "column",
        }),
        className,
      )}
    >
      {label && (
        <label htmlFor="search" className="sr-only">
          {label}
        </label>
      )}
      <div className="relative flex flex-grow">
        <input
          className={
            "peer block flex-grow rounded-md border border-gray-200 py-[9px] pl-8 pr-3 text-sm outline-2 placeholder:text-gray-500"
          }
          {...props}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
