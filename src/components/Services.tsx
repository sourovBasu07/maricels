"use client";

import { servicesData } from "@/data";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const [serviceType, setServiceType] = useState(
    "Residential Cleaning Services Richmond"
  );

  return (
    <div className="space-y-[120px]">
      <div className="max-w-[1350px] mx-auto">
        <SectionTitle
          title="Professional Cleaning Services in Richmond"
          sectionName="Professional Cleaning Services"
          description="Maricela's Cleaning Magnificence offers top-tier professional cleaning services in Richmond. With a dedicated team of experienced cleaners, we specialize in both residential and commercial spaces, ensuring your home or office sparkles with cleanliness. Our services include deep cleaning, regular maintenance, move-in/move-out cleaning, and customized cleaning plans tailored to your needs. We offer flexible scheduling to accommodate your busy lifestyle, and our competitive pricing ensures you get the best value for your investment. Whether it's a one-time deep clean or regular upkeep, our professional cleaning company is here to make your life easier and your spaces shine. Our cleaners also offer"
          center
        />
        <div className="grid grid-cols-2 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="relative w-full h-[581px] rounded-[1rem]"
            >
              <Image
                src={service.image}
                alt="service image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover rounded-[1rem]"
              />
              <div className="absolute left-0 bottom-0 bg-[#2B2B2B] bg-opacity-50 rounded-b-[1rem] px-7 py-6 bg-blend-darken">
                <p className="text-lg text-white leading-[1.875rem]">
                  {service.title}
                </p>
                <p className="text-white leading-[1.875rem]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-7">
        <div className="w-[50%]">
          <SectionTitle
            title="Keep Your Home Clean and Fresh"
            sectionName="Clean and Fresh"
            description={`Keep your home clean and fresh with Maricela's Cleaning Magnificence! Our professional cleaning services are tailored to meet your needs, ensuring every corner of your home sparkles. From deep cleaning to regular maintenance, our skilled team uses top-quality products and techniques to deliver impeccable results. With our comprehensive cleaning packages, you can choose the level of service that fits your lifestyle and budget. Whether it's spring cleaning, holiday prep, or routine maintenance, our cleaning company is your partner in creating a healthier home. Our trustworthy and trained staff treat your home with the utmost respect, ensuring your belongings are safe and secure. With our satisfaction guarantee, we strive to leave you delighted with every service. 
              Maricela's Cleaning Magnificence offers exceptional cleaning services to keep your home spotless and refreshing. Our experienced team provides customized cleaning solutions, from deep cleaning to routine maintenance, ensuring every area of your home shines. We use high-quality, eco-friendly products and advanced techniques for effective results, making your living space healthier and more inviting. With flexible cleaning packages designed to fit your budget and needs, we cater to everything from seasonal clean-ups to ongoing upkeep. Our trustworthy, trained staff treat your home carefully, ensuring your belongings are safe. At Maricela's Cleaning Magnificence, we’re committed to your satisfaction, and you’ll be delighted with our work. Enjoy a cleaner, fresher home with our reliable, professional cleaning services! Don't wait—elevate your living space with our exceptional cleaning services today!`}
          />
        </div>
        <div className="w-[35%] flex flex-col">
          <Image
            src="/images/clean_image1.jpg"
            alt="clean image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[551px] h-[411px] object-cover rounded-2xl flex self-end"
          />
          <div className="flex justify-between items-start">
            <Image
              src="/images/clean_image2.jpg"
              alt="clean image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[421px] h-[334px] object-cover rounded-2xl border-[.625rem] border-white -translate-y-[2.8125rem] shadow-[0_0_6px_rgba(0,0,0,0.5)]"
            />
            <div className="bg-primary rounded-2xl mt-8 px-10 py-6 text-center">
              <p className="font-bold text-[3.4375rem] text-white leading-[4.5rem]">
                5+
              </p>
              <p className="font-bold text-2xl text-white text-center">
                Successful <br /> Years
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1350px] mx-auto flex gap-7">
        <div className="flex flex-col">
          <div className="flex gap-4">
            <Image
              src="/images/home_image1.jpg"
              alt="home image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[353px] h-[331px] object-cover rounded-2xl"
            />
            <Image
              src="/images/home_image2.jpg"
              alt="home image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[286px] h-[248px] object-cover rounded-2xl"
            />
          </div>
          <div className="w-[425px] h-[316px] flex self-end rounded-2xl -translate-y-[4.375rem]">
            <Image
              src="/images/home_image1.jpg"
              alt="home image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover rounded-2xl shadow-[0_0_6px_rgba(0,0,0,0.5)] border-[1rem] border-white"
            />
          </div>
        </div>
        <div className="w-[686px]">
          <SectionTitle
            title="Home Cleaning Services Richmond"
            sectionName="Home Cleaning"
            description="Maricela's Cleaning Magnificence in Richmond offers top-tier home cleaning services tailored to your needs. Our professional team ensures every corner of your home sparkles, providing thorough and meticulous cleaning that exceeds expectations. Our dedicated cleaning staff takes pride in transforming your space into a haven of cleanliness and comfort. With years of experience and a commitment to excellence, we handle everything from floors to ceilings with precision and care. Whether you need detailed kitchen sanitization, carpet steam cleaning, or general tidying up, our services are designed to meet your specific requirements. We prioritize your satisfaction and aim to create a healthier living environment for you and your family. Discover the difference with our professional cleaning company and enjoy a home that shines brilliantly after every visit."
          />
        </div>
      </div>
      <div className="flex gap-8 ml-[14%]">
        <div className="flex flex-1">
          <SectionTitle
            title="House Cleaning Services Richmond"
            sectionName="Home Cleaning"
            description="Maricela's Cleaning Magnificence offers top-tier house cleaning services in Richmond. With a commitment to excellence, our skilled team ensures every corner of your home shines with cleanliness. From routine maintenance to deep cleaning, we tailor our services to meet your specific needs, using eco-friendly products for a healthier environment. Whether you need weekly, bi-weekly, or one-time cleaning, our reliable staff delivers impeccable results, leaving you with a fresh and inviting space to enjoy. From bathrooms, kitchens, and living rooms to bedrooms, we tackle dust, grime, and dirt with precision and care. With competitive pricing and flexible scheduling, we strive to make professional cleaning accessible and convenient for all our clients. Experience peace of mind knowing your home is in capable hands with our cleaning company, where we strive for nothing less than magnificence in every clean."
          />
        </div>
        <div className="h-[451px] flex flex-1">
          <Image
            src="/images/home_image4.jpg"
            alt="home image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex justify-center gap-6">
          {[
            "Residential Cleaning Services Richmond",
            "Commercial Cleaning Services Richmond Hill",
          ].map((item) => (
            <p
              key={item}
              className={`rounded-2xl border-[.3125rem] border-white ${
                item === serviceType
                  ? "bg-primary text-white"
                  : "bg-[#D2D2D2] text-black"
              } px-10 py-4 font-bold text-xl cursor-pointer`}
              onClick={() => setServiceType(item)}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="max-w-[1350px] mx-auto">
          <SectionTitle
            title="Residential Cleaning Services Richmond"
            sectionName="Residential Cleaning"
            description="Maricela's Cleaning Magnificence offers premier residential cleaning services in Richmond. With a commitment to impeccable service and attention to detail, we transform homes into pristine sanctuaries. Our comprehensive residential cleaning services cover all areas of your home, from kitchens and bathrooms to living spaces and bedrooms. We pay meticulous attention to dusting, vacuuming, mopping, and sanitizing surfaces, ensuring a hygienic and inviting environment. Maricela's Cleaning Magnificence is known for our professionalism, punctuality, and friendly customer service. Beyond basic cleaning, we offer additional services such as window washing, carpet cleaning, and organization to enhance your living environment. Our dedication to using safe, effective cleaning products ensures a healthy home for you and your family. Whether you're a busy professional, a growing family, or simply seeking more free time, we're here to provide reliable, top-quality cleaning solutions tailored to your lifestyle. We also offer"
            center
          />
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            src="/images/service_type_image.jpg"
            alt="service type image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex z-30 mix-blend-multiply">
            {[
              "Regular Housekeeping",
              "Deep Cleaning",
              "Move-In/Move-Out Cleaning",
              "Post-Renovation Cleaning",
            ].map((_, index) => (
              <div
                key={index}
                className="w-full flex justify-center items-end bg-[#C1C1C1] border-[3px] border-white"
              />
            ))}
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-end pb-7 z-30">
            {[
              "Regular Housekeeping",
              "Deep Cleaning",
              "Move-In/Move-Out Cleaning",
              "Post-Renovation Cleaning",
            ].map((item, index) => (
              <p
                key={index}
                className="w-full font-bold text-2xl text-white text-center"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
