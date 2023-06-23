"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Success = () => {
  const params = useSearchParams();

  return (
    <section className="flex flex-col md:justify-center max-md:min-h-full max-md:bg-white md:items-center">
      <div className="flex flex-col gap-8 md:h-[460px] md:w-1/3 max-md:h-screen w-full px-4 rounded-3xl bg-white md:p-10 mt-44 text-[#36384E] max-md:justify-between">
        <div className="space-y-8">
          <Image
            src={"/images/icon-list.svg"}
            alt={"icon-list"}
            width={50}
            height={50}
          />
          <h1 className="md:text-4xl text-4xl font-[#242742] font-bold">
            Thanks for subscribing!
          </h1>
          <p>
            A confirmation email has been sent to{" "}
            <span className="font-bold">{params.get("email")}</span>. Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>

        <Link
          href={"/"}
          className="w-full py-4 flex justify-center bg-[#242742] rounded-lg text-white hover:bg-gradient-to-r from-pink-500 to-orange-500 max-md:mb-60"
        >
          Dismiss message
        </Link>
      </div>
    </section>
  );
};

export default Success;
