import React from "react";
import Image from "next/image";

const categories = [
  {
    title: "Long Grain Round/Whole White and Core White Separation",
    items: [
      { label: "Good Soybeans", image: "/images/soy_good.png" },
      { label: "Wormhole", image: "/images/wormhole.png" },
      { label: "Mouldy", image: "/images/mouldy.png" },
      { label: "Shriveled", image: "/images/shriveled.png" },
      { label: "Broken valve", image: "/images/broken_valve.png" },
      { label: "Wrinkled", image: "/images/wrinkled.png" },
    ],
  },
  {
    title: "Brown Sorting",
    items: [
      { label: "Good Beans", image: "/images/brown_good1.png" },
      { label: "Heterochromatic", image: "/images/brown_hetero1.png" },
      { label: "Good Beans", image: "/images/brown_good2.png" },
      { label: "Heterochromatic", image: "/images/brown_hetero2.png" },
    ],
  },
  {
    title: "Pea Sorting",
    items: [
      { label: "Good Beans", image: "/images/pea_good1.png" },
      { label: "Heterochromatic", image: "/images/pea_hetero1.png" },
      { label: "Good Beans", image: "/images/pea_good2.png" },
      { label: "Heterochromatic", image: "/images/pea_hetero2.png" },
    ],
  },
  {
    title: "Harmful Sorting",
    items: [
      { label: "Metal", image: "/images/metal.png" },
      { label: "Stone", image: "/images/stone.png" },
      { label: "Grass", image: "/images/grass.png" },
      { label: "Rod", image: "/images/rod.png" },
    ],
  },
];

const SortingLayout = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      {categories.map((category, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-l-4 border-green-500 pl-3 mb-4">
            {category.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  width={150}
                  height={150}
                  className="object-contain mb-2"
                />
                <span className="text-sm font-semibold text-gray-800 mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortingLayout;