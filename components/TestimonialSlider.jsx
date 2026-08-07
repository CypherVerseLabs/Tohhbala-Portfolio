
import Image from "next/image";
import dynamic from "next/dynamic";

import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Swiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  {
    ssr: false,
  }
);

const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  {
    ssr: false,
  }
);

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
          <div className="flex flex-col items-center gap-8 xl:flex-row xl:gap-16">

            {/* avatar, name, position */}
            <div className="flex flex-col items-center text-center xl:w-[250px]">
              <div className="relative mb-4 h-[100px] w-[100px]">
                <Image
                  src={person.image}
                  fill
                  className="rounded-full object-cover"
                  alt={person.name}
                />
              </div>

              <div className="text-lg">
                {person.name}
              </div>

              <div className="text-[12px] uppercase font-extralight tracking-widest text-white/60">
                {person.position}
              </div>
            </div>

            {/* quote and message */}
            <div className="relative flex flex-1 flex-col justify-center xl:border-l xl:border-white/20 xl:pl-20">

              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="mx-auto text-4xl text-white/20 md:mx-0 xl:text-6xl"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="text-center text-white/80 md:text-left xl:text-lg">
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

