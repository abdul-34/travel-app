import Image from "next/image";
type FeatureItemProps = {
    icon: string;
    title: string;
    description: string;
  };
function FeatureItem({ icon, title, description }: FeatureItemProps) {
    return (
      <li className="flex flex-1 flex-col items-start">
        <div className="rounded-full p- 4 bg-green-50 lg:p-7">
          <Image src={icon} alt="map" width={32} height={32} />
        </div>
        <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
        <p className="regular-16 mt-5 text-gray-30 lg:mt-[30px] bg-white/60 lg:bg-none">
          {description}
        </p>
      </li>
    );
  }
  export default FeatureItem