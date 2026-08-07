
import dynamic from "next/dynamic";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
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

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Custom Software",
    description:
      "Business applications built around your workflow, from internal tools to complete software platforms.",
  },
  {
    Icon: RxRocket,
    title: "SaaS Development",
    description:
      "Scalable SaaS products designed to help businesses automate processes and create new opportunities.",
  },
  {
    Icon: RxReader,
    title: "CRM Systems",
    description:
      "Custom customer management solutions that organize sales, communication, and business operations.",
  },
  {
    Icon: RxCrop,
    title: "Automation Solutions",
    description:
      "Eliminate repetitive tasks with smart workflows, integrations, and technology that saves time.",
  },
  {
    Icon: RxPencil2,
    title: "Modern Web Applications",
    description:
      "High-performance React applications designed for speed, reliability, and a better user experience.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode={true}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="group cursor-pointer rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 h-full">
            
            {/* icon */}
            <div className="mb-6 text-4xl text-accent">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg font-semibold">
                {item.title}
              </div>

              <p className="max-w-[350px] leading-normal text-white/70">
                {item.description}
              </p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent"
                aria-hidden
              />
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;

