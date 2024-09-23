import React from "react";
import { motion, useInView } from "framer-motion";

const FeatureCard = ({ image, title, description, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg p-6 flex flex-col"
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
    >
      <img
        src={image}
        alt={title}
        className="h-[150px] w-[200px] rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Quality = () => {
  const images = {
    profits: "https://printify.com/pfh/assets/legacy/higher-profits.svg",
    scaling: "https://printify.com/pfh/assets/legacy/robust-scaling.svg",
    selection: "https://printify.com/pfh/assets/legacy/best-selection.svg",
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <section className="py-12 mb-[10rem] bg-white">
      <div className="container mx-auto xl:px-[10rem] lg:px-[5rem] px-5">
        {/* Dynamic Image Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              image: images.profits,
              title: "Higher Profits",
              description:
                "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
            },
            {
              image: images.scaling,
              title: "Robust Scaling",
              description:
                "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
            },
            {
              image: images.selection,
              title: "Best Selection",
              description:
                "With 900+ products and top quality brands, you can choose the best products for your business.",
            },
          ].map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
