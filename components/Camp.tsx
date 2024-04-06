import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

const Camp = () => {
  return (
    <section className="2xl:max-container flex flex-col py-10 mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar h-[340px] flex w-full lg:h-[400px] xl:h-[640px] items-start justify-start gap-8 overflow-auto ">
        <div className="h-full w-full min-w-[1110px] bg-bg-img-1 bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl">
          <div className="h-full  flex flex-col items-start justify-between p-6 lg:px-20 lg:py-20">
            <div className="flexCenter gap-5">
              <div className="rounded-full  h-fit bg-green-50 p-4">
                <Image
                  src={"/folded-map.svg"}
                  alt="Folded Map"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="bold-20 text-white">Putuk Truno Camp</p>
                <p className="regular-16 text-white">Progen, Pasuruan</p>
              </div>
            </div>
            <div className="flexCenter gap-6">
              <span className="flex -space-x-4 overflow-hidden">
                {PEOPLE_URL.map((people) => (
                  <Image
                    key={people}
                    src={people}
                    alt="person"
                    width={52}
                    height={52}
                    className="inline-block h-10 w-10 rounded-full"
                  />
                ))}
              </span>
              <p className="bold-16 md:bold-20 text-white">50+ Joined</p>
            </div>
          </div>
        </div>
        <div className="h-full w-full min-w-[1110px] bg-bg-img-2 bg-cover bg-no-repeat lg:rounded-l-5xl 2xl:rounded-5xl">
          <div className="h-full  flex flex-col items-start justify-between p-6 lg:px-20 lg:py-20">
            <div className="flexCenter gap-5">
              <div className="rounded-full  h-fit bg-green-50 p-4">
                <Image
                  src={"/folded-map.svg"}
                  alt="Folded Map"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="bold-20 text-white">Putuk Truno Camp</p>
                <p className="regular-16 text-white">Progen, Pasuruan</p>
              </div>
            </div>
            <div className="flexCenter gap-6">
              <span className="flex -space-x-4 overflow-hidden">
                {PEOPLE_URL.map((people) => (
                  <Image
                    key={people}
                    src={people}
                    alt="person"
                    width={52}
                    height={52}
                    className="inline-block h-10 w-10 rounded-full"
                  />
                ))}
              </span>
              <p className="bold-16 md:bold-20 text-white">50+ Joined</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flexEnd mt-10 lg:-mt-60 px-6 lg:mr-6">
        <div className="flex flex-col gap-5">
          <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
              <strong>Feeling Lost</strong> And Not Knowing The Way?
            </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-white">
              Starting from the anxiety of the climbers when visiting a new
              climbing location, the possibility of getting lost is very large.
              That's why we are here for those of you who want to start an
              adventure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camp;
