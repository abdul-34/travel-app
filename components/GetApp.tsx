import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="relative w-full pb-24">
      <div className="get-app">
        <div className="flex flex-1 items-start flex-col">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[350px] text-white">
            Get for free now!
          </h2>
          <p className="text-white mt-4 lg:mt-16">
            Available on ios and Android
          </p>
          <div className="flex flex-col w-full gap-3 sm:flex-row lg:mt-6 mt-3">
            <Button
              type="button"
              title="App store"
              variant="btn_white w-full"
              icon="/apple.svg"
            />
            <Button
              type="button"
              title="Play Store"
              variant="btn_dark_green_outline w-full"
              icon="/android.svg"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src={"/phones.webp"} width={550} height={870} alt="phones" />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
