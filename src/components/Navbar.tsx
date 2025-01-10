import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <div className="hidden lg:flex items-center pt-1 pb-2">
        <div className="">
          <div className="flex items-center gap-4 ml-[285px]">
            <Image
              src="/images/topbar_bubbles.png"
              alt="topbar bubbles"
              width={16}
              height={16}
            />
            <p className="font-bold text-primary">
              Best Cleaning Company in Richmond
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[628px] border-[3px] border-primary" />
            <Image
              src="/images/topbar_bubbles.png"
              alt="topbar bubbles"
              width={37}
              height={37}
            />
          </div>
          <div className="w-[342px] flex justify-between ml-[285px]">
            {["Home", "About Us", "Services"].map((nav) => (
              <Link key={nav} href="#" className="font-bold text-lg text-black">
                {nav}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src="/images/company_logo.png"
            alt="company logo"
            width={232}
            height={105}
          />
        </div>
        <div className="flex flex-col">
          <div className="w-[431px] flex justify-center items-center gap-5">
            <Image
              src="/icons/phone_icon.png"
              alt="topbar bubbles"
              width={34}
              height={34}
            />
            <p className="font-bold text-2xl text-black">(832) 820-4035</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/topbar_bubbles.png"
              alt="topbar bubbles"
              width={37}
              height={37}
            />
            <div className="w-[628px] border-[3px] border-primary" />
          </div>
          <div className="w-[431px] flex justify-between items-center ml-12">
            {["Blog", "Contact Us"].map((nav) => (
              <Link key={nav} href="#" className="font-bold text-lg text-black">
                {nav}
              </Link>
            ))}
            <button className="flex items-center bg-[#FBCC21] px-3 py-[.375rem] rounded-md text-black text-lg font-bold shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
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
      <div className="w-full flex lg:hidden flex-col items-center gap-1 px-[1.875rem] pt-5 pb-3">
        <div className="w-full flex justify-between items-center">
          <button className="flex items-center bg-[#FBCC21] px-3 py-[.375rem] rounded-md text-black text-base font-bold shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
            Get an Estimate
            <Image
              src="/icons/arrow_icon.svg"
              alt="arrow icon"
              width={10}
              height={5}
              className="ml-2"
            />
          </button>
          <button className="flex items-center bg-[#FBCC21] px-3 py-[.375rem] rounded-md text-black text-base font-bold shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
            <Image
              src="/icons/phone_icon.png"
              alt="phone icon"
              width={22}
              height={22}
            />
            Click to Call
          </button>
          <Image
            src="/icons/nav_menu_icon.png"
            alt="nav menu icon"
            width={23}
            height={23}
          />
        </div>
        <Image
          src="/images/company_logo.png"
          alt="company logo"
          width={124}
          height={56}
        />
      </div>
    </div>
  );
};
export default Navbar;
