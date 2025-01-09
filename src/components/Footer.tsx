import { servicesLists } from "@/data";
import Image from "next/image";

const Footer = () => {
  const logos = [
    "/images/screened_image.png",
    "/images/top_rated_image.png",
    "/images/elite_service_image.png",
    "/images/approved_image.png",
    "/images/reviews_image.png",
    "/images/vosb_image.png",
    "/images/approved_image.png",
    "/images/veteran_image.png",
    "/images/approved_image.png",
    "/images/reviews_image.png",
  ];

  return (
    <div className="mt-[120px]">
      <div className="relative w-full h-[647px] bg-primary">
        <Image
          src="/images/footer_image.jpg"
          alt="footer image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover mix-blend-multiply"
        />
        <div className="absolute w-full h-full top-0 left-0">
          <div className="w-[182px] h-[182px] bg-white rounded-full flex justify-center items-center justify-self-center -translate-y-[50%]">
            <Image
              src="/images/company_logo.png"
              alt="company logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="flex justify-between px-[15%]">
            <div className="max-w-[286px] flex flex-col gap-4">
              <p className="font-bold text-2xl text-white">
                We Are Maricela&apos;s Cleaning Magnificence
              </p>
              <p className="text-white">
                We work with a passion of taking challenges and creating new
                ones in advertising sector.
              </p>
              <p className="font-bold text-2xl text-white">Open Hours:</p>
              <p className="text-white">
                Mon – Fri: 07 am – 07 pm, <br />
                Sunday: CLOSED
              </p>
              <div className="flex items-center gap-9">
                <Image
                  src="/icons/facebook_logo.png"
                  alt="facebook logo"
                  width={21}
                  height={21}
                />
                <Image
                  src="/icons/twitter_logo.png"
                  alt="twitter logo"
                  width={21}
                  height={21}
                />
                <Image
                  src="/icons/linkedin_logo.png"
                  alt="linkedin logo"
                  width={21}
                  height={21}
                />
                <Image
                  src="/icons/youtube_logo.png"
                  alt="Youtube logo"
                  width={21}
                  height={21}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-xl text-white">News</p>
              <div className="flex flex-col gap-4">
                {[
                  "How it works",
                  "Gallery",
                  "Testimonials",
                  "Careers",
                  "Sitemap",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1">
                    <p className="text-white">&gt;&gt;</p>
                    <p className="text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-xl text-white">News</p>
              <div className="flex flex-col gap-4">
                {servicesLists.map((item) => (
                  <div key={item} className="flex items-center gap-1">
                    <p className="text-white">&gt;&gt;</p>
                    <p className="text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[430px] flex flex-col gap-6">
              <p className="font-bold text-[2rem] leading-[2.625rem] text-white">
                Contact Us
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/location_icon.png"
                  alt="location icon"
                  width={23}
                  height={23}
                />
                <p className="text-white">
                  13809 Hollow Canyon Lane Rosharon, TX 77583
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/phone_icon_white.png"
                  alt="Phone icon"
                  width={23}
                  height={23}
                />
                <p className="text-white">(832)8204035</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/mail_icon.png"
                  alt="Mail icon"
                  width={23}
                  height={23}
                />
                <p className="text-white">
                  maricela.maldonado@maricelasmagnificence.com
                </p>
              </div>
              <div className="flex justify-center items-center flex-wrap gap-7">
                {logos.map((logo, index) => (
                  <div key={index} className="">
                    <Image
                      key={logo}
                      src={logo}
                      alt="schievements image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-auto h-[3.1875rem]"
                    />
                  </div>
                ))}
              </div>
              <Image
                src="/images/sparkles_image.png"
                alt="sparkles image"
                width={81}
                height={81}
                className="absolute right-4 bottom-14"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[68px] bg-primary">
        <div className="max-w-[1350px] h-full mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <p className="font-bold text-white">WEBSITE DESIGN AND SEO BY :-</p>
            <Image
              src="/images/agency_logo.png"
              alt="agency logo"
              width={163}
              height={42}
            />
          </div>
          <p className="text-white">
            © All Copyright 2024 by Maricela&apos;s Cleaning Magnificence
          </p>
          <div className="flex gap-5">
            <p className="text-white">Terms & Condition</p>
            <p className="text-white">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;