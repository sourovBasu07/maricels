import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[782px] flex">
      <div className="w-[53%] h-full relative">
        <Image
          src="/images/hero_image1.jpg"
          alt="Hero image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#D0AA3859] flex flex-col justify-center">
          <div className="w-[663px] space-y-3 ml-auto mr-10">
            <h1 className="font-bold text-[3.4375rem] leading-[4.5rem] text-black">
              Cleaning Services <br />{" "}
              <span className="text-primary">in Richmond</span>
            </h1>
            <p className="text-xl leading-[2.1875rem] text-black text-justify pb-9">
              For homes and businesses, Maricela&apos;s Cleaning Magnificence
              offers top-notch, reliable, and professional cleaning services in
              Richmond.
            </p>
            <button className="flex items-center bg-[#FBCC21] px-14 py-4 text-black text-lg font-bold shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
              Get an Estimate
              <Image
                src="/icons/arrow_icon.svg"
                alt="arrow icon"
                width={13}
                height={9}
                className="ml-5"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-[47%]">
        <Image
          src="/images/hero_image2.jpg"
          alt="hero_image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[#D9D9D9] flex flex-col justify-center"></div> */}
      </div>
    </div>
  );
};
export default Hero;
