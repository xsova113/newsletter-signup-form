"use client";

import Image from "next/image";
import FormInput from "./FormInput";

const SignupForm = () => {
  return (
    <section className="h-screen flex items-center">
      <div className="flex flex-col-reverse md:flex-row md:p-4 md:w-[60%] mx-auto md:max-h-[520px] w-full h-full bg-white rounded-3xl md:gap-12">
        <div className="flex-1 gap-6 p-8 flex flex-col text-sm justify-center text-[#36384E]">
          <h1 className="font-semibold text-3xl md:text-4xl text-[#242742]">
            Stay updated!
          </h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="flex flex-col gap-2">
            <span className="flex gap-3">
              <Image
                src={"images/icon-list.svg"}
                alt="icon-list"
                width={15}
                height={15}
              />
              Product discovery and building what matters
            </span>
            <span className="flex gap-3">
              <Image
                src={"images/icon-list.svg"}
                alt="icon-list"
                width={15}
                height={15}
              />
              Measuring to ensure updates are a success
            </span>
            <span className="flex gap-3">
              <Image
                src={"images/icon-list.svg"}
                alt="icon-list"
                width={15}
                height={15}
              />
              And much more!
            </span>
          </div>

          <FormInput />
        </div>
        <div className="flex-1 relative">
          <Image
            src={"/images/illustration-sign-up-desktop.svg"}
            alt="illustration"
            fill
            className="object-cover rounded-2xl hidden md:block"
          />
           <Image
            src={"/images/illustration-sign-up-mobile.svg"}
            alt="illustration"
            fill
            className="object-cover rounded-2xl md:hidden block"
          />
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
