import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      name: "Rovet A. Voltaire",
      image:
        "https://img.freepik.com/free-photo/businesswoman-with-glasses-crossed-arms_1098-3347.jpg?w=996&t=st=1727079502~exp=1727080102~hmac=baecf192f6cbcd019a5e2d4252dbb1bd04d8c98ec9feb2e2c5c85c6dd8247911",
      rating: "⭐⭐⭐⭐⭐",
      comment:
        "Printify makes the process smooth, fast, and easy. It’s an excellent platform for my online business.",
    },
    {
      name: "Jane Smith",
      image:
        "https://www.shutterstock.com/image-photo/asian-business-man-confident-elegant-260nw-2103131423.jpg",
      rating: "⭐⭐⭐⭐",
      comment:
        "The platform offers great flexibility and variety. I love using Printify to scale my business.",
    },
    {
      name: "Sarah Lee",
      image:
        "https://www.shutterstock.com/image-photo/portrait-handsome-businessman-on-white-260nw-1664184724.jpg",
      rating: "⭐⭐⭐⭐⭐",
      comment:
        "Using Printify has helped me grow my online store beyond expectations. It's user-friendly and reliable.",
    },
    {
      name: "Mike Johnson",
      image:
        "https://img.freepik.com/free-photo/smiling-blonde-business-woman_171337-6294.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727049600&semt=ais_hybrid",
      rating: "⭐⭐⭐⭐⭐",
      comment:
        "The tools and support from Printify have been amazing. My business has flourished ever since I started using this platform.",
    },
  ];

  return (
    <>
      {/* Section with Heading */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Side - Heading */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight tracking-wide"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                Trusted by over 8M <br />
                sellers around the <br />
                world
              </motion.h1>
            </div>

            {/* Right Side - Paragraph */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-gray-600 text-lg">
                Whether you are just getting started or run an enterprise-level
                e-commerce business, we do everything we can to ensure a
                positive merchant experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto mb-[10rem]">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="p-4"
                initial={{ opacity: 0, y: -50 }} // Starts from the top
                whileInView={{ opacity: 1, y: 0 }} // Moves to its original position
                transition={{ duration: 1, ease: "easeOut" }} 
                whileHover={{ scale: 1.05 }} // Scale effect on hover
                whileTap={{ scale: 0.95 }} // Scale effect on tap
              >
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={review.image}
                    alt={`Person ${index + 1}`}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl text-green-500 font-semibold mb-2">
                    {review.name}
                  </h3>
                  <div className="text-yellow-500 mb-2">{review.rating}</div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* Decorative Triangle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-[2rem] mt-[2rem]">
          <div className="w-0 h-0 border-l-[100px] md:border-l-[450px] border-l-transparent border-r-[100px] md:border-r-[450px] border-r-transparent border-t-[150px] md:border-t-[300px] border-t-gray-100"></div>
        </div>
      </section>
    </>
  );
};

export default Review;
