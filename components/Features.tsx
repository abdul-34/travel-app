import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <section className="flex flex-col flexCenter overflow-hidden relative py-24">
      <div className="max-container padding-container w-full flex">
        <div className="flex flex-1 lg:min-h-[900px] relative w-full justify-end">
          <Image
            src={"/phone.webp"}
            height={1000}
            width={440}
            className="feature-phone"
            alt="phone"
          />
        </div>
        <div className="lg:w-[60%] flex flex-col w-full z-20">
          <Image
            src={"/camp.svg"}
            width={50}
            height={50}
            alt="camp"
            className="-mt-2"
          />
          <h2 className="bold-40 lg:bold-64">Our Features</h2>
          <ul className="grid md:grid-cols-2 mt-10 gap-10 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
