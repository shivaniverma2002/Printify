import React from "react";
import { motion } from "framer-motion";

const Price = () => {
  // Slide-up animation for text elements 
  const fadeUp = {
    initial: { opacity: 0, y: 50 }, 
    whileInView: { opacity: 1, y: 0 }, 
    transition: { duration: 1.2, ease: "easeInOut" }, 
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-8 px-4 mt-[16rem]">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        {/* Left Section with Framer Motion */}
        <motion.div
          className="bg-[#3C3D37] text-white p-6 md:p-10 ml-4 md:ml-8 w-full md:w-2/3 rounded-3xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div>
            {/* Heading with Fade-up effect */}
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 mt-[3rem]"
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              transition={fadeUp.transition}
            >
              Make Money, Risk-
              <br />
              Free
            </motion.h2>

            {/* Subtext with Fade-up effect */}
            <motion.p
              className="text-lg md:text-xl text-white font-semibold mt-2 mb-6"
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              transition={{ ...fadeUp.transition, delay: 0.2 }} 
            >
              You pay for fulfillment only when you make a sale
            </motion.p>

            {/* Profit Box with Fade-up effect */}
            <motion.div
              className="bg-black w-full md:w-[450px] p-6 md:p-8 rounded shadow-md mb-3 flex flex-col items-start justify-center"
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              transition={{ ...fadeUp.transition, delay: 0.4 }} 
            >
              <p className="mb-4 text-lg">
                You sell a t-shirt{" "}
                <span className="font-bold float-right ml-[13rem]">$30</span>
              </p>
              <p className="mb-4 text-lg">
                You pay for its production{" "}
                <span className="font-bold float-right ml-[8rem]">$12</span>
              </p>
              <div className="w-full h-[1px] bg-white my-4"></div>
              <p className="mb-4 text-2xl font-bold text-green-500">
                Your profit{" "}
                <span className="font-bold float-right ml-[13rem]">$18</span>
              </p>
            </motion.div>
          </div>

          {/* Button with Fade-up effect */}
          <motion.div
            className="flex justify-star mt-2"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ ...fadeUp.transition, delay: 0.6 }} 
          >
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Click Me
            </button>
          </motion.div>

          {/* Text below button */}
          <motion.p
            className="text-white text-left mt-1"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ ...fadeUp.transition, delay: 0.8 }} // Fade in last
          >
            100% Free to use · 900+ Products · Largest print network
          </motion.p>
        </motion.div>

        {/* Right Section */}
        <div className="hidden lg:block md:w-1/3 relative -ml-0 lg:-ml-[11rem] -mt-[4rem]">
          <img
            src="https://img.freepik.com/premium-vector/hand-with-can-watering-money-tree-financial-growth-concept-vectot-illustration_194782-1569.jpg" // Replace with your image URL
            alt="Sample"
            className="w-full h-[700px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
