import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-8 xl:mb-0 xl:max-w-[400px]"
          >
            Trusted by{" "}
            <span className="text-accent">Businesses</span>
            <br />
            That Need Real Solutions.
          </motion.h2>

          {/* slider */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <TestimonialSlider />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;