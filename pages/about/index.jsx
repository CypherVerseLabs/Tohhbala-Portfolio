import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// About data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Software & Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
          FaWordpress,
        ],
      },
      {
        title: "UI / UX & Product Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "industries",
    info: [
      {
        title: "Construction & Trades",
      },
      {
        title: "Automotive",
      },
      {
        title: "Security & Surveillance",
      },
      {
        title: "Printing & Manufacturing",
      },
      {
        title: "Music Production & Media",
      },
      {
        title: "Small Business & SaaS",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "20+ Years Building Businesses & Technology",
      },
      {
        title: "Custom Software & SaaS Development",
      },
      {
        title: "CRM Systems & Business Automation",
      },
      {
        title: "React, Next.js & Modern Web Applications",
      },
      {
        title: "AI Integrations & Workflow Optimization",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "College Degrees",
      },
      {
        title: "Professional Software Development",
      },
      {
        title: "Business Systems & Process Optimization",
      },
      {
        title: "20+ Years of Real-World Industry Experience",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building{" "}
            <span className="text-accent">Business Solutions</span>
            <br />
            That Deliver Results.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[520px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I'm more than a developer—I'm a builder. With over 20 years of
            hands-on experience across construction, automotive, security,
            printing, media, and technology, I understand how businesses
            operate from the inside out. I combine that real-world knowledge
            with modern software development to build custom SaaS platforms,
            CRM systems, automation tools, and web applications that solve
            real business problems and help companies grow.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={4} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Years of Experience
                </div>
              </div>

              {/* Industries */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Industries Worked In
                </div>
              </div>

              {/* Solutions */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={4} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Solutions Built
                </div>
              </div>

              {/* Technologies */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={4} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Technologies & Tools
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/70"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>

                {item.stage && (
                  <>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                  </>
                )}

                {item.icons && (
                  <div className="flex gap-x-4 mt-2 md:mt-0">
                    {item.icons.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;