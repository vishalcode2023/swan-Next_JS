import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaBrain,
  FaLightbulb,
  FaWifi,
  FaCrosshairs,
  FaSlidersH,
  FaMagnet,
} from "react-icons/fa";
import Image from "next/image";

// Technology Data (Includes Dynamic Images)
const techData = [
  {
    icon: FaBrain,
    title: "AI",
    content: "AI-powered sorting for higher precision and efficiency.",
    image:
      "/ai-technology-microchip-background-digital-transformation-concept_53876-124669.webp",
  },
  {
    icon: FaCamera,
    title: "Cameras",
    content: "High-resolution cameras for accurate material detection.",
    image: "/uvc-ai-pro-2.webp",
  },
  {
    icon: FaMagnet,
    title: "Air Pressure",
    content: "Efficient sorting through advanced air pressure technology for high-speed separation.",
    image: "https://imgs.search.brave.com/BoYUKTCQl-jo3v-Sw4c2wPm1N5ckyPHulVsi1Rlm9W0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDcw/OTE5MTUwL3Bob3Rv/L3ByZXNzdXJlLWdh/dWdlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1aMzNOZ3Jl/WTRCc256bXFMLXVF/N014T2dnQ2NiZGpw/LWx1NzdUcjJ3blhj/PQ",
  },  
  {
    icon: FaLightbulb,
    title: "Lighting",
    content: "Enhanced lighting for better material recognition.",
    image: "/feature-sorter-lens.webp",
  },
  {
    icon: FaWifi,
    title: "Remote Control",
    content: "Monitor and control operations remotely.",
    image: "/RS1500.webp",
  },
  {
    icon: FaCrosshairs,
    title: "Compressor Power",
    content: "Utilizing high-powered compressors for accurate defect detection and enhanced sorting precision.",
    image: "/feature-sorter-sniper-system.jpg",
  },  
  {
    icon: FaSlidersH,
    title: "User Interface",
    content: "Intuitive UI for seamless operation.",
    image: "https://imgs.search.brave.com/eTXWZt3VyGt2UIt2tUevieyNaws_G_K_K4ZjiVqbr6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/NjcwMjY5NC9waG90/by9kZXNpZ25lcnMt/ZHJhd2luZy13ZWJz/aXRlLXV4LWFwcC1k/ZXZlbG9wbWVudC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bk15QnhadUExOUxm/b3dfZWlVcFoxVUFn/aWJCNFZKZ1I2dF83/X2UtdHlNYz0",
  },
];

const AiSorting = () => {
  const [activeTab, setActiveTab] = useState("AI");

  const activeTech = techData.find((tech) => tech.title === activeTab);

  return (
    <motion.div
      className="w-full bg-white text-gray-900 py-16 px-6 rounded-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.h2
        className="md:text-4xl font-bold text-center mb-6 leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our solutions are based on{" "}
        <span className="bg-gradient-to-r from-green-400 to-blue-400 rounded-xl text-white px-3 py-1 inline-block">
          Modern technology
        </span>
      </motion.h2>

      {/* Tabs */}
      <motion.div
        className="flex flex-wrap md:flex-row flex-col justify-center gap-3 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {techData.map((tech) => (
          <motion.button
            key={tech.title}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all w-full md:w-auto ${
              activeTab === tech.title
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tech.title)}
            whileHover={{ scale: 1.1 }}
          >
            <tech.icon className="text-lg" />
            {tech.title}
          </motion.button>
        ))}
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="bg-gray-100 rounded-lg p-6 flex flex-col lg:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Left Text */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">
            {activeTab} Powered System
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            {activeTech?.content}
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src={activeTech?.image || "/images/default.jpg"}
            alt={activeTab}
            width={500}
            height={300}
            className="rounded-lg h-96 object-center transition-opacity duration-500 ease-in-out"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AiSorting;
