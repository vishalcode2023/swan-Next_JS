// "use client";

// import React, { useState, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Marquee from "react-fast-marquee";

// const TechnologyPage = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const opacityText = useTransform(scrollYProgress, [0, 1], [0, 1]);
//   const translateYText = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
//   const videoScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

//   // ✅ Iframe Array and State.  Use video IDs, not full URLs.
//     const videoIds = [ // Example: YouTube video ID
//         "hWz0s3iwPXg",
//         "TclxgUBZiN0",
//     ];
//   const [videoIndex, setVideoIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const nextVideo = () => {
//     setVideoIndex((prev) => (prev + 1) % videoIds.length);
//   };

//   const prevVideo = () => {
//     setVideoIndex((prev) => (prev === 0 ? videoIds.length - 1 : prev - 1));
//   };

//     // Function to construct YouTube URL from ID
//     const getYouTubeUrl = (videoId) => `https://www.youtube.com/embed/${videoId}`;

//   // Open and close modal
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div
//       ref={ref}
//       className="w-full min-h-full bg-gradient-to-r from-gray-100 to-white px-6 pt-16"
//     >
//       {/* 👇 Absolute Marquee Overlay */}
//       <div className="relative w-full z-10">
//         <Marquee speed={50} pauseOnHover={true} gradient={false}>
//           <div className="flex items-center gap-8 px-4">
//             {[
// "/photo-1594900799266-0e56587ba586.avif",
// "/photo-1508061253366-f7da158b6d46.avif",
// "/photo-1508061235804-9436954f042f.avif",
// "/photo-1508061253366-f7da158b6d46.avif",
// "/photo-1567080586917-e6ab6aa0df85.avif",
// "/photo-1580425922682-cd96db9af39d.avif",
// "/photo-1574323347407-f5e1ad6d020b (1).avif",
// "/photo-1580425922682-cd96db9af39d.avif",
// "/photo-1523312727315-7c6ae09c3d09.avif",
// "/photo-1567080586917-e6ab6aa0df85.avif",
// "/photo-1596564823703-d28706a620e8.avif",
// "/photo-1574323347407-f5e1ad6d020b (1).avif",
// "/photo-1523312727315-7c6ae09c3d09.avif",
// "/photo-1523312727315-7c6ae09c3d09.avif",
// "/photo-1574323347407-f5e1ad6d020b (1).avif",
// "/photo-1580425922682-cd96db9af39d.avif",
// "/photo-1523312727315-7c6ae09c3d09.avif",
// "/photo-1567080586917-e6ab6aa0df85.avif",
// "/photo-1596564823703-d28706a620e8.avif",
// "/photo-1574323347407-f5e1ad6d020b (1).avif",
// "/photo-1523312727315-7c6ae09c3d09.avif",
//             ].map((src, index) => (
//               <img
//                 key={index}
//                 src={src}
//                 alt={`Grain ${index}`}
//                 className="h-16 w-16 object-cover rounded-full"
//               />
//             ))}
//           </div>
//         </Marquee>
//       </div>

//       {/* Heading */}
//       <motion.h1
//         className="text-3xl sm:text-5xl my-10 font-bold leading-tight text-gray-800 text-center"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         Unleash the Power of
//         <span className="mx-5 bg-gradient-to-r from-green-400 to-blue-400 px-2 text-white rounded-lg block sm:inline">
//           AI Faster Growth
//         </span>
//         <span> Smarter Decisions</span> Limitless Potential.
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         className="mt-4 text-gray-600 text-lg sm:text-xl text-center"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         Transform your business with AI-powered solutions designed for speed and
//         precision.
//       </motion.p>

//       <div className="w-[90%] m-auto h-full flex flex-wrap gap-4 md:gap-6">
//         {/* ✅ Iframe Section with Arrows */}
//         <motion.div
//           className="video w-full h-full md:w-[48%] md:my-10 my-5 relative"
//           style={{ scale: videoScale }}
//         >
//           <iframe
//             width="100%"
//             height="315" //  You can adjust the height as needed
//             src={getYouTubeUrl(videoIds[videoIndex])}
//             title={`Video ${videoIndex + 1}`}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//             className="rounded-3xl"
//           ></iframe>

//           {/* ⬅️ Left Arrow */}
//           <button
//             onClick={prevVideo}
//             className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
//           >
//             <ChevronLeft size={24} />
//           </button>

//           {/* ➡️ Right Arrow */}
//           <button
//             onClick={nextVideo}
//             className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </motion.div>

//         {/* Right Side Content */}
//         <div className="right w-full md:w-[48%] h-full flex flex-col justify-center md:my-20 px-4 md:px-0">
//           <motion.h2
//             className="text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left text-gray-800"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             AI-Powered Sorting for Maximum Efficiency
//           </motion.h2>

//           <motion.p
//             className="hidden md:flex text-gray-600 mt-3 text-base sm:text-lg text-center md:text-left leading-relaxed"
//             style={{ opacity: opacityText, y: translateYText }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             Experience the future of intelligent sorting with our AI-driven
//             machines. Designed to enhance precision, reduce waste, and boost
//             productivity, our technology ensures seamless automation across
//             industries.
//           </motion.p>

//           {/* Button to open modal */}
//           <motion.button
//             className="mt-5 my-5 whitespace-nowrap md:my-10 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold py-3 px-3 text-center md:w-[35%] rounded-lg text-lg shadow-md"
//              initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             onClick={openModal}
//           >
//             Watch More Videos
//           </motion.button>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="relative bg-white rounded-lg p-5 w-11/12 md:w-3/4 lg:w-1/2">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-white text-2xl"
//             >
//               ×
//             </button>
//             <iframe
//               width="100%"
//               height="315"
//               src={getYouTubeUrl(videoIds[videoIndex])}
//               title={`Video ${videoIndex + 1}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//               className="rounded-lg"
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TechnologyPage;

