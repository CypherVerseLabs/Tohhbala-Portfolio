import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30 py-36">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-12">

          {/* text */}
          <div className="xl:w-[40%] text-center xl:text-left mb-12 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-6"
            >
              Let's Build Your{" "}
              <span className="text-accent">
                Solution.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[450px] mx-auto xl:mx-0 text-white/70"
            >
              Have a business challenge, outdated process, or idea that needs
              technology behind it?

              <br />
              <br />

              Whether you need custom software, automation, a customer portal,
              a SaaS platform, or a modern digital solution, let's discuss what
              your business needs and build the right approach.
            </motion.p>
          </div>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="What can we help you build?"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />

            <textarea
              name="message"
              placeholder="Tell us about your business, your challenge, or the solution you need..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />

            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Start a Conversation
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>

          </motion.form>

        </div>
      </div>
    </div>
  );
};

export default Contact;