"use client";

import Image from "next/image";

const featureImages = [
  "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875333/64_channel_1_chute_a27wrm.jpg",
  "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875391/128_channel_2_chute_zwprka.jpg",
  "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875532/320_Channel_5_chute_pyq62s.jpg",
  "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875993/128_Channel_Forward_2_chute_bgl5ai.jpg",
];

const FeatureImages = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-12 px-4 md:px-10 text-center">
      <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-10">
        Feature Images
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
        {featureImages.map((src, index) => (
          <div key={index} className="w-full flex justify-center">
            <div className="relative w-[250px] h-[250px]">
              <Image
                src={src}
                alt={`Feature Image ${index + 1}`}
                fill
                className="object-contain rounded-xl shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureImages;
