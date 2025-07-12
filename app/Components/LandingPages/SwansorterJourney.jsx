"use client";

import React from "react";
import { motion } from "framer-motion";

const SwansorterJourney = () => {
  return (
    <div className="w-full px-4 py-16  flex justify-center">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-5xl font-extrabold text-[#9253FF] mb-4">
          Swansorter Journey
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Explore the step-by-step roadmap of how Swansorter streamlines your grain sorting process.
        </p>
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          src="https://res.cloudinary.com/dt2juqy9s/image/upload/v1752075947/Process_Roadmap_Diagram_Infographic_Graph_x8dwik.png"
          alt="Swansorter Sorting Journey"
          className="w-full h-auto object-contain rounded-xl shadow-xl border border-gray-200"
        />
      </div>
    </div>
  );
};

export default SwansorterJourney;
