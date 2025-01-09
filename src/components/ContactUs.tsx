import Image from "next/image";

const Input = ({
  label,
  placeholder,
  required = false,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="" className="text-lg text-primary">
        {label}
        {required && "*"}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-[#880769] bg-opacity-15 border-none outline-none px-5 py-3"
      />
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="flex justify-between items-center pl-[183px] pr-[102px]">
      <div className="w-[603px] space-y-14">
        <h2 className="font-bold text-[2rem] leading-[2.625rem] text-primary">
          Give Us Feedback
        </h2>
        <div className="grid grid-cols-2 gap-x-14 gap-y-9">
          <Input label="Your Name" placeholder="Enter your name" required />
          <Input label="Email" placeholder="Enter your email" required />
          <Input label="Subject" placeholder="Enter your subject" required />
          <Input label="Your Phone" placeholder="+1**********" required />
          <div className="grid col-span-2 gap-y-3">
            <label htmlFor="" className="text-lg text-primary">
              Message*
            </label>
            <textarea
              name=""
              id=""
              className="w-full h-[5.625rem] bg-[#880769] bg-opacity-15 border-none outline-none px-5 py-3 resize-none"
            ></textarea>
          </div>
        </div>
        <button className="flex items-center bg-[#FBCC21] px-14 py-4 text-black text-lg font-bold shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
          Submit
          <Image
            src="/icons/filled_arrow_icon.png"
            alt="arrow icon"
            width={17}
            height={14}
            className="ml-5"
          />
        </button>
      </div>
      <div className="relative w-[614px] h-[666px]">
        <Image
          src="/images/contact_us_image.jpg"
          alt="contact us image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[180px] -left-[336px] flex flex-col gap-6 bg-primary rounded-[.5625rem] shadow-[0_0_9px_rgba(0,0,0,0.5)] px-7 py-10">
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
              src="/icons/instagram_logo.png"
              alt="instagram logo"
              width={21}
              height={21}
            />
            <Image
              src="/icons/linkedin_logo.png"
              alt="linkedin logo"
              width={21}
              height={21}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
