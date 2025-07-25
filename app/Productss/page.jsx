"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/NavbarLinks/Navbar";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";

// Product data
const productData = {
  "Chute Type": {
    // "1 Chute Type 64 Channels": {
    //   images: [
    //     "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875765/128_channel_cashew_2_chute_d2too2.jpg",
    //   ],
    //   link: "/ColorSorters/Chute-type",
    // },
    "1 Chute Type 64 Channels Frame": {
      images: [
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875732/64_Channel_NW_machine_zvbkoy.jpg",
      ],
      link: "/ColorSorters/Chute-type",
    },
    "1 Chute Type 64 Channels": {
      images: [
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875333/64_channel_1_chute_a27wrm.jpg",
      ],
      link: "/ColorSorters/Chute-type",
    },
    "2 Chute Type 128 Channels": {
      images: ["https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875391/128_channel_2_chute_zwprka.jpg"],
      link: "/ColorSorters/Chute-type",
    },
    "2 Chute forward machine": {
      images: ["https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875993/128_Channel_Forward_2_chute_bgl5ai.jpg"],
      link: "/ColorSorters/Chute-type",
    },
    "3 chute forward machine" :{
      images: ["https://res.cloudinary.com/dybpd6dkz/image/upload/v1746876029/192_Channel_Forward_3_chute_kxffex.jpg"],
      link: "/ColorSorters/Chute-type",
    },
    "3 Chute 192 Channels": {
      images: ["/img6.jpeg"],
      link: "/ColorSorters/Chute-type",
    },
       "4 Chute 256 Channels": {
      images: ["https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875490/256_channel_4_chute_wuw2wp.jpg"],
      link: "/ColorSorters/Chute-type",
    },
    "5 Chute Type 320 Channels": {
      images: ["/img4.jpeg"],
      link: "/ColorSorters/Chute-type",
    },
     "7 Chute 448 Channels": {
      images: ["https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875591/448_Channel_7_chute_fb3ugx.jpg"],
      link: "/ColorSorters/Chute-type",
    },
    "8 Chute Type 512 Channels": {
      images: ["/img8.jpeg"],
      link: "/ColorSorters/Chute-type",
    },
    "10 Chute Type 640 Channels": {
      images: ["/img10.jpeg"],
      link: "/ColorSorters/Chute-type",
    },
  },
  "Belt Type": {
    "300 belt type MS frame": {
      images: ["/img1.jpeg"],
      link: "/ColorSorters/Belt-type",
    },
    "300 MM belt type": {
      images: ["/img2.jpeg"],
      link: "/ColorSorters/Belt-type",
    },
    "600mm belt conveyor": {
      images: ["/img11.jpeg"],
      link: "/ColorSorters/Belt-type",
    },
  },
  "Belt Type": {
    "300 belt type MS frame": {
      images: ["/img1.jpeg"],
      link: "/ColorSorters/Belt-type",
    },
    "300 MM belt type": {
      images: ["/img2.jpeg"],
      link: "/ColorSorters/Belt-type",
    },
    "600mm belt conveyor": {
      images: ["/img11.jpeg"],
      link: "/ColorSorters/Belt-type",
    },
  },
   "Cashew": {
    "1 Chute Type Cashew ": {
      images: ["https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875682/64_channel_cashew_1_chute_nk2rok.jpg"],
      link: "/ColorSorters/Chute-type",
    },
    "2 Chute Type Cashew": {
      images: ["https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875391/128_channel_2_chute_zwprka.jpg"],
      link: "/ColorSorters/Chute-type",
    },
    "2 Chute Type Cashew": {
      images: ["https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875765/128_channel_cashew_2_chute_d2too2.jpg"],
      link: "/ColorSorters/Chute-type",
    },
    "3 Chute Type Cashew": {
      images: ["https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875844/192_channel_cashew_3_chute_hsg4a6.jpg"],
      link: "/ColorSorters/Chute-type",
    },

  },
};

const Page = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [selected, setSelected] = useState(null);

  const allProducts = Object.entries(productData).flatMap(([group, items]) =>
    Object.entries(items).map(([label, data]) => ({
      group,
      label,
      ...data,
    }))
  );

  const filteredProducts =
    selected && activeGroup && productData[activeGroup][selected]
      ? [
          {
            group: activeGroup,
            label: selected,
            ...productData[activeGroup][selected],
          },
        ]
      : allProducts;

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Types Of Products
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-md shadow">
              {Object.entries(productData).map(([group, types], i) => (
                <div key={i}>
                  <h3 className="text-white bg-green-700 font-semibold px-4 py-2">
                    {group}
                  </h3>
                  <ul>
                    {Object.keys(types).map((type, j) => (
                      <li
                        key={j}
                        onClick={() => {
                          setActiveGroup(group);
                          setSelected(type);
                        }}
                        className={`cursor-pointer px-4 py-3 text-sm md:text-base border-b hover:bg-green-100 ${
                          selected === type && activeGroup === group
                            ? "bg-green-700 text-white font-semibold"
                            : ""
                        }`}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, i) => (
              <Link key={i} href={product.link}>
                <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition p-4 cursor-pointer">
                  <Image
                    src={product.images[0]}
                    alt={product.label}
                    width={300}
                    height={200}
                    className="object-contain w-full h-48 rounded-md"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    {product.label}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Provide you with a full set of color sorting quality upgrade
                    solutions
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ChatBot />
      <AutoPopupChat />
      <Footerpage />
    </div>
  );
};

export default Page;
