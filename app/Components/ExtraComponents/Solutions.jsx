"use client";

import Image from "next/image";

const solutionImages = [
  "/quartz.webp",
  "/photo-1571727153934-b9e0059b7ab2.avif",
  "/360_F_69517650_puotOHAWs5rTQ5Nj4LzVkBMPk8r0V4nB.webp",
  "/360_F_407042220_gd0K3aNiJQTFPwg7BRw6p4Zlm75LEzRl.webp",
  "/360_F_251903391_dEPKuDRvDF4kwEkzTH6dUfj20SxsXg50.webp",
];

const Solutions = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-12 px-4 md:px-10 text-center">
      <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-10">
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
