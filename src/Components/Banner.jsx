import React, { useState, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { motion, useInView } from "framer-motion";

const Banner = () => {
  const images = [
    "https://img.freepik.com/premium-photo/boy-with-backpack-cartoon-style-single-white-background-ai-generated_547674-3437.jpg",
    "https://img.freepik.com/free-vector/happy-boy-waving-hand_1308-34851.jpg?w=360&t=st=1727095535~exp=1727096135~hmac=17d1be757bbec7e3e62be459aa80d310087587efb4bb7590026fbaa124902b3d",
    "https://img.freepik.com/free-vector/chinese-girl-waving-hand-cartoon-character_1308-78257.jpg?w=740&t=st=1727095558~exp=1727096158~hmac=14f6eb03684f589e7e07a80aac6e39d392c95e066403260c1f02d011cb97e380",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="bg-gray-50 py-12" ref={ref}>
      <div className="container mx-auto xl:px-[10rem] lg:px-[5rem] px-5 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Create and Sell
            <br />
            <span className="mt-4 block">Custom Products</span>
          </h1>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <IoMdCheckmark className="h-6 w-6 text-green-500 mr-2" />
              <span className="font-semibold text-lg">100% Free to Use</span>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark className="h-6 w-6 text-green-500 mr-2" />
              <span className="font-semibold text-lg">
                900+ High-Quality Products
              </span>
            </li>
            <li className="flex items-center">
              <IoMdCheckmark className="h-6 w-6 text-green-500 mr-2" />
              <span className="font-semibold text-lg">
                Largest Global Print Network
              </span>
            </li>
          </ul>
          <div className="flex space-x-6 mt-6">
            <a
              href="#"
              className="bg-green-500 text-white py-3 px-8 rounded-md shadow-md hover:bg-green-600 transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#"
              className="bg-white text-green-500 border border-green-500 py-3 px-8 rounded-md shadow-md hover:bg-green-100 transition duration-300"
            >
              How It Works
            </a>
          </div>
          <h2 className="text-green-500 text-extrabold text-lg mt-[1rem]">
            Trusted by over 8M sellers around the world
          </h2>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:px-6 relative mt-[2rem]"
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-auto relative overflow-hidden">
            <img
              src="https://printify.com/pfh/assets/animations/images/img_5.png" // Full-size background image
              alt="Custom Products"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="w-40 h-40 overflow-hidden rounded-lg shadow-lg">
                <motion.img
                  key={images[currentIndex]} // Use key to trigger re-render
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="w-full h-full object-contain"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
