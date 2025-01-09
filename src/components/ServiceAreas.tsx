"use client";

import { serviceAreas } from "@/data";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

const ServiceAreas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === serviceAreas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? serviceAreas.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="">
      <SectionTitle
        title="Maricela's Cleaning Magnificenc Service Area"
        sectionName="Service Area"
        center
      />
      <div className="flex gap-[2.625rem]">
        {serviceAreas.map((area, index) => (
          <div key={index} className="odd:translate-y-8">
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: area.link }}
            ></div>
            <p className="bg-primary rounded-b-[.5625rem] py-3 font-bold text-base text-white text-center">
              {area.name}
            </p>
          </div>
        ))}
      </div>
      <div className="max-w-[1350px] mx-auto flex items-center gap-8 mt-6">
        <div className="h-[2px] flex flex-1 bg-primary" />
        <div className="flex gap-4">
          <button
            disabled={currentIndex === 0}
            onClick={handlePrev}
            className="px-4 py-2 bg-primary text-white rounded-full border border-primary disabled:bg-transparent disabled:text-primary"
          >
            &#x276E;
          </button>
          <button
            disabled={currentIndex === serviceAreas.length - 1}
            onClick={handleNext}
            className="px-4 py-2 bg-primary text-white rounded-full border border-primary disabled:bg-transparent disabled:text-primary"
          >
            &#x276F;
          </button>
        </div>
        <div className="h-[2px] flex flex-1 bg-primary" />
      </div>
    </div>
  );
};
export default ServiceAreas;
