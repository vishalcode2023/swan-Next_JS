"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "@/app/Components/NavbarLinks/Navbar";
import Footerpage from "@/app/Components/LandingPages/Footerpage";
import ContactSidebar from "@/app/Components/LandingPages/ContactSidebar";
import ChatBot from "@/app/Components/ChatBot/ChatBot";
import AutoPopupChat from "@/app/Components/LandingPages/AutoComponentspop";

const hardcodedBlogs = [
  {
    id: "1",
    title: "Swan Color Sorting – For all types of grains and agricultural items",
    published_date: "2025-04-10",
    featured_image: "/partners1.jpeg",
    content:
      "In the world of agriculture, quality and precision are critical when it comes to sorting grains and other agricultural products. Traditional methods of sorting and grading can be time-consuming and often fail to meet the high-quality standards required by the industry. That's where Swan Color Sorting comes in. Swan Color Sorting technology uses advanced optical sensors and high-definition cameras to identify and sort grains with unparalleled precision. This process ensures that only the best grains make it to market, while unwanted foreign materials like stones, defective grains, and other impurities are removed automatically. The result is higher quality products, reduced waste, and increased efficiency..."
  },
  {
    id: "2",
    title: "AgroTech Moisture Analyzer – Precision Moisture Measurement for Grains and Seeds",
    published_date: "2025-05-15",
    featured_image:
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746795261/WhatsApp_Image_2025-05-09_at_1.36.25_PM_jg593f.jpg",
    content:
      "Accurate moisture measurement is a critical factor in maintaining the quality and shelf life of grains, pulses, and seeds.Traditional methods of sorting and grading can be time-consuming and often fail to meet the high-quality standards required by the industry. That's where Swan Color Sorting comes in. Swan Color Sorting technology uses advanced optical sensors and high-definition cameras to identify and sort grains with unparalleled precision. This process ensures that only the best grains make it to market, while unwanted foreign materials like stones, defective grains, and other impurities are removed automatically. The result is higher quality products, reduced waste, and increased efficiency..."
  }
];

export default function BlogDetailPage() {
  const params = useParams();
  const { id } = params; // matches [id] from folder name

  const blog = hardcodedBlogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Blog not found
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col bg-white">
        <main className="flex-grow py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full aspect-video">
              <Image
                src={blog.featured_image}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105 rounded-t-2xl"
              />
            </div>
            <div className="p-6 sm:p-10">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4">
                {blog.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mb-6 italic border-l-4 border-blue-500 pl-3">
                Published on {new Date(blog.published_date).toLocaleDateString()}
              </p>
              <div
                className="prose prose-sm sm:prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
        </main>
        <ContactSidebar />
        <ChatBot />
        <AutoPopupChat />
      </div>
      <Footerpage />
    </>
  );
}
