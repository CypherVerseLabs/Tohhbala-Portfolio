"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
      modules={[Navigation, Pagination]}
      navigation
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
      slidesPerView={1}
      className="h-[420px] w-full"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div
            className="
              flex
              h-full
              flex-col
              items-center
              justify-center
              gap-8
              px-4
              md:flex-row
            "
          >
            {/* avatar */}
            <div className="flex flex-col items-center text-center md:w-[250px]">
              <div className="relative mb-4 h-[100px] w-[100px]">
                <Image
                  src={person.image}
                  fill
                  alt={person.name}
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="text-lg">
                {person.name}
              </h3>

              <p
                className="
                  text-[12px]
                  uppercase
                  tracking-widest
                  text-white/60
                "
              >
                {person.position}
              </p>
            </div>


            {/* message */}
            <div
              className="
                relative
                flex
                flex-1
                flex-col
                justify-center
                md:border-l
                md:border-white/20
                md:pl-12
              "
            >
              <FaQuoteLeft
                className="
                  mb-5
                  text-5xl
                  text-white/20
                "
                aria-hidden
              />

              <p
                className="
                  text-center
                  text-white/80
                  md:text-left
                  md:text-lg
                  leading-relaxed
                "
              >
                {person.message}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
