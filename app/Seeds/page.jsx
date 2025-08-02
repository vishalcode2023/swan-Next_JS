"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import ContactForm from "../Components/Crad/ContactForm";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import MaterialPanel from "../Components/LandingPages/Categories";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";


const solutions = [
  {
    id: "Agricultural Products Sorting",
    title: "Agricultural Products Sorting",
    image: "/photo-1501430654243-c934cec2e1c0.avif",
    icon: "🌾",
    items: [
      {
        name: "Seeds",
        images: [
          {
            src: "/Seedsimages/Rye.webp",
            title: "Rye",
            details: {
              points: [
                "Sorting ensures uniform kernel size and color",
                "Removes impurities like husks and stones",
                "Enhances value for flour and whiskey production",
                "Reduces processing downtime and machine wear",
                "Improves cleanliness for better packaging appeal"
              ],
              description: "Rye is a cereal grain known for its distinct flavor and is commonly used in breads like rye bread and crispbread.",
            },
          },
          {
            src: "/Seedsimages/Wheat.webp",
            title: "Wheat",
            details: {
              points: [
                "Color sorting increases milling efficiency",
                "Removes underdeveloped and damaged grains",
                "Improves consistency in baking and food processing",
                "Boosts export value with quality certification",
                "Reduces risk of fungal or pest contamination"
              ],
              description: "Wheat is one of the most widely grown cereal grains, crucial to diets around the world.",
            },
          },
          {
            src: "/Seedsimages/barley.webp",
            title: "Barley",
            details: {
              points: [
                "Sorting removes moldy or off-color grains",
                "Improves brewing and food-grade quality",
                "Increases shelf life by eliminating contaminants",
                "Delivers uniform batches for processing",
                "Boosts reliability in industrial-scale food production"
              ],
              description: "Barley is a chewy grain with a nutty flavor, popular in health foods and beverages.",
            },
          },
          {
            src: "/Seedsimages/oat-background.webp",
            title: "Oat",
            details: {
              points: [
                "Removes husks, dust, and broken kernels",
                "Ensures visual consistency for rolled oats",
                "Improves processing efficiency in granola and cereals",
                "Reduces spoilage risk by eliminating foreign particles",
                "Increases trust in health-conscious markets"
              ],
              description: "Oats are whole grains cherished for their heart-healthy benefits and versatility in meals.",
            },
          },
          {
            src: "/Seedsimages/Sunflower_(Helianthus_annuus)_seeds.webp",
            title: "Sunflower",
            details: {
              points: [
                "Precision sorting for oil-grade vs snack-grade seeds",
                "Removes husk, shells, and undersized seeds",
                "Boosts extraction yield and oil clarity",
                "Enhances retail appearance for roasted seeds",
                "Reduces customer complaints and returns"
              ],
              description: "Sunflower seeds are flavorful and nutrient-dense, often eaten roasted or used for sunflower oil.",
            },
          },
          {
            src: "/Seedsimages/corn.webp",
            title: "Corn",
            details: {
              points: [
                "Sorting separates cracked and insect-damaged kernels",
                "Improves performance in snack and cereal production",
                "Reduces aflatoxin risk in animal feed applications",
                "Improves aesthetics in frozen or canned corn products",
                "Increases batch consistency in processed foods"
              ],
              description: "Corn kernels are versatile grains that form the basis for numerous global cuisines and products.",
            },
          },
          {
            src: "/Seedsimages/brown-flax-seeds.webp",
            title: "Flax",
            details: {
              points: [
                "Removes foreign matter and discolored seeds",
                "Ensures purity for health and organic markets",
                "Enhances omega-3 rich oil yield",
                "Reduces grinding waste in powder/flour processing",
                "Boosts brand credibility for natural supplements"
              ],
              description: "Flax seeds are tiny powerhouses of nutrition with high fiber and essential fatty acids.",
            },
          },
          {
            src: "/Seedsimages/360_F_69517650_puotOHAWs5rTQ5Nj4LzVkBMPk8r0V4nB.webp",
            title: "Poppy",
            details: {
              points: [
                "Sorting ensures vibrant, uniform seed appearance",
                "Removes contaminants to meet food-grade standards",
                "Improves bakery product consistency",
                "Ideal for export with traceable quality control",
                "Minimizes manual inspection in packaging units"
              ],
              description: "Poppy seeds are tiny oilseeds with a nutty flavor, often sprinkled on bread and pastries.",
            },
          },
          {
            src: "/Seedsimages/360_F_112163043_aSlIHBQWbKFHK2FlJkSStv1ImOfPDkNd.webp",
            title: "Millet",
            details: {
              points: [
                "Removes stones, dust, and broken grains",
                "Supports premium gluten-free product lines",
                "Improves efficiency in puffed or boiled processing",
                "Enhances shelf appeal in health food packaging",
                "Reduces spoilage and improves shelf stability"
              ],
              description: "Millet is an ancient grain valued for its versatility and high nutritional profile.",
            },
          },
        ],
         recommended: [
          {
            image: "/img1.jpeg",
            title: "swan 300 belt type ms frame",
            link: "/Products/pro1",
          },
          {
            image: "/img2.jpeg",
            title: "swan 300 mm belt type",
            link: "/Products/pro12",
          },
          {
            image: "/img4.jpeg",
            title: "swan 5 Chute 320 Channel",
            link: "/Products/pro5",
          },
          {
            image: "/img5.jpeg",
            title: "swan 5 chute 320 channel box type",
            link: "/Products/pro4",
          },
          {
            image: "/img6.jpeg",
            title: "Swan 3 chute 192 channel",
            link: "/Products/pro3",
          },
        ],
      }
    ],
  },
];


