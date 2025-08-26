import React from "react";

const VideoSection = () => {
  return (
    <div className="px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Explore Our Videos</h2>
        <p className="text-lg text-gray-600">
          Check out these insightful videos to learn more about our services and products.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Cloudinary Video 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <iframe
              width="100%"
              height="400px"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              src="https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=IMG_4309_ygcbkn&profile=cld-default"
              title="Cloudinary Video 1"
              frameBorder="0"
            ></iframe>
          </div>
        </div>

        {/* Cloudinary Video 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4">
            <iframe
              width="100%"
              height="400px"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              src="https://player.cloudinary.com/embed/?cloud_name=dybpd6dkz&public_id=WhatsApp_Video_2025-07-30_at_1.28.35_PM_gne0eq&profile=cld-default"
              title="Cloudinary Video 2"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

