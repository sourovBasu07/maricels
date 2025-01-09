const SectionTitle = ({
  sectionName,
  title,
  description,
  center = false,
}: {
  sectionName: string;
  title: string;
  description?: string;
  center?: boolean;
}) => {
  return (
    <div
      className={`w-full max-w-[1350px] flex flex-col gap-2 ${
        center ? "items-center text-center" : ""
      } mx-auto mb-3 px-[1.875rem] xl:px-0`}
    >
      <div className="flex items-center gap-5">
        <div className="w-5 h-5 flex flex-col justify-between">
          <div className="w-full flex justify-between">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
          <div className="w-full flex justify-between">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
        </div>
        <p className="text-lg text-[#1F1F1F]">{sectionName}</p>
      </div>
      <h1 className="font-bold text-[2.625rem] leading-[3.4375rem] text-black">
        {title}
      </h1>
      <div className="font-normal text-lg text-[#111111] leading-[2.25rem]">
        {description?.split("\n").map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
    </div>
  );
};
export default SectionTitle;
