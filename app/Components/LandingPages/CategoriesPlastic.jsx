import React, { useState } from "react";

const categories = ["Plastic"];

const imageData = {
  Coffee: {
    input:
      "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072465/WhatsApp_Image_2025-08-13_at_1.25.08_PM_fenthf.jpg",
    accept:
      "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072466/WhatsApp_Image_2025-08-13_at_1.25.28_PM_boceya.jpg",
    reject:
      "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072466/WhatsApp_Image_2025-08-13_at_1.25.17_PM_us1iq2.jpg"
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

export default function MaterialPanelplastic() {
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
