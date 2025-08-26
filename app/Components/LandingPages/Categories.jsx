import React, { useState } from "react";

const categories = ["Coffee"];

const imageData = {
  Coffee: {
    input:
      "https://res.cloudinary.com/dz4gzayip/image/upload/v1755865950/WhatsApp_Image_2025-08-22_at_5.52.44_PM_z6jfdu.jpg",
    accept:
      "https://res.cloudinary.com/dz4gzayip/image/upload/v1755865951/WhatsApp_Image_2025-08-22_at_5.55.16_PM_dhoqqi.jpg",
    reject:
      "https://res.cloudinary.com/dz4gzayip/image/upload/v1755865953/WhatsApp_Image_2025-08-22_at_5.56.09_PM_gthl6j.jpg"
  },
};

const Panel = ({ label, image }) => (
  <div
    className="p-4 rounded-xl flex-1 text-gray-800 transition-all duration-300 
      border-4 border-green-500 shadow-lg hover:shadow-green-500/50 hover:scale-105 bg-white"
  >
    <div className="flex justify-center items-center mb-3 text-lg font-bold uppercase tracking-widest text-green-700">
      {label}
    </div>
    <div className="overflow-hidden rounded-lg">
      <img
        src={image}
        alt={label}
        className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
      />
    </div>
  </div>
);

export default function MaterialPanel() {
  const [selectedCategory] = useState("Coffee");

  return (
    <div className="p-6 max-w-screen-xl mx-auto space-y-6">
      {/* Main Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-md">
          Material Sorting Dashboard
        </h1>
        <p className="text-lg mt-1 text-gray-600">
          View, categorize, and verify input materials
        </p>
      </div>

      {/* Section Subheading */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Sorting Results
        </h2>
        <p className="text-gray-700">
          Choose a material to view input, accepted, and rejected samples.
        </p>
      </div>

      {/* 3 Column Panel Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <Panel label="INPUT" image={imageData[selectedCategory].input} />
        <Panel label="ACCEPT" image={imageData[selectedCategory].accept} />
        <Panel label="REJECT" image={imageData[selectedCategory].reject} />
      </div>
    </div>
  );
}
