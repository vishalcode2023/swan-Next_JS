"use client";

import React from "react";
import Image from "next/image"; // Using Next.js Image component for optimization
import { motion } from "framer-motion"; // For animations
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";

const pulsesProducts = [
  {
    name: "Drum Sieve",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/GDSB-9000_00-01-768x756.jpg", // Placeholder image
  },
  {
    name: "Grain Pre Cleaner",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/04/PRE-CLEANER-1500-08-768x665.jpg", // Placeholder image
  },
  {
    name: "Vibro Classifier",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/GVCA-212-9000_00-01-768x489.jpg", // Placeholder image
  },
  {
    name: "De-Stoner",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/03/SLP08733-768x768.jpg", // Placeholder image
  },
  {
    name: "Vibro De-Stoner",
    image:
      "https://graintecindustries.com/wp-content/uploads/2024/10/VIBRO_DE-STONER-removebg-preview.png", // Placeholder image
  },
  {
    name: "Mud Ball Separator",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/IMG_3690_01-732x1024.jpg", // Placeholder image
  },
  {
    name: "Gravity Separator",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/IMG_3749-768x432.jpg", // Placeholder image
  },
  {
    name: "Pulse De Huller",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/GHLC-D-9001_00-01-768x804.jpg", // Placeholder image
  },
  {
    name: "Vibro Aspirator",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/Vibro_Aspirator_02-removebg-preview.png", // Placeholder image
  },
  {
    name: "Fatka Splitter",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/04/Fatka-02-768x758.jpg", // Placeholder image
  },
  {
    name: "Pulse De Huller",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/GHLC-D-9001_00-01-768x804.jpg", // Placeholder image
  },
  {
    name: "Chakki Splitter",
    image:
      "http://graintecindustries.com/wp-content/uploads/2025/04/CHAKKI-03-768x987.jpg", // Placeholder image
  },
  {
    name: "Dal Buff Polisher",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/04/Buff_Polisher-07-768x779.jpg", // Placeholder image
  },
];

const page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white ">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-700 mb-6 leading-tight"
          >
            Pulses <span className="text-gray-700 text-center">Processing</span>
          </motion.h1>
          <p className="text-lg text-gray-700 leading-relaxed p-6 rounded-lg ">
            Graintec delivers advanced, energy-efficient solutions for the
            complete pulses processing cycle — from cleaning to packaging. With
            SwanSorting technology and state-of-the-art equipment, we ensure
            high yield, top quality, and sustainable performance. Custom-built
            to meet your needs, Graintec systems enhance productivity and
            profitability in your Dal/Pulses processing unit
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-700 text-center mb-12"
          >
            Our <span className="text-gray-700">Pulses Machines</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pulsesProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-103 hover:shadow-xl border border-gray-200"
              >
                <div className="relative w-full h-60 sm:h-72">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain" // Changed to contain to ensure full image visibility
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footerpage />
    </div>
  );
};

export default page;
