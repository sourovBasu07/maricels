import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import ProjectsGallery from "@/components/ProjectsGallery";
import Ratings from "@/components/Ratings";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import Services from "@/components/Services";
import Speciality from "@/components/Speciality";
import WhyChooseUs from "@/components/WhyChooseUs";

const Homepage = () => {
  return (
    <div className="">
      <Hero />
      <div className="space-y-[120px]">
        <Ratings />
        <AboutUs />
        <Services />
        <ProjectsGallery />
        <Speciality />
        <div className="bg-[#F7F7F7] py-10">
          <Reviews />
        </div>
        <WhyChooseUs />
        <Faqs />
        <ServiceAreas />
        <ContactUs />
      </div>
    </div>
  );
};
export default Homepage;
