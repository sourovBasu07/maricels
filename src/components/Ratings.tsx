import Image from "next/image";

const Rating = ({
  ratings,
}: {
  ratings: { star: number; count: number }[];
}) => {
  const totalRatings = ratings.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="w-full flex flex-col">
      {ratings.map((rating) => (
        <div className="w-full flex items-center" key={rating.star}>
          <div className="flex items-center gap-2">
            {rating.star}{" "}
            <Image
              src="/icons/star_icon.svg"
              alt="star icon"
              width={20}
              height={20}
            />
          </div>
          <div className="w-full h-4 bg-[#E6E6E6] ml-6 mr-7">
            <div
              className="h-4 bg-[#FDBB48]"
              style={{
                width: `${(rating.count / totalRatings) * 100}%`,
              }}
            ></div>
          </div>
          <span className="rating-count">{rating.count}</span>
        </div>
      ))}
    </div>
  );
};

const Ratings = () => {
  const ratingData = [
    { star: 5, count: 57 },
    { star: 4, count: 4 },
    { star: 3, count: 0 },
    { star: 2, count: 0 },
    { star: 1, count: 0 },
  ];

  const attributes = ["Quality", "Value", "Customer Service"];

  const images = [
    "/images/screened_image.png",
    "/images/top_rated_image.png",
    "/images/elite_service_image.png",
    "/images/approved_image.png",
    "/images/reviews_image.png",
  ];

  const logos = [
    {
      image: "/images/google_reviews_image.png",
      title: "#1 Cleaning Services Google",
    },
    {
      image: "/images/vosb_image.png",
      title: "Veteran Owned Small Business",
    },
    {
      image: "/images/hub_image.png",
      title: "Texas HUB Certification",
    },
    {
      image: "/images/approved_image.png",
      title: "Screened & Approved",
    },
    {
      image: "/images/veteran_image.png",
      title: "Veteran Business Certification",
    },
    {
      image: "/images/yelp_image.png",
      title: "Top rated Cleaning Services",
    },
  ];

  return (
    <div className="flex flex-col gap-5 3xl:gap-6 px-[1.875rem]">
      <div className="w-full max-w-[980px] flex flex-col 3xl:-translate-y-[4.4375rem] mx-auto max-md:mt-14 bg-white rounded-lg p-6 shadow-[0_0_4px_rgba(0,0,0,0.5)]">
        <p className="font-bold text-2xl text-textColor">Ratings</p>
        <div className="w-full flex flex-col 3xl:flex-row 3xl:items-center 3xl:gap-12">
          <div className="flex 3xl:flex-col items-center flex-1">
            <div className="w-[3.75rem] h-[3.75rem] rounded-full border-[.125rem] border-[#DBDBDB] flex justify-center items-center self-end">
              <p className="font-bold text-lg text-[#FAA500]">4.9</p>
            </div>
            <div className="flex gap-1 py-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/icons/star_icon.svg"
                  alt="star icon"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <p className="font-bold text-sm text-[#1B1B1B]">
              61 Verified Reviews*
            </p>
          </div>
          <div className="hidden 3xl:block w-[1px] h-[4.5rem] border-r border-r-[#DBDBDB]" />
          <div className="w-full flex 3xl:flex-[1.3]">
            <Rating ratings={ratingData} />
          </div>
          <div className="hidden 3xl:block w-[1px] h-[4.5rem] border-r border-r-[#DBDBDB]" />

          <div className="flex flex-col flex-1 gap-2">
            <div className="font-bold text-lg text-textColor">
              <span>Highly rated for</span>
              <span className="w-5 h-5 text-[#3F6EED]">ⓘ</span>
            </div>
            <div className="w-[150px] flex gap-2 flex-wrap pl-3">
              {attributes.map((attribute, index) => (
                <div
                  className="w-max bg-[#EAEAEA] px-[.625rem] py-[.375rem]"
                  key={index}
                >
                  <p className="font-bold text-sm text-textColor">
                    {attribute}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="font-medium text-[.4375rem] md:text-xs 3xl:text-sm text-[#666666] pt-5">
          *Reviews imported from Google have not been individually verified by
          HomeAdvisor.
        </p>
      </div>
      <div className="max-w-[980px] flex flex-col xl:flex-row gap-5 3xl:gap-2 3xl:-translate-y-[4.4375rem] mx-auto bg-white rounded-lg">
        <div className="flex justify-between">
          <div className="w-[180px] h-[5.3125rem] xl:h-28 3xl:h-[148px] shadow-[0_0_2px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center gap-[.3125rem]">
            <p className="font-bold text-xl xl:text-3xl 3xl:text-4xl text-textColor">
              98%
            </p>
            <p className="font-bold text-xs xl:text-lg text-textColor">
              Recommended
            </p>
          </div>
          <div className="w-[180px] h-[5.3125rem] xl:h-28 3xl:h-[148px] shadow-[0_0_2px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center gap-[.3125rem]">
            <p className="font-bold text-xl xl:text-3xl 3xl:text-4xl text-textColor">
              4
            </p>
            <p className="font-bold text-xs xl:text-lg text-textColor">
              Years In Business
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 bg-white rounded-lg px-5 shadow-[0_0_2px_rgba(0,0,0,0.5)]">
          <p className="font-bold text-lg text-textColor">Achievements</p>
          <div className="flex justify-between">
            {images.map((image) => (
              <Image
                key={image}
                src={image}
                alt="schievements image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-12 xl:h-16 3xl:h-[5.125rem]"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-7 bg-white 3xl:-translate-y-[4.4375rem] overflow-scroll">
        {logos.map((logo) => (
          <div key={logo.title} className="flex flex-col items-center gap-5">
            <Image
              src={logo.image}
              alt={logo.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-[3.25rem] xl:h-24 3xl:h-28"
            />
            <p className="max-w-[200px] font-normal text-base xl:text-xl text-[#414141] italic text-center">
              {logo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Ratings;
