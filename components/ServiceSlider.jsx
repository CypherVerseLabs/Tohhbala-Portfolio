"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Custom Business Application",
          path: "/thumb1.jpg",
          link: "/contact",
        },
        {
          title: "CRM & Customer Management System",
          path: "/thumb2.jpg",
          link: "/contact",
        },
        {
          title: "Business Workflow Automation",
          path: "/thumb3.jpg",
          link: "/contact",
        },
        {
          title: "Custom Client Portal",
          path: "/thumb4.jpg",
          link: "/contact",
        },
      ],
    },
    {
      images: [
        {
          title: "Construction Management Solution",
          path: "/thumb4.jpg",
          link: "/contact",
        },
        {
          title: "Automotive Industry Solution",
          path: "/thumb1.jpg",
          link: "/contact",
        },
        {
          title: "Security & Monitoring Platform",
          path: "/thumb2.jpg",
          link: "/contact",
        },
        {
          title: "Custom Digital Experience",
          path: "/thumb3.jpg",
          link: "/contact",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      spaceBetween={20}
      slidesPerView={1}
      className="h-[280px] sm:h-[480px] w-full"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 gap-4 h-full">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  h-[130px]
                  sm:h-[220px]
                  bg-white/10
                "
              >
                <Image
                  src={image.path}
                  alt={image.title}
                  fill
                  className="
                    object-cover
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                />

                {/* overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-l
                    from-transparent
                    via-[#e838cc]
                    to-[#4a22bd]
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-80
                  "
                />

                {/* title */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-4
                    translate-y-full
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                  "
                >
                  <Link
                    href={image.link}
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      tracking-wider
                    "
                  >
                    <span>{image.title}</span>

                    <BsArrowRight
                      className="
                        text-xl
                        transition-transform
                        duration-300
                        group-hover:translate-x-2
                      "
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;