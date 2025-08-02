"use client";

import Image from "next/image";

const solutionImages = [
  "/quartz.webp",
  "/photo-1571727153934-b9e0059b7ab2.avif",
  "/360_F_422437204_ZAa0YLQ6LEPm4dh98Cktnk84BLkfWjvw.webp",
  "/360_F_407042220_gd0K3aNiJQTFPwg7BRw6p4Zlm75LEzRl.webp",
  "/photo-1574323347407-f5e1ad6d020b.avif",
];

const Solutions = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-12 px-4 md:px-10 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#8E54FF] mb-10">
        Solutions
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
        {solutionImages.map((src, index) => (
          <div key={index} className="w-full">
            <div className="w-full h-48 relative rounded overflow-hidden">
              <Image
                src={src}
                alt={`Solution ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
