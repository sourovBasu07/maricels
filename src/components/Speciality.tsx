import { specialData } from "@/data";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const Speciality = () => {
  return (
    <div className="max-w-[1350px] mx-auto">
      <div className="">
        <SectionTitle
          title="What Makes Our Company Special"
          sectionName="Special"
          description="At Maricela's Cleaning Magnificence, several key factors set us apart and make our company special: 
Choosing our cleaning company means choosing a cleaning service that not only cleans but cares—for your health, your environment, and your satisfaction. Experience the difference with us and let us make your space shine!"
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {specialData.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] border border-[#AFAFAF] rounded-[1.25rem] p-6 flex flex-col items-start gap-[.625rem] last:col-span-2"
            >
              <div className="w-[6.25rem] h-[6.25rem] flex justify-center items-center bg-white rounded-full shadow-[0_0_6px_rgba(0,0,0,0.25)]">
                <Image
                  src={item.icon}
                  alt="speciality icon"
                  width={57}
                  height={57}
                />
              </div>
              <h3 className="font-bold text-xl text-[#1F1D20]">{item.title}</h3>
              <p className="font-light text-lg text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};
export default Speciality;
