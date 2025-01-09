import Image from "next/image";
import SectionTitle from "./SectionTitle";

const AboutUs = () => {
  return (
    <div className="flex gap-7 -mt-[4.4375rem]">
      <Image
        src="/images/about_us_image.jpg"
        alt="about us image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[38%] h-[700px] object-cover"
      />
      <div className="w-[48%]">
        <SectionTitle
          sectionName="About Us"
          title="About Our Expert Cleaners in Richmond"
          description="Maricela's Cleaning Magnificence delivers exceptional cleaning services
        in Richmond, ensuring your home or office shines like new. Our expert
        cleaners are dedicated to transforming your spaces with meticulous
        attention to detail and a commitment to excellence. Whether it's your
        home or office, we use eco-friendly products and state-of-the-art
        equipment to ensure a spotless and healthy environment. With years of
        experience in the cleaning industry, we understand each client's unique
        needs and customize our services to meet them. Our expert cleaners are
        your go-to solution for a pristine space, from regular maintenance
        cleaning to deep cleaning and special projects. We value your time and
        trust, offering flexible scheduling and competitive pricing to fit your
        lifestyle and budget. Our skilled cleaners prioritize quality, using
        eco-friendly products and advanced techniques to provide a clean and
        healthy environment.  At Maricela's Cleaning Magnificence, we take pride
        in offering top-notch cleaning services in Richmond. From routine
        cleaning to deep cleaning and specialized tasks, we tailor our services
        to suit your needs. Maricela's Cleaning Magnificence has built a
        reputation for reliability and meticulous service. We understand that
        every space is unique and offer personalized cleaning solutions designed
        to match your specific requirements. Our dedicated team ensures every
        corner is spotless, leaving your space refreshed and inviting. Whether
        you need recurring maintenance, a one-time deep clean, or assistance
        with special cleaning projects, we’re here to exceed your expectations.
        Experience the difference of a truly magnificent clean with our cleaning
        company, where quality meets perfection every time."
        />
      </div>
    </div>
  );
};
export default AboutUs;
