"use client";
import { lusitana } from "@/app/ui/fonts";
import { signIn } from "@/auth";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { TSignin, signinSchema } from "../lib/schemas/authen";
import { Button } from "./button";

const signinInitValue: TSignin = {
  email: "",
  password: "",
};
export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignin>({
    values: signinInitValue,
    resolver: zodResolver(signinSchema),
  });

  const signinMutation = useMutation({
    mutationFn: (formData: FormData) => signIn("credentials", formData),
  });

  const submitHandler: SubmitHandler<TSignin> = ({ email, password }) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    signinMutation.mutate(formData);
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(submitHandler)}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                placeholder="Enter your email address"
                {...register("email")}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {errors.email && (
              <small className="text-sm text-red-600">
                {errors.email.message}
              </small>
            )}
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                placeholder="Enter password"
                {...register("password")}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {errors.password && (
              <small className="text-sm text-red-600">
                {errors.password.message}
              </small>
            )}
          </div>
        </div>
        <SigninButton />
        <div
          className="mt-3 flex items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {signinMutation.error && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">Invalid account</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function SigninButton() {
  return (
    <Button className="mt-4 w-full">
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
