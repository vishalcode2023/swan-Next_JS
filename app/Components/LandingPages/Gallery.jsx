import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";  // Import Image component from Next.js

const partners = [
  {
    name: "Intel",
    logo:
      "https://imgs.search.brave.com/rPTvpQ31c9XIUMnmusO1FUpMVtTOHUP2DQFcoR5j8SY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzVu/QnNVeGJVbVc5VW9Z/ZG5LS3ZRRUgtMzIw/LTgwLmpwZw",
  },
  { name: "SMC", logo: "https://img.officer.com/files/base/ebm/automationworld/image/2018/03/aw_247242_smc_blue_cmykxxx.png?auto=format%2Ccompress&w=640&width=640" },
  { name: "Nikon", logo: "https://imgs.search.brave.com/GLx7Y66oMRZuksmNpZlZCwxfFhsBHApdKlMelXENRuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M3L2Jl/L2RmL2M3YmVkZmNh/NzQxZThiZDExN2U4/OTk5YWJhZGI4MTdl/LmpwZw" },
  { name: "Toshiba", logo: "/toshiba.webp" },
  { name: "Matrix", logo: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1745320480/matrix_i1w4ua.png" },
];

const Gallery = () => {
  return (
    <div className="w-full md:min-h-full bg-gradient-to-r from-gray-50 to-white flex flex-col items-center my-15">
      {/* Heading Section */}
      <div className="w-[90%] md:w-[80%] mt-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 break-words text-wrap balance leading-relaxed">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-sm">
            Revolutionizing
          </span>{" "}
          Industries with AI Stay Updated!
        </h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl m-auto mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Collaborating with industry leaders to drive innovation through powerful technological integration.
        </motion.p>
      </div>

      {/* Our Technology Partners Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Technology Partners
      </motion.h2>

      {/* Image Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center my-10">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="w-44 h-40 bg-white border border-gray-200 shadow-md rounded-2xl flex items-center justify-center hover:shadow-xl hover:border-blue-400 transition duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={partner.logo} // Use Image component for optimization
              alt={partner.name}
              width={160}   // Adjust width and height to fit the image size
              height={160}
              className="rounded-2xl object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
