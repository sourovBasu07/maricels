"use client";

import { reviewsData } from "@/data";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const ReviewCard = ({
  icon,
  stars,
  name,
  location,
  review,
}: {
  icon: string;
  stars: number;
  name: string;
  location: string;
  review: string;
}) => {
  return (
    <div className="w-full h-[326px] flex flex-col justify-between">
      <div className="space-y-[.375rem]">
        <Image
          src={icon}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-[3.125rem]"
        />
        <div className="flex items-center gap-2">
          {Array.from({ length: stars }).map((_, index) => (
            <Image
              key={index}
              src="/icons/star_icon_primary.svg"
              alt={name}
              width={14}
              height={14}
            />
          ))}
        </div>
        <p className="text-lg leading-[1.875rem] text-black">{review}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-sm text-black">{name}</p>
        <p className="text-[.625rem] text-[#4A4A4A]">{location}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-[1350px] mx-auto">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4">
          <div className="grid col-span-3">
            <div className="grid grid-cols-3">
              {reviewsData
                .slice(currentIndex, currentIndex + 3)
                .map((review, index) => (
                  <ReviewCard key={index} {...review} />
                ))}
            </div>
            <div className="flex items-center gap-8 mt-6">
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
                  disabled={currentIndex === reviewsData.length - 1}
                  onClick={handleNext}
                  className="px-4 py-2 bg-primary text-white rounded-full border border-primary disabled:bg-transparent disabled:text-primary"
                >
                  &#x276F;
                </button>
              </div>
              <div className="h-[2px] flex flex-1 bg-primary" />
            </div>
          </div>

          <SectionTitle
            title="Here’s what to expect when you hire us as your Cleaning Services in Richmond"
            sectionName="Review"
          />
        </div>
      </div>
    </div>
  );
};
export default Reviews;
