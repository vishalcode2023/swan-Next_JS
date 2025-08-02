"use client";

import React from "react";
import Image from "next/image"; // Using Next.js Image component for optimization
import { motion } from "framer-motion"; // For animations

const processingSteps = [
  "Paddy Pre-cleaner",
  "Vibro Classifier",
  "Vibro De-Stoner",
  "Pneumatic Sheller",
  "Husk Aspirator",
  "Husk Separator",
  "Paddy Separator",
  "Rice De-Stoner",
  "Thick & Thin Grader",
  "Rice Whitener",
  "Rice Silky Polisher",
  "Rotary Sifter",
  "Length Grader",
  "128 Channel Color Sorter",
  "256 Channel Color Sorter",
  "320 Channel Color Sorter",
];

const products = [
  {
    name: "Paddy Pre-cleaner",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/04/PRE-CLEANER-1500-08-768x665.jpg", // Updated image URL
    link: "#", // Replace with actual product link
  },
  {
    name: "Vibro Classifier",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/05/GVCA-212-9000_00-01-768x489.jpg", // Placeholder image
    link: "#",
  },
  {
    name: "Vibro De-Stoner",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/GVDA-2D-120-9000_00-01-768x672.jpg", // Placeholder image
    link: "#",
  },
  {
    name: "Pneumatic Sheller",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/SLP08481-768x768.jpg", // Placeholder image
    link: "#",
  },
  {
    name: "Husk Aspirator",
    image:
      "https://graintecindustries.com/wp-content/uploads/2024/10/HUSK_ASPIRATOR-removebg-preview.png", // Placeholder image
    link: "#",
  },
  {
    name: "Husk Separator",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/Husker-Husse-02-768x555.jpg", // Placeholder image
    link: "#",
  },
  {
    name: "Paddy Separator",
    image:
      "https://graintecindustries.com/wp-content/uploads/2024/10/PADDY_SEPARATOR-removebg-preview.png", // Placeholder image
    link: "#",
  },
  {
    name: "Rice De-Stoner",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/Rice-Destoner-02-768x659.png", // Placeholder image
    link: "#",
  },
  {
    name: "Thick & Thin Grader",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/GTGA-6D-9000_00-01-768x987.jpg", // Placeholder image
    link: "#",
  },

  {
    name: "Rice Whitener",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/04/RICE-WHITENER-02-768x785.jpg", // Placeholder image
    link: "#",
  },
  {
    name: "Rice Polisher",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/01/Silky-Polisher-02-768x756.png", // Placeholder image
    link: "#",
  },
  {
    name: "Rice Silky Polisher",
    image:
      "https://graintecindustries.com/wp-content/uploads/2024/10/ROTARY_SIFTER-removebg-preview.png", // Placeholder image
    link: "#",
  },

  {
    name: "Rotary Sifter",
    image:
      "https://graintecindustries.com/wp-content/uploads/2025/04/LENGTH-GRADER-03-768x432.jpg", // Placeholder image
    link: "#",
  },

  {
    name: "Sorting Machine",
    image:
      "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875391/128_channel_2_chute_zwprka.jpg", // Placeholder image
    link: "#",
  },
];

const RicePaddyProcessingPage = () => {
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
    <div className="bg-gray-50 min-h-full">
      {/* Main Processing Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-sm"></section>

      {/* Products Showcase Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12"
          >
            Our <span className="text-blue-700">Specialized Machines</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-103 hover:shadow-xl"
              >
                <div className="relative w-full h-96">
                  {" "}
                  {/* Increased height to h-96 */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain" // Changed to contain to prevent cropping
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
    </div>
  );
};

export default RicePaddyProcessingPage;
