
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";

import "swiper/css";
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
          <div className="grid grid-cols-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                key={imageI}
                className="group relative flex items-center justify-center overflow-hidden rounded-xl"
              >
                {/* image */}
                <Image
                  src={image.path}
                  width={500}
                  height={300}
                  alt={image.title}
                  className="object-cover transition-all duration-500"
                />

                {/* overlay gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-80"
                  aria-hidden
                />

                {/* title */}
                <div className="absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-10 xl:group-hover:-translate-y-20">
                  <Link
                    href={image.link}
                    className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                  >
                    <span>
                      {image.title}
                    </span>

                    <span className="translate-y-[500%] text-xl transition-all duration-300 delay-150 group-hover:translate-y-0">
                      <BsArrowRight aria-hidden />
                    </span>
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