const Page = () => {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);
  const [selectedItem, setSelectedItem] = useState(selectedSolution.items[0]);
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const clearImage = () => {
    setSelectedImage(null);
  };

  // New function to get relevant items for the "MultiGrains, Spices..." section
  const getCategoryItems = (categoryName) => {
    if (selectedSolution.id !== "agriculture") return [];

    const categoryMappings = {
      MultiGrains: ["Wheat", "Rice", "Grain"], // Corrected to include 'Grain'
      Spices: [
        "Pepper",
        "Clove",
        "Cardamom",
        "Chilli",
        "Coriander seeds",
        "Jeera",
        "Fennel Seeds",
      ],
      "All Types Of Pulses": [
        "Toor Dal",
        "Moong Dal",
        "Masoor Dal",
        "Chana Dal",
        "Green Moong",
        "Toor Whole",
        "Urad Dal",
        "Urad Dal Whole",
        "Fried Gram",
        "Chick Peas",
        "Mung Bean",
        "Peas",
        "SoyBean",
      ], //Added Peas and Soyabean
      Seeds: [
        "Poppy Seeds",
        "Mustard",
        "Tamarind Seeds",
        "Watermelon Seeds",
        "Sesame Seeds",
        "Coffee Beans",
        "Rajgira Seeds (Ramdana seeds)",
        "Rice Seeds",
        "Wheat Seeds",
        "Other Seeds",
        "Flaxseed",
        "Niger seeds",
        "Sunflower Seeds",
        "Pumpkin seeds",
        "Jowar grain",
        "Ragi",
        "Barley",
        "Betel Nut",
      ], //Added Barley and Betel Nut
    };

    const itemNames = categoryMappings[categoryName] || [];
    return selectedSolution.items.filter((item) =>
      itemNames.includes(item.name)
    );
  };

  // Define categories for the new section
  const categories = ["MultiGrains", "Spices", "All Types Of Pulses", "Seeds"];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 text-gray-900">
        {/* Top Grid - Solution Selection */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((sol) => (
            <motion.div
              key={sol.id}
              className={`p-4 bg-white shadow-md rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 ${
                selectedSolution.id === sol.id ? "border-2 border-teal-500" : ""
              }`}
              onClick={() => {
                setSelectedSolution(sol);
                setSelectedItem(sol.items[0]);
                setSelectedImage(null); // Clear selected image when switching solutions
              }}
            >
              <Image
                src={sol.image}
                alt={sol.title}
                width={220}
                height={130}
                className="rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{sol.title}</h3>
              <div className="text-3xl mt-2">{sol.icon}</div>
            </motion.div>
          ))}
        </div> */}

        {/* Lower Section */}
        <motion.div
          key={selectedSolution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
        >
          {/* Item Selector */}
          {/* <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">
            Spices Materials
            </h2>
            <div className="space-y-2">
              {selectedSolution.items.map((item) => (
                <button
                  key={item.name}
                  className={`block w-full p-3 text-left shadow rounded-md transition ${
                    selectedItem.name === item.name
                      ? "bg-teal-500 text-white font-bold"
                      : "bg-white text-gray-900 hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedItem(item);
                    setSelectedImage(null); // Clear selected image when switching items
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div> */}

          {/* Images Section */}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-center mb-4">
              {selectedItem.name} Images
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {selectedItem.images.map((img, index) => {
                const isClickable =
                  img.details &&
                  img.details.points &&
                  img.details.points.length > 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`text-center ${
                      isClickable ? "cursor-pointer" : ""
                    }`} // Make clickable
                    onClick={
                      isClickable ? () => handleImageClick(img) : undefined
                    } // Handle click
                  >
                    <Image
                      src={img.src}
                      alt={selectedItem.name}
                      width={250}
                      height={180}
                      className="rounded-lg object-cover shadow-md h-34"
                    />
                    <p className="text-sm mt-2 font-medium">{img.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Recommended Machines Section */}
        <div className="mt-14">
          <h2 className="text-4xl font-bold text-center mb-2 text-[#8E54FF]">
            Recommended Sorting Machines
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Advanced technology built for precision and productivity — tailored
            for {selectedItem.name}.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(selectedItem.recommended || []).map((rec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <Image
                  src={rec.image}
                  alt={rec.title}
                  width={250}
                  height={150}
                  className="rounded-md h-72 object-contain m-auto"
                />
                <h3 className="mt-3 font-semibold text-lg">{rec.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Details Modal */}
        <AnimatePresence>
          {selectedImage && selectedImage.details && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md" // Full screen, centered, blurred
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 w-full h-full overflow-y-auto" // Full width and height, scrollable
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedImage.title} Details
                  </h2>
                  <button
                    onClick={clearImage}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                  <div className="lg:w-1/2">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      width={800} // Increased size
                      height={600}
                      className="rounded-lg object-contain w-full h-auto" // Make sure image scales within container
                    />
                    <p className="text-gray-700 mt-4">
                      {selectedImage.details.description}
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-lg font-semibold mb-2">Key Points</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedImage.details.points.map((point, index) => (
                        <li key={index} className="text-gray-700">
                          {point}
                        </li>
                      ))}
                    </ul>
                    {/* Recommended Products */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-2">
                        Recommended Products
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(selectedItem.recommended || []).map((rec, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-100 rounded-md p-2 flex items-center gap-2"
                          >
                            <Image
                              src={rec.image}
                              alt={rec.title}
                              width={80}
                              height={60}
                              className="rounded-md object-cover h-16 w-20"
                            />
                            <p className="text-sm font-medium">{rec.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <MaterialPanel />
      </div>
      {/* Contact Form & Footer */}
      <div>
        <ContactSidebar/>
        <ChatBot />
        <AutoPopupChat />
        <Footerpage />
      </div>
    </div>
  );
};

export default Page;




