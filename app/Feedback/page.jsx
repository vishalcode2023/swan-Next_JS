"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Footerpage from "../Components/LandingPages/Footerpage";
import Navbar from "../Components/NavbarLinks/Navbar";
import {
  FaLightbulb,
  FaUserCheck,
  FaCheckCircle,
  FaLeaf,
  FaCamera,
  FaMicrochip,
  FaEye,
  FaBolt,
  FaCogs,
  FaSort,
  FaGlobe,
  FaAward,
  FaHandshake,
} from "react-icons/fa";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";
import VideoSection from "../Components/LandingPages/VideoSection";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    position: "Farmer, Punjab",
    comment:
      "Swan sorting machines are incredibly accurate and reliable. They've made our grain selection process efficient!",
  },
  {
    name: "Anjali Mehta",
    position: "Rice Mill Owner, Karnataka",
    comment:
      "The after-sales support and performance of the Swan sorter is unmatched. It's truly transformed our operations.",
  },
  {
    name: "Vikram Desai",
    position: "Business Owner, Gujarat",
    comment:
      "We saved a lot of time and labor using Swan’s AI-based sorting system. The ROI is unbelievable!",
  },
  {
    name: "Sakshi Patel",
    position: "Exporter, Maharashtra",
    comment:
      "Truly impressed with the technology and the team behind Swan. Highly recommended!",
  },
];

const reviewVideos = [
  "/videos/review1.mp4",
  "/videos/review2.mp4",
  "/videos/review3.mp4",
];

const highlights = [
  {
    icon: <FaMicrochip />,
    title: "AI-Powered Precision",
    desc: "Our machines use cutting-edge AI to ensure the highest accuracy in sorting.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Trusted by Thousands",
    desc: "Farmers and industries across India rely on Swan for quality assurance.",
  },
  {
    icon: <FaAward />,
    title: "Award-Winning Innovation",
    desc: "Recognized nationally for excellence in agricultural automation.",
  },
];

const extraVideos = [
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4309_ygcbkn&profile=cld-default",
  },
  {
    src: "https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=WhatsApp_Video_2025-07-30_at_1.28.35_PM_gne0eq&profile=cld-default",
  },
];

const installationSteps = [
  {
    img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754111912/WhatsApp_Image_2025-08-02_at_9.11.23_AM_finsbd.jpg",
  },
  {
    img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754111908/WhatsApp_Image_2025-08-02_at_9.11.23_AM_2_jlwskc.jpg",
  },
  {
    img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754111907/WhatsApp_Image_2025-08-02_at_9.11.23_AM_1_pfwnnc.jpg",
  },
  {
    img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754111907/WhatsApp_Image_2025-08-02_at_9.11.24_AM_gvrbcl.jpg",
  },
  {
    img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754111916/WhatsApp_Image_2025-08-02_at_9.11.24_AM_1_seacnp.jpg",
  },
];

const FeedbackPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen px-4 py-16 sm:px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-extrabold text-gray-800 mb-10"
        >
          Shaping Quality, Sorting Success Customer Feedback That Speaks Volumes
        </motion.h2>

        {/* Extra Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
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
                  title={`Video ${idx + 1}`}
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mb-24 my-16">
          <h3 className=" md:text-5xl font-extrabold text-center text-gray-800 mb-12">
            Setting the Standard Successful Installations Across the Industry
          </h3>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
            {installationSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-64 mb-4 mx-auto">
                  <Image
                    src={step.img}
                    alt={`Installation Step ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-extrabold text-gray-800">
            Hear from Our Happy Customers
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            From farmers to exporters, Swan’s smart sorting solutions have
            transformed the agri-processing journey across India.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-20">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  <FaHandshake className="text-4xl text-green-500 mx-auto mb-4" />
                  <p className="text-gray-600 italic mb-3">"{item.comment}"</p>
                  <p className="font-semibold text-gray-900 text-lg">
                    — {item.name}
                  </p>
                  <p className="text-sm text-indigo-600">{item.position}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="max-w-6xl mx-auto mb-24">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose SwanSorter Systems?
          </h3>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-2xl text-center shadow-md border hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl text-indigo-600 mb-4 mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ContactSidebar />
      <ChatBot />
      <AutoPopupChat />
      <Footerpage />
    </div>
  );
};

export default FeedbackPage;
