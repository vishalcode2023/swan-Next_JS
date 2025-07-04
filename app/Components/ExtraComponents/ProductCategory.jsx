"use client";

import Image from "next/image";

const categories = [
  {
    label: "Rice Color Sorter",
    icon: "/photo-1612708074992-c7936e82c99b.avif",
  },
  {
    label: "Coffee Color Sorter",
    icon: "/coffee-beans-and-ground-coffee.webp",
  },
  {
    label: "Nut Color Sorter",
    icon: "/360_F_407042220_gd0K3aNiJQTFPwg7BRw6p4Zlm75LEzRl.webp",
  },
  {
    label: "Bean Color Sorter",
    icon: "/cotton.webp",
  },
  {
    label: "Plastic Color Sorter",
    icon: "/plastic-pellets.webp",
  },
];

const ProductCategory = () => {
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
              <div key={i} className="flex items-center gap-4  rounded-lg p-3 ">
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
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg max-w-md">
              <img
                src="https://res.cloudinary.com/dt2juqy9s/image/upload/v1746543795/img16_x7kqtm.png"
                alt="Product Machine"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
