import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-tertiary h-max rounded-lg py-8 px-6 flex flex-col justify-between group cursor-pointer hover:bg-white/10 transition-all duration-300">
            
            {/* icon */}
            <div className="text-4xl text-accent mb-6">
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
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
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