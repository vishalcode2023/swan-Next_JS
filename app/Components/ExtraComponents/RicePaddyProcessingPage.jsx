"use client";

import React from "react";
import Image from "next/image"; // Using Next.js Image component for optimization
import { motion } from "framer-motion"; // For animations

const processingSteps = [
  "Paddy Cleaning",
  "Parboiling & Drying",
  "Dehusking",
  "Rice Bran Removal",
  "Whitening",
  "Polishing",
  "Grading",
  "Sorting & Packaging",
];

const products = [
  {
    name: "Paddy Pre-cleaner",
    image: "https://graintecindustries.com/wp-content/uploads/2025/04/PRE-CLEANER-1500-08-768x665.jpg", // Updated image URL
    link: "#", // Replace with actual product link
  },
  {
    name: "Vibro Classifier",
    image: "https://graintecindustries.com/wp-content/uploads/2025/05/GVCA-212-9000_00-01-768x489.jpg", // Placeholder image
    link: "#",
  },
  {
    name: "Vibro De-Stoner",
    image: "https://graintecindustries.com/wp-content/uploads/2025/01/GVDA-2D-120-9000_00-01-768x672.jpg", // Placeholder image
    link: "#",
  },
  {
    name: "Paddy Husker",
    image: "https://graintecindustries.com/wp-content/uploads/2025/01/SLP08481-768x768.jpg", // Placeholder image
    link: "#",
  },
  {
    name: "Rice Polisher",
    image: "https://graintecindustries.com/wp-content/uploads/2024/10/HUSK_ASPIRATOR-removebg-preview.png", // Placeholder image
    link: "#",
  },
  {
    name: "Color Sorter",
    image: "https://graintecindustries.com/wp-content/uploads/2025/01/Husker-Husse-02-768x555.jpg", // Placeholder image
    link: "#",
  },
  {
    name: "Paddy Husker",
    image: "https://graintecindustries.com/wp-content/uploads/2024/10/PADDY_SEPARATOR-removebg-preview.png", // Placeholder image
    link: "#",
  },
  {
    name: "Rice Polisher",
    image: "https://graintecindustries.com/wp-content/uploads/2025/01/Rice-Destoner-02-768x659.png", // Placeholder image
    link: "#",
  },
  {
    name: "Color Sorter",
    image: "https://graintecindustries.com/wp-content/uploads/2025/01/GTGA-6D-9000_00-01-768x987.jpg", // Placeholder image
    link: "#",
  },

  {
    name: "Paddy Husker",
    image: "https://graintecindustries.com/wp-content/uploads/2025/04/RICE-WHITENER-02-768x785.jpg", // Placeholder image
    link: "#",
  },
  {
    name: "Rice Polisher",
    image: "https://graintecindustries.com/wp-content/uploads/2025/01/Silky-Polisher-02-768x756.png", // Placeholder image
    link: "#",
  },
  {
    name: "Color Sorter",
    image: "https://graintecindustries.com/wp-content/uploads/2024/10/ROTARY_SIFTER-removebg-preview.png", // Placeholder image
    link: "#",
  },

  {
    name: "Paddy Husker",
    image: "https://graintecindustries.com/wp-content/uploads/2025/04/LENGTH-GRADER-03-768x432.jpg", // Placeholder image
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
    <div className="bg-gray-50 min-h-screen">
      {/* Main Processing Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold text-gray-00 mb-6 leading-tight">
              Advanced <span className="text-green-700">Grain Processing</span> Solutions
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6 leading-relaxed">
              At SwanSort Systems, we provide advanced solutions for the entire grain processing cycle.
              From initial cleaning to final packaging, our state-of-the-art equipment ensures high-quality,
              efficient production with minimal waste.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
              Our customizable systems are designed to maximize productivity while maintaining the integrity
              and appearance of your produce. With a focus on energy efficiency and sustainability,
              GrainTech offers reliable and innovative solutions tailored to meet the unique needs of your processing facility.
              Partner with us to enhance your operations and achieve the highest quality output.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Processing Steps:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                {processingSteps.map((step, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Images */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/600x400/D1D5DB/4B5563?text=Processed+Grain"
                alt="Processed Grain"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/600x400/D1D5DB/4B5563?text=Raw+Paddy"
                alt="Raw Paddy"
                width={600}
                height={600} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="sm:col-span-2 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/1200x600/D1D5DB/4B5563?text=Processing+Facility"
                alt="Processing Facility"
                width={1200}
                height={800} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

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
                <div className="relative w-full h-96"> {/* Increased height to h-96 */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain" // Changed to contain to prevent cropping
                    className="rounded-t-lg"
                  />
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
