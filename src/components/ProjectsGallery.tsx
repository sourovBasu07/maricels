import Image from "next/image";
import { CSSProperties } from "react";
import SectionTitle from "./SectionTitle";

const ProjectsGallery = () => {
  const images = [
    "/images/gallery_image1.jpg",
    "/images/gallery_image2.jpg",
    "/images/gallery_image3.jpg",
    "/images/gallery_image4.jpg",
    "/images/gallery_image5.jpg",
    "/images/gallery_image6.jpg",
    "/images/gallery_image7.jpg",
    "/images/gallery_image8.jpg",
    "/images/gallery_image9.jpg",
    "/images/gallery_image10.jpg",
    "/images/gallery_image11.jpg",
  ];

  return (
    <div className="space-y-[120px]">
      <div className="">
        <SectionTitle
          title="Maricela's Cleaning Magnificence Gallery Of Past Projects"
          sectionName="Project Gallery"
          center
        />
        <div className="space-y-8">
          <div
            className="w-full h-[var(--height)] overflow-hidden"
            style={
              {
                "--width": "358px",
                "--height": "239px",
                "--quantity": images.length,
              } as CSSProperties
            }
          >
            <div className="flex w-full min-w-[calc(var(--width)_*_var(--quantity))] relative">
              {images.map((image: string, index: number) => {
                return (
                  <div
                    key={image}
                    className="w-[358px] h-[239px] rounded-md overflow-hidden absolute animate-autoRun transition-filter duration-500"
                    style={{ "--position": index + 1 } as CSSProperties}
                  >
                    <Image
                      src={image}
                      alt="projects gallery"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover size-full rounded-md"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div
            data-reverse="true"
            className="w-full h-[var(--height)] overflow-hidden"
            style={
              {
                "--width": "358px",
                "--height": "239px",
                "--quantity": images.length,
              } as CSSProperties
            }
          >
            <div className="flex w-full min-w-[calc(var(--width)_*_var(--quantity))] relative">
              {images.map((image: string, index: number) => {
                return (
                  <div
                    key={image}
                    className="w-[358px] h-[239px] rounded-md overflow-hidden absolute animate-reverseAutoRun transition-filter duration-500"
                    style={{ "--position": index + 1 } as CSSProperties}
                  >
                    <Image
                      src={image}
                      alt="projects gallery"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover size-full rounded-md"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-[35%] h-full flex gap-3">
          <div className="flex flex-1 h-[700px]">
            <Image
              src="/images/chemical_free_image1.jpg"
              alt="chemical free image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cove rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.25)]"
            />
          </div>
          <div className="h-full flex flex-1 flex-col">
            <Image
              src="/images/chemical_free_image2.jpg"
              alt="chemical free image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[265px] object-cove rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.25)]"
            />
            <Image
              src="/images/chemical_free_image3.jpg"
              alt="chemical free image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[430px] object-cove rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
        <div className="w-[51%]">
          <SectionTitle
            title="We Provide Chemical Free Non-Toxic Cleaning Supplies"
            sectionName=" Free Non-Toxic Cleaning"
            description="Providing chemical-free, non-toxic cleaning supplies Maricela's Cleaning Magnificence is the best cleaning services company. We are dedicated to revolutionizing the cleaning industry by offering safe products for your family and the environment. Our expert cleaning suppliers understand the importance of using products free from harsh chemicals. Our carefully curated selection includes everything you need for a spotless home without compromising health or cleanliness. From all-purpose cleaners and dishwashing liquids to laundry detergents and floor cleaners, each product is crafted with natural ingredients that effectively clean without leaving harmful residues. When you want to tackle everyday messes or deep cleaning projects, you can trust that our cleaning company has the solution. At Maricela's Cleaning Magnificence, we specialize in providing eco-friendly, non-toxic cleaning products that deliver powerful results without harsh chemicals. We understand that a clean home is not just about appearance—it’s about creating a healthy and secure environment for you and your loved ones. That’s why every product we offer is carefully chosen to provide the highest quality while being free from harmful chemicals or synthetic fragrances. From surface cleaners to laundry care, we ensure that each item in our collection is safe for children, pets, and the planet. Maricela's Cleaning Magnificence is more than just a cleaning service; it's a commitment to a healthier lifestyle, where sustainability and effectiveness go hand in hand. Trust Maricela's Cleaning Magnificence for a pristine, toxin-free space every time. Experience the difference with products that clean thoroughly, naturally, and without compromise."
          />
        </div>
      </div>
      <div className="flex justify-end items-stretch gap-4">
        <div className="w-[48%]">
          <SectionTitle
            title="Trusted Cleaning Services in Richmond"
            sectionName="Trusted Cleaning"
            description="Maricela's Cleaning Magnificence is your trusted partner for premier cleaning services in Richmond. We deliver exceptional cleaning solutions tailored to your needs, whether for homes or businesses. Our cleaners prioritize your well-being by using only chemical-free and non-toxic cleaning products. Our cleaner's main commitment to sustainability ensures that your space is clean and safe for you, your family, and the environment. From regular maintenance to specialized deep cleaning projects, our dedicated team has the expertise and tools to handle any cleaning task with meticulous attention to detail. We understand that every space is unique and we tailor our services to exceed your expectations every time. We take the time to listen to your specific needs and concerns, customizing our cleaning plans to align with your preferences. Whether you require a spotless home or a professionally cleaned office to welcome your clients, we ensure every detail is handled carefully.
          Our commitment to sustainability ensures a clean, healthy environment for your family, employees, and the planet. Our services are designed to fit seamlessly into your lifestyle or business schedule, providing convenience and peace of mind. We believe in building lasting relationships with our clients, founded on trust, reliability, and consistently outstanding results. Our trained and experienced team uses advanced cleaning techniques and equipment to ensure a clean and sanitized space. Whether you need recurring cleaning services, move-in/move-out cleaning, or a one-time deep clean, we’ve got you covered. Our reputation in Richmond as a premier cleaning service provider is a testament to our unwavering commitment to excellence. Join our community of satisfied clients in Richmond who rely on our cleaning company for professional, reliable, and trustworthy cleaning services."
          />
        </div>
        <div className="w-[37%]">
          <Image
            src="/images/room_image.jpg"
            alt="room image"
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
export default ProjectsGallery;
