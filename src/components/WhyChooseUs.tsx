import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { reasonsData } from "@/data";

const WhyChooseUs = () => {
  return (
    <div className="space-y-[120px]">
      <div className="flex gap-5">
        <div className="w-[38%]">
          <Image
            src="/images/kitchen_image.jpg"
            alt="kitchen image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[47%]">
          <SectionTitle
            title="A Clean Home Always Be A Happy Home"
            sectionName="We Make People Happy"
            description="&quot;A clean home is a happy home.&quot; At Maricela's Cleaning Magnificence, we wholeheartedly believe in this mantra. Our mission is to bring joy and comfort to every household in Richmond through our exceptional cleaning services. That's what we strive to achieve with every visit. Our team of dedicated professionals understands the transformative power of a clean environment. We go beyond surface cleaning to ensure every corner is pristine, using only the safest, chemical-free, and non-toxic products. Whether you need regular maintenance or a thorough deep cleaning, we are here to cater to your needs. We take pride in our work, treating each home with the care and attention it deserves. Your satisfaction is our priority, and we guarantee reliable and trustworthy service.
At Maricela's Cleaning Magnificence, we know that a clean home is not just about appearance—it's about creating a healthier and more welcoming space for you and your loved ones. Our commitment to excellence ensures that every nook and cranny is attended to with precision and care. We take pride in our reliable and efficient service to enjoy your home without the stress of cleaning. Focus on detail, professionalism, and care; we treat your home as our own. Let us help you maintain a spotless environment so you can focus on what truly matters—making memories and enjoying life's moments. Choose Maricela's Cleaning Magnificence, where every cleaning is a step toward happiness.
"
          />
        </div>
      </div>
      <div className="">
        <SectionTitle
          title="Reasons to Choose Our Cleaning Service"
          sectionName="Reason to Choose Us"
          description="There are several compelling reasons to choose Maricela's Cleaning Magnificence for your cleaning needs: Choose us for a cleaning service that cares about your health, and the environment, and delivers exceptional results."
          center
        />
        <div className="flex items-center gap-6">
          <Image
            src="/images/why_choose_image1.jpg"
            alt="why choose us"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[334px] h-[930px] object-cover"
          />
          <div className="flex flex-col gap-2">
            {reasonsData.map((item) => (
              <div key={item.title} className="group">
                <p className="font-bold text-xl text-black leading-[2.25rem]">
                  {item.title}:
                </p>
                <p className="font-normal text-lg leading-[2.25rem] text-black">
                  {item.content}
                </p>
                <div className="w-full h-[1px] bg-black my-1 group-last:hidden" />
              </div>
            ))}
          </div>
          <Image
            src="/images/why_choose_image2.jpg"
            alt="why choose us"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[334px] h-[930px] object-cover"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-end">
        <div className="w-[52%] flex flex-col gap-4">
          <SectionTitle
            title="Enjoyable Freshly Cleaned Home"
            sectionName="Enjoyable Freshly"
            description="Step into a realm of tranquility and cleanliness with Maricela's Cleaning Magnificence, where we redefine the essence of a freshly cleaned home. We are committed to transforming your home into an oasis of comfort and joy. Our expert team meticulously tends to every detail, ensuring that surfaces are clean and sparkling. With our cleaning company, enjoy the peace of mind of knowing your home is in expert hands. With Maricela's Cleaning Magnificence, you’ll never have to worry about the hassle of cleaning again. Whether you need routine maintenance, a deep clean, or special attention for specific areas, our team is here to meet your needs with precision and care. 
Experience the joy of a spotless and serene home with Maricela's Cleaning Magnificence. Our dedicated team takes pride in delivering exceptional cleaning services tailored to bring comfort and harmony to your living space. From gleaming surfaces to pristine corners, we leave no detail overlooked. Using eco-friendly products and advanced techniques, we ensure your home looks immaculate, fresh, and inviting. Experience the perfect balance of cleanliness and comfort—schedule your service today and let us elevate your space to new levels of magnificence. Let us create an enjoyable, freshly cleaned home for you to savor and relax in. Trust us to refresh your home and create an environment where you can unwind. Contact Maricela's Cleaning Magnificence today and let us turn your home into a haven of cleanliness and relaxation.
"
          />
          <button className="flex self-start items-center bg-[#FBCC21] px-14 py-4 text-black text-lg font-bold shadow-[2px_2px_2px_rgba(0,0,0,0.25)]">
            Get an Estimate
            <Image
              src="/icons/arrow_icon.svg"
              alt="arrow icon"
              width={13}
              height={9}
              className="ml-5"
            />
          </button>
          <div className="flex items-center gap-4">
            <p className="font-semibold text-3xl text-black">or Call Us:</p>
            <p className="font-bold text-3xl text-primary">(832) 820-4035</p>
          </div>
        </div>
        <div className="w-[32%]">
          <Image
            src="/images/interior_image.jpg"
            alt="interior image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