"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Marquee from "react-fast-marquee";

const TechnologyPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacityText = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateYText = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  // ✅ Cloudinary embed URLs
  const videoUrls = [
    "https://player.cloudinary.com/embed/?cloud_name=dt2juqy9s&public_id=be8aa922-9d71-45a9-8ebf-92bae68ad4a5_ufksy9&profile=cld-default",
    "https://player.cloudinary.com/embed/?cloud_name=dt2juqy9s&public_id=cccf6aa4-8c6f-467c-a1f0-e08629e44969_wvcatj&profile=cld-default",
    "https://player.cloudinary.com/embed/?cloud_name=dt2juqy9s&public_id=5822ac68-f2a8-403a-af05-8402202d9002_vc5u17&profile=cld-default",
  ];

  const [videoIndex, setVideoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextVideo = () => {
    setVideoIndex((prev) => (prev + 1) % videoUrls.length);
  };

  const prevVideo = () => {
    setVideoIndex((prev) => (prev === 0 ? videoUrls.length - 1 : prev - 1));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      ref={ref}
      className="w-full min-h-full bg-gradient-to-r from-gray-100 to-white px-6 pt-16"
    >
      {/* Marquee */}
      <div className="relative w-full z-10">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          <div className="flex items-center gap-8 px-4">
            {[
              "/photo-1594900799266-0e56587ba586.avif",
              "/photo-1508061253366-f7da158b6d46.avif",
              "/photo-1508061235804-9436954f042f.avif",
              "/photo-1508061253366-f7da158b6d46.avif",
              "/photo-1567080586917-e6ab6aa0df85.avif",
              "/photo-1580425922682-cd96db9af39d.avif",
              "/photo-1574323347407-f5e1ad6d020b (1).avif",
              "/photo-1580425922682-cd96db9af39d.avif",
              "/photo-1523312727315-7c6ae09c3d09.avif",
              "/photo-1567080586917-e6ab6aa0df85.avif",
              "/photo-1596564823703-d28706a620e8.avif",
              "/photo-1574323347407-f5e1ad6d020b (1).avif",
              "/photo-1523312727315-7c6ae09c3d09.avif",
              "/photo-1523312727315-7c6ae09c3d09.avif",
              "/photo-1574323347407-f5e1ad6d020b (1).avif",
              "/photo-1580425922682-cd96db9af39d.avif",
              "/photo-1523312727315-7c6ae09c3d09.avif",
              "/photo-1567080586917-e6ab6aa0df85.avif",
              "/photo-1596564823703-d28706a620e8.avif",
              "/photo-1574323347407-f5e1ad6d020b (1).avif",
              "/photo-1523312727315-7c6ae09c3d09.avif",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Grain ${index}`}
                className="h-16 w-16 object-cover rounded-full"
              />
            ))}
          </div>
        </Marquee>
      </div>

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-5xl my-10 font-bold leading-tight text-gray-800 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Unleash the Power of
        <span className="mx-5 bg-gradient-to-r from-green-400 to-blue-400 px-2 text-white rounded-lg block sm:inline">
          AI Faster Growth
        </span>
        <span> Smarter Decisions</span> Limitless Potential.
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-600 text-lg sm:text-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Transform your business with AI-powered solutions designed for speed and
        precision.
      </motion.p>

      <div className="w-[90%] m-auto h-full flex flex-wrap gap-4 md:gap-6">
        {/* Main Cloudinary Video Embed */}
        <motion.div
          className="video w-full h-full md:w-[48%] md:my-10 my-5 relative"
          style={{ scale: videoScale }}
        >
          <iframe
            src={videoUrls[videoIndex]}
            title={`Cloudinary Video ${videoIndex + 1}`}
            allow="autoplay; fullscreen"
            frameBorder="0"
            className="rounded-3xl w-full h-[315px]"
            allowFullScreen
          ></iframe>

          {/* Navigation Buttons */}
          <button
            onClick={prevVideo}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextVideo}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>

        {/* Right Section */}
        <div className="right w-full md:w-[48%] h-full flex flex-col justify-center md:my-20 px-4 md:px-0">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            AI-Powered Sorting for Maximum Efficiency
          </motion.h2>

          <motion.p
            className="hidden md:flex text-gray-600 mt-3 text-base sm:text-lg text-center md:text-left leading-relaxed"
            style={{ opacity: opacityText, y: translateYText }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Experience the future of intelligent sorting with our AI-driven
            machines. Designed to enhance precision, reduce waste, and boost
            productivity, our technology ensures seamless automation across
            industries.
          </motion.p>

          <motion.button
            className="mt-5 my-5 whitespace-nowrap md:my-10 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold py-3 px-3 text-center md:w-[35%] rounded-lg text-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={openModal}
          >
            Watch More Videos
          </motion.button>
        </div>
      </div>

      {/* Modal with Cloudinary Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg p-5 w-11/12 md:w-3/4 lg:w-1/2">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-800 text-2xl"
            >
              ×
            </button>
            <iframe
              src={videoUrls[videoIndex]}
              title={`Cloudinary Video ${videoIndex + 1}`}
              allow="autoplay; fullscreen"
              frameBorder="0"
              className="rounded-lg w-full h-[315px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologyPage;
