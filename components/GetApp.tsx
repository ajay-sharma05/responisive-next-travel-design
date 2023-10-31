import React from "react";
import Button from "./Button";
import Image from "next/image";

const getApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 w-full flex flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get it for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS adn Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Download App"
              icon="./apple.svg"
              variant="btn_white"
              full
            ></Button>
            <Button
              type="button"
              title="Download App"
              icon="./android.svg"
              variant="btn_dark_green_outline"
              full
            ></Button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default getApp;
