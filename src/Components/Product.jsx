import React from "react";
import { motion, useInView } from "framer-motion";

const images = {
  profits: "https://printify.com/pfh/assets/legacy/custom-products.png",
  scaling: "https://printify.com/pfh/assets/legacy/your-products.png",
  selection: "https://printify.com/pfh/assets/legacy/fullfillment.png",
};

const FeatureCard = ({ image, main_title, title, description }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-100 rounded-lg p-6 flex flex-col"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.img
        src={image}
        alt={title}
        className="h-[150px] w-[200px] mb-4"
        initial={{ width: 0 }}
        animate={isInView ? { width: "200px" } : {}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <h2 className="text-xl text-green-500 font-semibold mb-2">
        {main_title}
      </h2>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Product = () => {
  const refImage = React.useRef(null);
  const isImageInView = useInView(refImage, { triggerOnce: false });

  return (
    <>
      <section className="py-12 mb-[12rem] bg-gray-100">
        <div className="container mx-auto xl:px-[10rem] lg:px-[5rem] px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[6rem]">
            <FeatureCard
              image={images.profits}
              main_title="CREATE"
              title="Custom products"
              description="Easily add your designs to a wide range of products using our free tools"
            />
            <FeatureCard
              image={images.scaling}
              main_title="SELL"
              title="On your team"
              description="You choose the product, sale prices, and where to sell"
            />
            <FeatureCard
              image={images.selection}
              main_title="We Handle"
              title="Fulfillment"
              description="Once an order is placed, we automatically handle all the printing and delivery logistics"
            />
          </div>
        </div>

        {/* Triangle Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-[2rem] mt-[2rem] ">
          <div className="w-0 h-0 border-l-[80px] md:border-l-[300px] border-l-transparent border-r-[80px] md:border-r-[300px] border-r-transparent border-t-[150px] md:border-t-[300px] border-t-gray-100"></div>
        </div>
      </section>

      {/* Image section with dynamic */}
      <section className="display-cover">
        <motion.img
          ref={refImage}
          src="https://i0.wp.com/oguntolawale.us/wp-content/uploads/2024/01/printify.png?w=1437&ssl=1"
          alt="Cover"
          className="w-full"
          initial={{ scaleY: 0 }}
          animate={isImageInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </section>

      <div className="flex justify-center items-center rounded-2xl mb-[2rem]">
        <div className="relative w-[1000px] h-[150px] bg-gradient-to-r from-green-100 to-green-600 p-6 rounded-lg shadow-md flex flex-row items-center justify-between">
          <span className="text-green-700 text-2xl font-bold z-10 mx-2">
            Are you a large business looking for <br />
            custom solutions?
          </span>
          <button className="bg-white text-black hover:text-green-300 font-semibold py-2 px-4 rounded-lg shadow-lg z-10 me-[2rem]">
            Click Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
