import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flex flex-col">
      <div className="max-container padding-container pb-24 w-full">
        <Image src={"/camp.svg"} alt="camp" width={16} height={158} />
        <h4 className="text-green-50 capitalize -mt-1 regular-18 mb-3">
          We Are here for you
        </h4>
        <div className=" flex flex-col xl:flex-row xl:justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>

          <p className="text-gray-30 regular-16 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="flexCenter w-full relative max-container">
        <Image
          src={"/boat.webp"}
          width={1440}
          height={580}
          alt="boat"
          className="object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute top-20 md:left-[5%] bg-white rounded-3xl py-8 pl-5 pr-7 border shadow-md">
          <div className="flex gap-2">
            <Image src={"/meter.svg"} alt="meter" width={24} height={24} />
            <div className="flex flex-col items-start justify-between">
              <div className="flex flex-col">
                <div className="flexBetween">
                  <p className="regular-16 text-gray-30">Destination</p>
                  <p className="bold-16 text-green-50">48 min</p>
                </div>
                <p className="bold-20 mt-2">Aguas Calientes</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 text-gray-30">Start track</p>

                <p className="bold-20 mt-2">Wonorejo Pasuruan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
