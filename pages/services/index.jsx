import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="container mx-auto h-full">

      <div className="flex flex-col xl:flex-row gap-x-8 items-center h-full">

        {/* text */}
        <div className="text-center flex xl:w-[35vw] flex-col lg:text-left mb-8 xl:mb-0">

          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-8"
          >
            Solutions{" "}
            <span className="text-accent">
              Built
            </span>
            <br />
            For Real Businesses.
          </motion.h2>


          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 max-w-[500px] mx-auto lg:mx-0"
          >
            Every project starts with understanding the business problem
            first. From custom applications and SaaS platforms to automation
            systems and digital experiences, we build technology designed to
            improve the way businesses operate.

            <br />
            <br />

            Explore examples of custom solutions, software platforms, and
            digital products built to create real business value.
          </motion.p>

        </div>


        {/* slider */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:w-[65%]"
        >

          <WorkSlider />

        </motion.div>


      </div>


      <Bulb />

    </div>
  );
};

export default Work;