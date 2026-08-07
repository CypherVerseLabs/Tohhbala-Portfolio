import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Business Owner",
    position: "Construction Industry",
    message:
      "We needed more than a website. We needed a system that matched the way our business actually operates. The solution helped us organize workflows, improve communication, and run more efficiently.",
  },
  {
    image: "/t-avt-2.png",
    name: "Operations Manager",
    position: "Service Industry",
    message:
      "The biggest difference was understanding our business first. The technology was built around our process instead of forcing us to change how we work.",
  },
  {
    image: "/t-avt-3.png",
    name: "Company Founder",
    position: "Small Business",
    message:
      "From custom applications to automation, the focus was always on solving real problems. We gained better visibility, saved time, and created a stronger foundation for growth.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center gap-y-8 xl:flex-row xl:items-start xl:gap-x-12">

            {/* avatar, name, position */}
            <div className="flex flex-col items-center text-center xl:w-[250px]">
              <div className="relative w-[100px] h-[100px] mb-4">
                <Image
                  src={person.image}
                  fill
                  className="object-cover rounded-full"
                  alt={person.name}
                />
              </div>

              {/* name */}
              <div className="text-lg">
                {person.name}
              </div>

              {/* position */}
              <div className="text-[12px] uppercase font-extralight tracking-widest text-white/60">
                {person.position}
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">

              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left text-white/80">
                {person.message}
              </div>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;