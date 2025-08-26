"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    label: "Rice Color Sorter",
    icon: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754988215/WhatsApp_Image_2025-08-12_at_1.17.50_PM_iskqkl.jpg",
    product:
      "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746876029/192_Channel_Forward_3_chute_kxffex.jpg",
  },
  {
    label: "Coffee Color Sorter",
    icon: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987998/WhatsApp_Image_2025-08-12_at_1.03.53_PM_r6sgoa.jpg",
    product:
      "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875993/128_Channel_Forward_2_chute_bgl5ai.jpg",
  },
  {
    label: "Cashew Color Sorter",
    icon: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754988078/WhatsApp_Image_2025-08-12_at_1.04.02_PM_qpjwwl.jpg",
    product:
      "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875765/128_channel_cashew_2_chute_d2too2.jpg",
  },
  {
    label: "Groundnut Color Sorter",
    icon: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987787/WhatsApp_Image_2025-08-12_at_1.03.31_PM_yhznvd.jpg",
    product:
      "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875447/192_channel_3_chute_bdmqms.jpg",
  },
  {
    label: "Plastic Color Sorter",
    icon: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987856/WhatsApp_Image_2025-08-12_at_1.03.41_PM_fjqndp.jpg",
    product:
      "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746876210/300_slow_conveyor_ljcxfk.jpg",
  },
];

const ProductCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-md inline-block mb-10">
          Product Category
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Category List */}
          <div className="space-y-6 w-full md:w-1/2">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 rounded-lg p-3 cursor-pointer transition ${
                  selectedCategory.label === cat.label
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                <div className="w-16 h-12 flex items-center justify-center">
                  <Image
                    src={cat.icon}
                    alt={cat.label}
                    width={48}
                    height={48}
                    className="object-cover w-24 h-16 rounded-full"
                  />
                </div>
                <p className="text-lg font-medium text-gray-800 text-left">
                  {cat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Product Image */}
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-xl overflow-hidden  max-w-md w-full h-96 flex items-center justify-center">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={selectedCategory.product}
                  alt={selectedCategory.label}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
