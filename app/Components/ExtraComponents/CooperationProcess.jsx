"use client";

import Image from "next/image";

const CooperationProcess = () => {
  return (
    <div className="bg-white py-10 px-4 text-center">
      {/* <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-6">
        Cooperation Process
      </h2> */}

      <div className="relative w-full max-w-6xl mx-auto">
        <Image
          src="https://res.cloudinary.com/dybpd6dkz/image/upload/v1751517188/Screenshot_2025-07-03_100123_ovoe8n.png" // replace with your actual image URL
          alt="Cooperation Process Flow"
          width={1200}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default CooperationProcess;
