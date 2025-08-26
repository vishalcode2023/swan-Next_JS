import React from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Raw Material",
    caption: "Freshly harvested crops as the starting raw material.",
    image: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812433831030785.webp",
  },
  {
    id: 2,
    title: "To Remove the Dust Light Impurities",
    caption: "Initial cleaning to remove dust and lightweight debris.",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752218427/WhatsApp_Image_2025-07-09_at_10.43.47_PM_luujgd.jpg",
  },
  {
    id: 3,
    title: "To Remove the Clods",
    caption: "Separation of clods and larger particles from the material.",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752218494/WhatsApp_Image_2025-07-09_at_10.44.31_PM_exwggn.jpg",
  },
  {
    id: 4,
    title: "To Remove the Stones",
    caption: "De-stoning process to eliminate heavy contaminants.",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752218616/WhatsApp_Image_2025-07-09_at_10.45.18_PM_sw62xq.jpg",
  },
  {
    id: 5,
    title: "To Remove the Moldy and Blighted Material",
    caption: "Filtering out damaged or mold-affected units.",
    image: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752218675/WhatsApp_Image_2025-07-09_at_10.46.28_PM_a6qgdg.jpg",
  },
  {
    id: 6,
    title: "To Separate the Material in Different Sizes",
    caption: "Sorting the material by size for consistent quality.",
    image: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875333/64_channel_1_chute_a27wrm.jpg",
  },
  {
    id: 7,
    title: "Color Sorter Sorting",
    caption: "Advanced color sorting to ensure uniformity.",
    image: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875391/128_channel_2_chute_zwprka.jpg",
  },
];

const FlowChart = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-5xl text-gray-700 font-extrabold text-center mb-10 underline decoration-green-500">Processing Flow</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 duration-300"
          >
            <Image
              src={step.image}
              alt={`Step ${step.id}`}
              width={220}
              height={220}
              className="object-contain mb-4"
            />
            <div className="text-lg font-bold text-green-600">Step {step.id}</div>
            <div className="text-base text-gray-800 mt-2 font-semibold">{step.title}</div>
            <div className="text-sm text-gray-500 mt-2 px-2">{step.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowChart;
