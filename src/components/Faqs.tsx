"use client";

import { faqsData } from "@/data";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import Image from "next/image";

const Accordion = ({
  data,
}: {
  data: { title: string; content: string }[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-[1350px] space-y-1 mx-auto max-xl:px-[1.875rem]">
      {data.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <div
            className="flex justify-between items-center px-6 py-3 bg-primary cursor-pointer transition-colors"
            onClick={() => toggleAccordion(index)}
          >
            <p className="font-bold text-lg text-white">{item.title}</p>
            <span className="accordion-icon">
              {index !== activeIndex ? (
                <Image
                  src="/icons/arrow_down.svg"
                  alt="arrow down"
                  width={9}
                  height={16}
                />
              ) : (
                <Image
                  src="/icons/arrow_down.svg"
                  alt="arrow down"
                  width={9}
                  height={16}
                  className="rotate-180"
                />
              )}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              index === activeIndex ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="font-medium text-base text-primary px-6 py-3">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="">
      <SectionTitle
        title="FAQ for Cleaning Services in Houston"
        sectionName="FAQ"
        center
      />
      <div className="">
        <Accordion data={faqsData} />
      </div>
    </div>
  );
};
export default Faqs;
