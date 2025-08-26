"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const inputImages = [
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755070765/WhatsApp_Image_2025-08-13_at_1.01.13_PM_ckflwi.jpg",
  "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862432/WhatsApp_Image_2025-08-22_at_4.37.22_PM_a5cofk.jpg",
  // "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754975340/WhatsApp_Image_2025-08-12_at_10.31.05_AM_ux8vyr.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072465/WhatsApp_Image_2025-08-13_at_1.25.08_PM_fenthf.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987080/WhatsApp_Image_2025-08-12_at_1.00.18_PM_mgq8bv.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984366/WhatsApp_Image_2025-08-12_at_12.50.28_PM_faj8dl.jpg"

];

const acceptImages = [
  "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754639653/WhatsApp_Image_2025-08-07_at_5.48.54_PM_a1xu0z.jpg",
  "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862433/WhatsApp_Image_2025-08-22_at_5.02.27_PM_tjy9az.jpg",
  // "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754813095/WhatsApp_Image_2025-08-06_at_7.24.04_PM_1_xgmhqp.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072466/WhatsApp_Image_2025-08-13_at_1.25.28_PM_boceya.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987087/WhatsApp_Image_2025-08-12_at_1.00.36_PM_dh3zin.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984374/WhatsApp_Image_2025-08-12_at_12.51.04_PM_ktxrlt.jpg"
];

const rejectionImages = [
  "https://res.cloudinary.com/dybpd6dkz/image/upload/v1755323374/WhatsApp_Image_2025-08-16_at_11.18.13_AM_lrx3kn.jpg",
  "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862574/WhatsApp_Image_2025-08-22_at_5.04.23_PM_wte5ss.jpg",
  // "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754813400/WhatsApp_Image_2025-08-06_at_7.24.05_PM_v3nyya.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072466/WhatsApp_Image_2025-08-13_at_1.25.17_PM_us1iq2.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987085/WhatsApp_Image_2025-08-12_at_1.01.25_PM_rips1q.jpg",
  "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984384/WhatsApp_Image_2025-08-12_at_12.51.20_PM_uvjwe3.jpg"
  
];

const Solutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(inputImages.length, acceptImages.length, rejectionImages.length));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-12 px-4 md:px-10 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#8E54FF] mb-10">
        Solutions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Input */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Input</h3>
          <div className="w-full h-64 relative rounded-lg overflow-hidden">
            <Image
              src={inputImages[currentIndex % inputImages.length]}
              alt="Input image"
              fill
              className="object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Accept */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Accept</h3>
          <div className="w-full h-64 relative rounded-lg overflow-hidden">
            <Image
              src={acceptImages[currentIndex % acceptImages.length]}
              alt="Accept image"
              fill
              className="object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Rejection */}
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Rejection</h3>
          <div className="w-full h-64 relative rounded-lg overflow-hidden">
            <Image
              src={rejectionImages[currentIndex % rejectionImages.length]}
              alt="Rejection image"
              fill
              className="object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
