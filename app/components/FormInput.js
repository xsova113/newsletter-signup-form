"use client"

import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FormInput = () => {
  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const inputValue = watch("email")

  function onSubmit(data) {
    const params = new URLSearchParams(window.location.search);

    if (data.email) {
      params.set("email", data.email);
    } else {
      params.delete("email");
    }

    const newPathname = pathname + "?" + params.toString();

    if (errors.email) {
      return
    }
    router.push("success" + newPathname);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <label className="text-xs font-bold">Email address</label>
          {errors.email && (
            <span className="text-xs font-bold text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        <input
          type="email"
          {...register("email", {
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Valid email required",
            },
          })}
          placeholder="email@company.com"
          className={`p-4 border outline-none focus:border-black rounded-md ${
            errors.email && "border-red-400 bg-red-100 text-red-400"
          }`}
        />
      </div>

      <button
        type="submit"
        className="bg-[#242742] rounded-md w-full py-4 text-white hover:bg-gradient-to-r from-pink-500 to-orange-500"
        disabled={errors.email || !inputValue}
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default FormInput;
