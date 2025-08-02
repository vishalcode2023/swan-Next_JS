"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";

const mainVideos = [
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4310_ckojwy&profile=cld-default",
    description:
      "The  Cashew Color Sorter Machine is a sophisticated sorting device designed to enhance the quality of cashew nuts by accurately separating and grading them based on color, size, and quality. This machine is essential for cashew processing facilities, ensuring that only high-quality cashews are selected for packaging and distribution.",
  },
  {
    title: "",
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4312_lkteru&profile=cld-default",
    description:
      "The groundnuts Color Sorter Machine is a sophisticated sorting device designed to enhance the quality of groundnuts by accurately separating and grading them based on color, size, and quality. This machine is essential for groundnut processing facilities, ensuring that only high-quality groundnuts are selected for packaging and distribution.",
  },
  {
    title: "",
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4314_c8lvs0&profile=cld-default",
    description:
      "The Millet Color Sorter Machine is a sophisticated sorting device designed to enhance the quality of millet by accurately separating and grading them based on color, size, and quality. This machine is essential for millet processing facilities, ensuring that only high-quality millet is selected for packaging and distribution.",
  },
  {
    title: "",
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4313_tpakwb&profile=cld-default",
    description:
      "The Chilli Flakes Color Sorter Machine is a sophisticated sorting device designed to enhance the quality of chilli flakes by accurately separating and grading them based on color, size, and quality. This machine is essential for chilli flakes processing facilities, ensuring that only high-quality chilli flakes are selected for packaging and distribution.",
  },
  {
    title: "",
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4311_crfwru&profile=cld-default",
    description:
      "The Plastic Color Sorter Machine is a sophisticated sorting device designed to enhance the quality of plastic materials by accurately separating and grading them based on color, size, and quality. This machine is essential for plastic recycling or processing facilities, ensuring that only high-quality plastic is selected for reuse or distribution.",
  },
  {
    title:"",
    src:"https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4328_a6ccpj&profile=cld-default",
    description:"The Ragi Color Sorter Machine is a sophisticated sorting device designed to enhance the quality of ragi materials by accurately separating and grading them based on color, size, and quality. This machine is essential for ragi recycling or processing facilities, ensuring that only high-quality ragi is selected for reuse or distribution."
  },
  {
    title:"",
    src:"https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4329_fcgs3f&profile=cld-default",
    description:"The Friedgram Color Sorter Machine is a sophisticated sorting device designed to enhance the quality of friedgram materials by accurately separating and grading them based on color, size, and quality. This machine is essential for friedgram recycling or processing facilities, ensuring that only high-quality friedgram is selected for reuse or distribution."
  }
];

const extraVideos = [
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4315_trm6yf&profile=cld-default",
  },
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4319_t8qqva&profile=cld-default",
  },
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4317_os7its&profile=cld-default",
  },

  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4318_cxri46&profile=cld-default",
  },
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4322_z3qgtr&profile=cld-default",
  },
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4321_lghw2k&profile=cld-default",
  },
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4320_b9dxmr&profile=cld-default",
  },
  {
    src:"https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4327_hpiwyt&profile=cld-default",
  },
  {
    src:"https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4326_akxloo&profile=cld-default",
  }
];

const Page = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="min-h-screen px-6 py-16 text-gray-800">
        {/* Main Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-extrabold text-gray-800 mb-12"
        >
          Sorting Machine Videos – See Our Technology in Action
        </motion.h1>

        {/* Main Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
          {mainVideos.map((video, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <iframe
                  width="100%"
                  height="400px"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                ></iframe>
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold text-indigo-700">
                    {video.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Videos Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-gray-800 mb-10"
        >
          More Sorting Machine Videos
        </motion.h2>

        {/* Extra Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {extraVideos.map((video, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <iframe
                  width="100%"
                  height="400px"
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                ></iframe>
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-semibold text-indigo-700">
                    {video.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ChatBot />
      <AutoPopupChat />
      <Footerpage />
    </div>
  );
};

export default Page;
