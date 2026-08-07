import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
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
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                {/* image */}
                <Image
                  src={image.path}
                  alt={image.title}
                  fill
                  className="object-cover"
                />

                {/* overlay gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                  aria-hidden
                />

                {/* title */}
                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                  <Link
                    href={image.link}
                    className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                  >
                    <div className="delay-100">
                      {image.title}
                    </div>

                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      <BsArrowRight aria-hidden />
                    </div>
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