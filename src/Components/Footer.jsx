import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaReddit,
} from "react-icons/fa";

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto flex flex-col justify-between px-4 md:px-10 lg:px-20">
        {/* Top Section */}
        <motion.div
          className="flex justify-between items-center mb-8"
          {...fadeInUp}
        >
          {/* Left Side: Logo */}
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIiPxU8EzDgDb4DeNSMxatoSE5q_1vIZZXw&s"
              alt="Printify Logo"
              className="h-8"
            />
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex space-x-4">
            {[
              { icon: FaFacebook, url: "https://www.facebook.com/" },
              { icon: FaInstagram, url: "https://www.instagram.com/" },
              { icon: FaLinkedin, url: "https://www.linkedin.com/" },
              { icon: FaTwitter, url: "https://twitter.com/" },
              { icon: FaYoutube, url: "https://www.youtube.com/" },
              { icon: FaTiktok, url: "https://www.tiktok.com/" },
              { icon: FaReddit, url: "https://www.reddit.com/" },
            ].map(({ icon: Icon, url }) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-8 w-8 text-green-600 hover:text-green-500" />
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6"
          {...fadeInUp}
        >
          {/* Integrations Section */}
          <div>
            <h3 className="font-bold mb-5">Integrations</h3>
            <ul className="space-y-1">
              {[
                "Shopify",
                "Etsy",
                "eBay",
                "Amazon",
                "TikTok Shop",
                "PrestaShop",
                "BigCommerce",
                "Wix",
                "WooCommerce",
                "Squarespace",
                "Printify API",
                "Printify Pop-Up Store",
                "Shutterstock",
              ].map((item) => (
                <li key={item} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Discover Section */}
          <div>
            <h3 className="font-bold mb-5">Discover</h3>
            <ul className="space-y-1">
              {[
                "Blog",
                "Guides",
                "Products",
                "Etsy print-on-demand",
                "Shopify print-on-demand",
                "Woocommerce print-on-demand",
                "Wix print-on-demand",
                "Squarespace print-on-demand",
                "Make Your Own Shirt",
                "Brands",
                "Pricing",
                "Shipping Rates",
                "Mockup Generator",
              ].map((item) => (
                <li key={item} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Start Selling Section */}
          <div>
            <h3 className="font-bold mb-5">Start Selling</h3>
            <ul className="space-y-1">
              {[
                "Custom T-shirts",
                "Custom Hoodies",
                "Custom Mugs",
                "Custom Socks",
                "Custom Backpacks",
                "Custom Branding",
                "Sell on Etsy",
                "Sell on Social Media",
                "Free T-shirt Designs",
                "Custom Products",
                "Custom All-Over-Print Hoodies",
                "Start a Clothing Line",
                "Start POD Business",
                "Bulk Orders",
                "Transferring To Printify",
              ].map((item) => (
                <li key={item} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Printify Section */}
          <div>
            <h3 className="font-bold mb-5">Printify</h3>
            <ul className="space-y-1">
              {[
                "Print on Demand",
                "Print Providers",
                "Experts Program",
                "Printify Express Delivery",
                "Become a Partner",
                "About",
                "Printify Quality Promise",
                "Jobs",
                "Webinars",
                "Printing Profits Podcast",
                "Contact Us",
                "Affiliate",
                "Contact Sales",
                "POD Glossary",
                "Network Fulfillment Status",
                "Merchant Protection",
                "Sitemap",
              ].map((item) => (
                <li key={item} className="text-gray-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        
        <div className="bg-gray-100 py-6 text-center">
          <motion.p {...fadeInUp} className="text-gray-600">
            Intellectual Property Policy | Terms of Service | Privacy Policy |
            Security
          </motion.p>
          <motion.p {...fadeInUp} className="text-gray-600 mt-2">
            © 2024 Printify, Inc. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
