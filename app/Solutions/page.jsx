"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/NavbarLinks/Navbar";
import ContactForm from "../Components/Crad/ContactForm";
import Footerpage from "../Components/LandingPages/Footerpage";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import MaterialPanel from "../Components/LandingPages/Categories";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";
import VideoSection from "../Components/LandingPages/VideoSection";
import CooperationProcess from "../Components/ExtraComponents/CooperationProcess";
import FlowChart from "../Components/ExtraComponents/FlowChart";
import SortingLayout from "../Components/ExtraComponents/SortingLayout";
import MaterialPanelPlastic from "../Components/LandingPages/CategoriesPlastic";

// ✅ Your actual solutions array
const solutions = [
  {
    id: "MultiGrains",
    title: "Agricultural Products Sorting",
    image: "/Urent/soluationimg1.png",
    icon: "🌾",
    items: [
      //Rice
      {
        name: "Rice",
        images: [
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148651/WhatsApp_Image_2025-08-13_at_3.28.23_PM_ex7sds.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148659/WhatsApp_Image_2025-08-13_at_3.28.24_PM_q6uqoc.jpg", // Add image path if available
            title: "  ",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148663/WhatsApp_Image_2025-08-13_at_3.28.24_PM_1_g3ame1.jpg", // Add image path if available
            title: "  ",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148666/WhatsApp_Image_2025-08-13_at_3.46.28_PM_pgqlh0.jpg",
            title: "",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description:
                "Steam rice is known for its short, sticky grains, high amylopectin content, and smooth, moist texture. It is often used in sushi and other dishes where a sticky rice texture is required.",
            },
          },
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148658/WhatsApp_Image_2025-08-13_at_3.46.29_PM_zpu0x4.jpg",
            title: " ",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description:
                "Boiled rice is processed to remove the husk but often contains impurities and broken grains, leading to inconsistent quality and longer cooking times.",
            },
          },
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148680/WhatsApp_Image_2025-08-13_at_3.46.29_PM_1_ycks7o.jpg",
            title: " ",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description:
                "Broken rice is a whole grain variety that retains the bran layer, making it a healthier choice. It is typically nutty and requires a longer cooking time.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148667/WhatsApp_Image_2025-08-13_at_3.46.29_PM_2_nxirod.jpg",
            title: " ",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description:
                " rice, also known as poha, is a light, flattened rice that is easy to digest. It is commonly used in Indian cuisine for quick breakfasts, snacks, and desserts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148677/WhatsApp_Image_2025-08-13_at_4.02.11_PM_orutk5.jpg",
            title: " ",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description:
                " rice, also known as poha, is a light, flattened rice that is easy to digest. It is commonly used in Indian cuisine for quick breakfasts, snacks, and desserts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148667/WhatsApp_Image_2025-08-13_at_4.02.11_PM_1_gcdzl5.jpg",
            title: " ",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description:
                " rice, also known as poha, is a light, flattened rice that is easy to digest. It is commonly used in Indian cuisine for quick breakfasts, snacks, and desserts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148674/WhatsApp_Image_2025-08-13_at_4.02.12_PM_fky85y.jpg",
            title: " ",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description:
                " rice, also known as poha, is a light, flattened rice that is easy to digest. It is commonly used in Indian cuisine for quick breakfasts, snacks, and desserts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148679/WhatsApp_Image_2025-08-13_at_4.02.12_PM_1_if1v5a.jpg",
            title: " ",
            details: {
              points: [
                "Advanced optical sorting technology designed specifically for rice varieties",
                "Removes black spots, immature grains, stones, and other impurities with AI precision",
                "Maintains uniform grain size and color for premium market standards",
                "Boosts milling efficiency and reduces product wastage in processing plants",
                "Compatible with high-capacity rice mills for continuous production",
              ],
              description:
                " rice, also known as poha, is a light, flattened rice that is easy to digest. It is commonly used in Indian cuisine for quick breakfasts, snacks, and desserts.",
            },
          },
        ],
        recommended: [
          {
            image: "/img4.jpeg",
            title: "Swan 5 chute 320 channel",
          },
          {
            image: "/img5.jpeg",
            title: "Swan 5 chute 320 channel box type",
          },
          {
            image: "/img6.jpeg",
            title: "Swan 3 chute 192 channel",
          },
        ],
      },

      //Dal
      {
        name: "Dal",
        description:
          "Dals are an essential part of Indian cuisine, offering rich protein, fiber, and vital nutrients. From Toor Dal to Masoor Dal, each variety brings a unique flavor and texture to everyday meals. Perfect for soups, curries, and stews, dals are a staple in vegetarian and health-conscious diets.",
        images: [
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754815505/WhatsApp_Image_2025-08-06_at_7.24.27_PM_2_ouvmbw.jpg",
            title: "Input Material",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "Toor Dal is a widely used lentil in Indian cooking, essential for dishes like sambar and dal fry.",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754815506/WhatsApp_Image_2025-08-06_at_7.24.27_PM_1_rjszwg.jpg",
            title: " Rejection",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "Toor Dal is a widely used lentil in Indian cooking, essential for dishes like sambar and dal fry.",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754815459/WhatsApp_Image_2025-08-06_at_7.24.27_PM_coficm.jpg",
            title: "Accept",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "  widely used lentil in Indian cooking, essential for dishes like sambar and dal fry.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755014038/WhatsApp_Image_2025-08-12_at_3.39.56_PM_ktzziw.jpg",
            title: " Accept",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "Toor Dal is a widely used lentil in Indian cooking, essential for dishes like sambar and dal fry.",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754969473/WhatsApp_Image_2025-08-11_at_7.11.03_PM_dsbxcx.jpg",
            title: "Masoor Dal",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "Masoor Dal has a rich, earthy taste and is often used in Indian and Middle Eastern dishes.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755153199/WhatsApp_Image_2025-08-13_at_5.49.06_PM_ws6ddt.jpg",
            title: "Urad dal",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "Moong Dal is a highly nutritious lentil known for its versatility and ease of digestion.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755229419/WhatsApp_Image_2025-08-14_at_2.25.22_PM_aphhyq.jpg",
            title: "Channa dal",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "Chana Dal is a protein-rich pulse made from split chickpeas, widely used in Indian dishes and sweets.",
            },
          },
          {
            src: "/black-e1683893256576.webp",
            title: "Black Urad Dal Whole",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "Black Urad Dal Whole has a rich, earthy taste and is often used in Indian and Middle Eastern dishes.",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862217/WhatsApp_Image_2025-08-22_at_4.37.22_PM_ejp6r0.jpg",
            title: "Urad Split Dal",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "Urad split Dal Whole has a rich, earthy taste and is often used in Indian and Middle Eastern dishes.",
            },
          },



          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755865950/WhatsApp_Image_2025-08-22_at_5.52.44_PM_z6jfdu.jpg",
            title: "Input Material",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "Toor Dal is a widely used lentil in Indian cooking, essential for dishes like sambar and dal fry.",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755865951/WhatsApp_Image_2025-08-22_at_5.55.16_PM_dhoqqi.jpg",
            title: "Accept",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "Toor Dal is a widely used lentil in Indian cooking, essential for dishes like sambar and dal fry.",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755865953/WhatsApp_Image_2025-08-22_at_5.56.09_PM_gthl6j.jpg",
            title: "Rejection",
            details: {
              points: [
                "Precision sorting technology optimized for pulses and lentils",
                "Removes defects, discoloration, and foreign matter using AI vision",
                "Ensures uniform size, shape, and quality for premium processing",
                "Enhances food safety and meets export-grade quality standards",
              ],
              description:
                "  widely used lentil in Indian cooking, essential for dishes like sambar and dal fry.",
            },
          },
        ],
        recommended: [
          {
            image: "/img7.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
          {
            image: "/img9.jpeg",
            title: "Swan 1 Chute 64 Channel",
          },
        ],
      },

      // Cashew
      {
        name: " Cashew",
        images: [
          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img25.png?updatedAt=1756188557028", // Add image path if available
            title: " input Material ",
            details: {
              points: [
                "Removes defective kernels, shell fragments, and foreign particles using AI and vision-based detection",
                "Ensures uniform color and quality for premium-grade cashew products",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img23.png?updatedAt=1756188553030", // Add image path if available
            title: " Accept ",
            details: {
              points: [
                "Removes defective kernels, shell fragments, and foreign particles using AI and vision-based detection",
                "Ensures uniform color and quality for premium-grade cashew products",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img24.png?updatedAt=1756188555925", // Add image path if available
            title: "  Rejection ",
            details: {
              points: [
                "Removes defective kernels, shell fragments, and foreign particles using AI and vision-based detection",
                "Ensures uniform color and quality for premium-grade cashew products",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img20.png?updatedAt=1756188553998", // Add image path if available
            title: " input Material ",
            details: {
              points: [
                "Removes defective kernels, shell fragments, and foreign particles using AI and vision-based detection",
                "Ensures uniform color and quality for premium-grade cashew products",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img21.png?updatedAt=1756188551438", // Add image path if available
            title: "  Accept ",
            details: {
              points: [
                "Removes defective kernels, shell fragments, and foreign particles using AI and vision-based detection",
                "Ensures uniform color and quality for premium-grade cashew products",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img22.png?updatedAt=1756188553598",// Add image path if available
            title: "  Rejection ",
            details: {
              points: [
                "Removes defective kernels, shell fragments, and foreign particles using AI and vision-based detection",
                "Ensures uniform color and quality for premium-grade cashew products",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img19.png?updatedAt=1756188553399", // Add image path if available
            title: "  Input Material ",
            details: {
              points: [
                "Removes defective kernels, shell fragments, and foreign particles using AI and vision-based detection",
                "Ensures uniform color and quality for premium-grade cashew products",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755148397/WhatsApp_Image_2025-08-13_at_3.10.41_PM_h2qibq.jpg", // Add image path if available
            title: "   Accept ",
            details: {
              points: [
                "Removes defective kernels, shell fragments, and foreign particles using AI and vision-based detection",
                "Ensures uniform color and quality for premium-grade cashew products",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img18.png?updatedAt=1756188498601", // Add image path if available
            title: " Brown Cashew  ",
            details: {
              points: [
                "Removes defective kernels, shell fragments, and foreign particles using AI and vision-based detection",
                "Ensures uniform color and quality for premium-grade cashew products",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img17.png?updatedAt=1756188500894", // Add image path if available
            title: " Unpeeling Cashew  ",
            details: {
              points: [
                "Removes defective kernels, shell fragments, and foreign particles using AI and vision-based detection",
                "Ensures uniform color and quality for premium-grade cashew products",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },
        ],
        recommended: [
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img70.png?updatedAt=1756188641256",
            // title: "swan 5 chute 320 channel",
          },
          {
            image:
              "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875765/128_channel_cashew_2_chute_d2too2.jpg",
            // title: "Swan 300 mm belt type machine",
          },
          {
            image:
              "https://res.cloudinary.com/dt2juqy9s/image/upload/v1746543795/img16_x7kqtm.png",
            // title: "Swan 10 chute 640 channel",
          },
        ],
      },

      // GroundNut
      {
        name: "Ground Nut",
        images: [
          // {
          //   src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754812231/WhatsApp_Image_2025-08-06_at_7.24.00_PM_whzcke.jpg", // Add image path if available
          //   title: " Input Material ",
          //   details: {
          //     points: [
          //       "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
          //       "Ensures uniform size, color, and quality for premium-grade output",
          //       "Enhances processing efficiency while reducing manual sorting efforts",
          //       "Supports high-capacity throughput for commercial nut processing facilities",
          //     ],
          //     description: "",
          //   },
          // },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754812232/WhatsApp_Image_2025-08-06_at_7.23.59_PM_2_ylcfi4.jpg", // Add image path if available
            title: " Accept",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754812233/WhatsApp_Image_2025-08-06_at_7.23.59_PM_zgwall.jpg", // Add image path if available
            title: " Rejection",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          //
          // {
          //   src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754968453/WhatsApp_Image_2025-08-11_at_7.07.50_PM_1_jm6ka0.jpg", // Add image path if available
          //   title: " Input Material ",
          //   details: {
          //     points: [
          //       "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
          //       "Ensures uniform size, color, and quality for premium-grade output",
          //       "Enhances processing efficiency while reducing manual sorting efforts",
          //       "Supports high-capacity throughput for commercial nut processing facilities",
          //     ],
          //     description: "",
          //   },
          // },

          // {
          //   src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754968452/WhatsApp_Image_2025-08-11_at_7.07.49_PM_2_zrntns.jpg", // Add image path if available
          //   title: " Accept",
          //   details: {
          //     points: [
          //       "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
          //       "Ensures uniform size, color, and quality for premium-grade output",
          //       "Enhances processing efficiency while reducing manual sorting efforts",
          //       "Supports high-capacity throughput for commercial nut processing facilities",
          //     ],
          //     description: " ",
          //   },
          // },

          // {
          //   src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754968454/WhatsApp_Image_2025-08-11_at_7.07.50_PM_lgf8i6.jpg", // Add image path if available
          //   title: " Rejection",
          //   details: {
          //     points: [
          //       "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
          //       "Ensures uniform size, color, and quality for premium-grade output",
          //       "Enhances processing efficiency while reducing manual sorting efforts",
          //       "Supports high-capacity throughput for commercial nut processing facilities",
          //     ],
          //     description: " ",
          //   },
          // },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754968447/WhatsApp_Image_2025-08-11_at_7.07.49_PM_dmnyoj.jpg", // Add image path if available
            title: " Accept",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754968446/WhatsApp_Image_2025-08-11_at_7.07.49_PM_1_isvppy.jpg", // Add image path if available
            title: " Rejection",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },


          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755863850/WhatsApp_Image_2025-08-22_at_5.25.58_PM_2_i6lrz0.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755864241/WhatsApp_Image_2025-08-22_at_5.25.59_PM_bem5wk.jpg", // Add image path if available
            title: "  ",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

        


          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755863836/WhatsApp_Image_2025-08-22_at_5.25.45_PM_is602n.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755863840/WhatsApp_Image_2025-08-22_at_5.25.56_PM_twvvhe.jpg", // Add image path if available
            title: "",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755863840/WhatsApp_Image_2025-08-22_at_5.16.52_PM_bg7mzz.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },


          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755863843/WhatsApp_Image_2025-08-22_at_5.25.58_PM_1_ag1uet.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755863841/WhatsApp_Image_2025-08-22_at_5.25.57_PM_z5seo1.jpg", // Add image path if available
            title: "",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755864606/WhatsApp_Image_2025-08-22_at_5.25.54_PM_vg6ta0.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },



          

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755865692/WhatsApp_Image_2025-08-22_at_5.57.28_PM_djl5nc.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes damaged kernels, shells, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency while reducing manual sorting efforts",
                "Supports high-capacity throughput for commercial nut processing facilities",
              ],
              description: " ",
            },
          },

          


        ],
        recommended: [
          {
            image: "/img4.jpeg",
            title: "Swan 5 Chute 320 Channel",
          },
          {
            image: "/img5.jpeg",
            title: "Swan 5 Chute 320 Channel Box Type",
          },
          {
            image: "/img6.jpeg",
            title: "Swan 3 Chute 192 Channel",
          },
        ],
      },

      // FriedGram
      {
        name: "Fried Gram",
        images: [
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072036/WhatsApp_Image_2025-08-13_at_1.06.20_PM_fhr9fp.jpg",
            title: "  ",
            details: {
              points: [
                "Sorted by size and texture for consistent roasting",
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Common in Indian cooking and snacks",
                "Eaten as a healthy snack or used in chutneys",
              ],
              description:
                "roasted version of  gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img11.png?updatedAt=1756188500297",
            title: " Accept ",
            details: {
              points: [
                "Sorted by size and texture for consistent roasting",
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Common in Indian cooking and snacks",
                "Eaten as a healthy snack or used in chutneys",
              ],
              description:
                "roasted version of  gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img12.png?updatedAt=1756188501661",
            title: " Rejection ",
            details: {
              points: [
                "Sorted by size and texture for consistent roasting",
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Common in Indian cooking and snacks",
                "Eaten as a healthy snack or used in chutneys",
              ],
              description:
                " roasted version of Bengal gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },



          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755868084/WhatsApp_Image_2025-08-22_at_6.07.38_PM_k6yd1a.jpg",
            title: "Input Material",
            details: {
              points: [
                "Sorted by size and texture for consistent roasting",
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Common in Indian cooking and snacks",
                "Eaten as a healthy snack or used in chutneys",
              ],
              description:
                "roasted version of Bengal gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755867920/WhatsApp_Image_2025-08-22_at_6.07.38_PM_1_dasjtq.jpg",
            title: " Accept ",
            details: {
              points: [
                "Sorted by size and texture for consistent roasting",
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Common in Indian cooking and snacks",
                "Eaten as a healthy snack or used in chutneys",
              ],
              description:
                "Fried gram is a roasted version of Bengal gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755868296/WhatsApp_Image_2025-08-22_at_6.07.39_PM_m6kzpx.jpg",
            title: " Rejection ",
            details: {
              points: [
                "Sorted by size and texture for consistent roasting",
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Common in Indian cooking and snacks",
                "Eaten as a healthy snack or used in chutneys",
              ],
              description:
                "Fried gram is a roasted version of Bengal gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },


          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img14.png?updatedAt=1756188551703",
            title: "  ",
            details: {
              points: [
                "Sorted by size and texture for consistent roasting",
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Common in Indian cooking and snacks",
                "Eaten as a healthy snack or used in chutneys",
              ],
              description:
                "Fried gram is a roasted version of Bengal gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img13.png?updatedAt=1756188549045",
            title: "  ",
            details: {
              points: [
                "Sorted by size and texture for consistent roasting",
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Common in Indian cooking and snacks",
                "Eaten as a healthy snack or used in chutneys",
              ],
              description:
                "Fried gram is a roasted version of Bengal gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754969017/WhatsApp_Image_2025-08-11_at_7.09.13_PM_kkrnlo.jpg",
            title: " ",
            details: {
              points: [
                "Sorted by size and texture for consistent roasting",
                "Roasted form of Bengal gram",
                "Rich in protein and fiber",
                "Common in Indian cooking and snacks",
                "Eaten as a healthy snack or used in chutneys",
              ],
              description:
                "Fried gram is a roasted version of Bengal gram, often consumed as a snack or used in chutneys and traditional Indian dishes.",
            },
          },

          // {
          //   src: "/photo-1523312727315-7c6ae09c3d09.avif",
          //   title: "Guar Gum",
          //   details: {
          //     points: [
          //       "Sorted by quality to ensure proper consistency as a thickening agent",
          //       "Derived from guar beans",
          //       "Soluble in cold water, widely used in food processing",
          //       "Used in food, cosmetics, and various industries",
          //       "Improves texture and shelf life of products",
          //     ],
          //     description:
          //       "Guar gum is a natural thickening agent extracted from guar beans, widely used in food processing, pharmaceuticals, and cosmetics.",
          //   },
          // },
          // {
          //   src: "/20220202_1057251.webp",
          //   title: "Horse Gram",
          //   details: {
          //     points: [
          //       "Sorted for size and quality before use",
          //       "Protein-rich legume",
          //       "Common in South Indian cuisine",
          //       "Used in soups, curries, and chutneys",
          //       "Known for medicinal benefits and weight loss properties",
          //     ],
          //     description:
          //       "Horse gram is a nutrient-dense legume used in traditional Indian dishes, valued for its high protein content and health benefits including digestion and weight management.",
          //   },
          // },
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Swan 10 Chute 640 Channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img12.jpeg",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
        ],
      },

      // Garlic
      {
        name: "Garlic",
        images: [
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755070765/WhatsApp_Image_2025-08-13_at_1.01.13_PM_ckflwi.jpg", // Add image path if available
            title: "Input material",
            details: {
              points: [
                "Sorted to remove the skin, ensuring uniformity and easy use in cooking",
                "Helps maintain consistency in size, ensuring the garlic is ready for culinary use",
                "Efficient sorting process for high-quality peeled cloves",
                "Preserves the health benefits of garlic, including allicin, through proper sorting",
                "Ideal for use in pre-prepared dishes and sauces with minimal preparation time",
              ],
              description:
                "Input garlic refers to cloves with the skin removed, offering convenience in cooking and a strong, aromatic flavor used in many dishes worldwide. Sorting ensures consistency and quality.",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img26.png?updatedAt=1756188571307", // Add image path if available
            title: "Accept ",
            details: {
              points: [
                "Sorted to remove the skin, ensuring uniformity and easy use in cooking",
                "Helps maintain consistency in size, ensuring the garlic is ready for culinary use",
                "Efficient sorting process for high-quality peeled cloves",
                "Preserves the health benefits of garlic, including allicin, through proper sorting",
                "Ideal for use in pre-prepared dishes and sauces with minimal preparation time",
              ],
              description:
                "Accept garlic refers to cloves with the skin removed, offering convenience in cooking and a strong, aromatic flavor used in many dishes worldwide. Sorting ensures consistency and quality.",
            },
          },


          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img7.png?updatedAt=1756188643384", // Add image path if available
            title: "Rejection ",
            details: {
              points: [
                "Sorted to remove the skin, ensuring uniformity and easy use in cooking",
                "Helps maintain consistency in size, ensuring the garlic is ready for culinary use",
                "Efficient sorting process for high-quality peeled cloves",
                "Preserves the health benefits of garlic, including allicin, through proper sorting",
                "Ideal for use in pre-prepared dishes and sauces with minimal preparation time",
              ],
              description:
                "Reject garlic refers to cloves with the skin removed, offering convenience in cooking and a strong, aromatic flavor used in many dishes worldwide. Sorting ensures consistency and quality.",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img9.png?updatedAt=1756188648480",
            title: " ",
            details: {
              points: [
                "Sorted to remove the skin, ensuring uniformity and easy use in cooking",
                "Helps maintain consistency in size, ensuring the garlic is ready for culinary use",
                "Efficient sorting process for high-quality peeled cloves",
                "Preserves the health benefits of garlic, including allicin, through proper sorting",
                "Ideal for use in pre-prepared dishes and sauces with minimal preparation time",
              ],
              description:
                "Input garlic refers to cloves with the skin removed, offering convenience in cooking and a strong, aromatic flavor used in many dishes worldwide. Sorting ensures consistency and quality.",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img8.png?updatedAt=1756188647359", // Add image path if available
            title: " ",
            details: {
              points: [
                "Sorted to remove the skin, ensuring uniformity and easy use in cooking",
                "Helps maintain consistency in size, ensuring the garlic is ready for culinary use",
                "Efficient sorting process for high-quality peeled cloves",
                "Preserves the health benefits of garlic, including allicin, through proper sorting",
                "Ideal for use in pre-prepared dishes and sauces with minimal preparation time",
              ],
              description:
                "Reject garlic refers to cloves with the skin removed, offering convenience in cooking and a strong, aromatic flavor used in many dishes worldwide. Sorting ensures consistency and quality.",
            },
          },

          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img10.png?updatedAt=1756188506788", // Add image path if available
            title: " UnPeeled Garlic",
            details: {
              points: [
                "Sorted to remove the skin, ensuring uniformity and easy use in cooking",
                "Helps maintain consistency in size, ensuring the garlic is ready for culinary use",
                "Efficient sorting process for high-quality peeled cloves",
                "Preserves the health benefits of garlic, including allicin, through proper sorting",
                "Ideal for use in pre-prepared dishes and sauces with minimal preparation time",
              ],
              description:
                "Accept garlic refers to cloves with the skin removed, offering convenience in cooking and a strong, aromatic flavor used in many dishes worldwide. Sorting ensures consistency and quality.",
            },
          },
// 
          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755932678/WhatsApp_Image_2025-08-23_at_12.33.47_PM_wps6wl.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Sorted to remove the skin, ensuring uniformity and easy use in cooking",
                "Helps maintain consistency in size, ensuring the garlic is ready for culinary use",
                "Efficient sorting process for high-quality peeled cloves",
                "Preserves the health benefits of garlic, including allicin, through proper sorting",
                "Ideal for use in pre-prepared dishes and sauces with minimal preparation time",
              ],
              description:
                "Reject garlic refers to cloves with the skin removed, offering convenience in cooking and a strong, aromatic flavor used in many dishes worldwide. Sorting ensures consistency and quality.",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755932850/WhatsApp_Image_2025-08-23_at_12.34.06_PM_e3hz0b.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Sorted to remove the skin, ensuring uniformity and easy use in cooking",
                "Helps maintain consistency in size, ensuring the garlic is ready for culinary use",
                "Efficient sorting process for high-quality peeled cloves",
                "Preserves the health benefits of garlic, including allicin, through proper sorting",
                "Ideal for use in pre-prepared dishes and sauces with minimal preparation time",
              ],
              description:
                "Accept garlic refers to cloves with the skin removed, offering convenience in cooking and a strong, aromatic flavor used in many dishes worldwide. Sorting ensures consistency and quality.",
            },
          },

          
        ],
        recommended: [
          {
            image: "/img5.jpeg",
            title: "Swan 5 Chute 320 Channel",
          },
          {
            image: "/img1.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img10.jpeg",
            title: "Swan 10 Chute 640 Channel",
          },
        ],
      },

      // Millest
      {
        name: "Millets",
        images: [
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984366/WhatsApp_Image_2025-08-12_at_12.50.28_PM_faj8dl.jpg",
            title: "Input Material",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984374/WhatsApp_Image_2025-08-12_at_12.51.04_PM_ktxrlt.jpg",
            title: "Accept",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984384/WhatsApp_Image_2025-08-12_at_12.51.20_PM_uvjwe3.jpg",
            title: " Rejection ",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862432/WhatsApp_Image_2025-08-22_at_4.37.22_PM_a5cofk.jpg",
            title: "Input Material",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862433/WhatsApp_Image_2025-08-22_at_5.02.27_PM_tjy9az.jpg",
            title: "Accept",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862574/WhatsApp_Image_2025-08-22_at_5.04.23_PM_wte5ss.jpg",
            title: " Rejection ",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862801/WhatsApp_Image_2025-08-22_at_5.05.43_PM_rnult1.jpg",
            title: "Input Material",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862801/WhatsApp_Image_2025-08-22_at_5.06.35_PM_zzkcms.jpg",
            title: "Accept",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862800/WhatsApp_Image_2025-08-22_at_5.07.28_PM_mtuvz1.jpg",
            title: " Rejection ",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },



          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862990/WhatsApp_Image_2025-08-22_at_5.07.28_PM_gliyn1.jpg",
            title: "Input Material",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862990/WhatsApp_Image_2025-08-22_at_5.11.28_PM_bhpsyx.jpg",
            title: "Accept",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755862991/WhatsApp_Image_2025-08-22_at_5.12.33_PM_f6pgcs.jpg",
            title: " Rejection ",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },






          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984685/WhatsApp_Image_2025-08-12_at_12.51.36_PM_vdkbfe.jpg",
            title: "Foxtail Millet",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984689/WhatsApp_Image_2025-08-12_at_12.51.49_PM_y0emie.jpg",
            title: "Banyard Millet",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984687/WhatsApp_Image_2025-08-12_at_12.52.02_PM_n5ajuh.jpg",
            title: "Kodo millet",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984688/WhatsApp_Image_2025-08-12_at_12.52.21_PM_wwzaom.jpg",
            title: "Little millets",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984689/WhatsApp_Image_2025-08-12_at_12.52.39_PM_uw0xjn.jpg",
            title: "Jowar",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754984687/WhatsApp_Image_2025-08-12_at_12.52.54_PM_hjpjjc.jpg",
            title: "Pearl Millet",
            details: {
              points: [
                "Advanced sorting ensures uniform grain size and purity",
                "Removes dust, stones, and immature seeds with high accuracy",
                "Enhances nutritional value retention during processing",
                "Supports gluten-free product manufacturing lines",
                "Ideal for modern food industries with clean-label focus",
              ],
              description: " ",
            },
          },




          
        ],
        recommended: [
          {
            image: "/img5.jpeg",
            title: "Swan 5 Chute 320 Channel",
          },
          {
            image: "/img7.jpeg",
            title: "Swan 600 Belt Type MS Frame",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 Chute 512 Channel",
          },
        ],
      },

      // Seeds
      {
        name: "Seeds",
        images: [
          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img16.png?updatedAt=1756188553769",
            title: "Poppy Seeds",
            details: {
              points: [
                "Sorted by size and color for uniform texture",
                "Graded for optimal oil extraction",
                "Premium quality sorted for baking and sweets",
                "Smaller seeds selected for enhanced crunch",
                "Grains sorted for even cooking in traditional dishes",
              ],
              description:
                "Poppy seeds are tiny, oil-rich seeds used for their nutty flavor in baking, sweets, and traditional curries, and are valued for their nutritional content.",
            },
          },
          {
            src: "/premium_photo-1674347954785-7604a0220776.avif",
            title: "Watermelon Seeds",
            details: {
              points: [
                "Sorted by size for even roasting",
                "Premium seeds selected for smooth texture",
                "Graded for optimal snack quality",
                "Smaller seeds selected for quick consumption",
                "Larger seeds suitable for extraction of oil",
              ],
              description:
                "Watermelon seeds can be roasted and eaten as a snack.",
            },
          },
          // {
          //   src: "/wp-1630312031523-scaled.webp",
          //   title: "Tamarind Seeds",
          //   details: {
          //     points: [
          //       "Sorted by size and shape for consistent roasting",
          //       "Graded for high-quality powder production",
          //       "Premium seeds selected for flavor and texture",
          //       "Used in traditional remedies based on seed size",
          //       "Larger seeds retain more flavor during roasting",
          //     ],
          //     description:
          //       "Tamarind seeds are hard seeds found inside tamarind pods, often roasted or ground into powder for use in traditional remedies and culinary preparations.",
          //   },
          // },
          {
            src: "/sesame-seeds.webp",
            title: "Sesame Seeds",
            details: {
              points: [
                "Sorted by color for premium quality",
                "Smaller seeds selected for finer texture in baking",
                "Graded by size for consistent oil extraction",
                "Black sesame seeds selected for stronger flavor",
                "Graded for smooth consistency in sweets and snacks",
              ],
              description:
                "Sesame seeds are small, nutritious seeds used in cooking, baking, and oil extraction, known for their nutty flavor and health benefits.",
            },
          },
          // {
          //   src: "/360_F_1198176902_njOkg8q4l8pFh8GHih4pqoWpPgEvRJlh.webp",
          //   title: "Fenugreek Seeds",
          //   details: {
          //     points: [
          //       "Sorted for bitter flavor intensity",
          //       "Graded by size for even cooking in spice blends",
          //       "Premium seeds selected for medicinal use",
          //       "Larger seeds offer more flavor for pickles",
          //       "Grains sorted for uniformity in flavor extraction",
          //     ],
          //     description:
          //       "Fenugreek seeds are aromatic and bitter seeds commonly used in Indian cooking and traditional medicine for their health benefits.",
          //   },
          // },
          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img15.png?updatedAt=1756188506842",
            title: "Mustdard Seeds",
            details: {
              points: [
                "Sorted by size for consistency in oil extraction",
                "Graded for premium quality in culinary use",
                "Small seeds ideal for bird feed and oil extraction",
                "Larger seeds graded for consistency in cooking",
                "Nutritionally sorted for high linoleic acid content",
              ],
              description:
                "Niger seeds are tiny oil-rich seeds used for bird feed and cooking oil, valued for their nutritional properties and culinary use in select cuisines.",
            },
          },
          {
            src: "/360_F_422437204_ZAa0YLQ6LEPm4dh98Cktnk84BLkfWjvw.webp",
            title: "Sunflower Seeds",
            details: {
              points: [
                "Sorted by size for uniform roasting",
                "Premium seeds selected for high-quality oil",
                "Smaller seeds graded for better snack consistency",
                "Grains sorted for optimal heart health benefits",
                "Larger seeds preferred for oil production",
              ],
              description:
                "Sunflower seeds are nutrient-dense seeds used as a snack or pressed for oil, popular for their health benefits and crunchy texture.",
            },
          },
          {
            src: "/360_F_1224560567_kpVqdkII4hP9FcRsFL25SqXNG58EOhOB.webp",
            title: "Pumpkin Seeds",
            details: {
              points: [
                "Sorted by size for even roasting",
                "Premium seeds selected for smooth texture in snacks",
                "Larger seeds graded for pumpkin seed oil extraction",
                "Smaller seeds ideal for salads and granola",
                "Graded for nutritional content such as zinc and magnesium",
              ],
              description:
                "Pumpkin seeds, or pepitas, are edible seeds packed with nutrients and are often enjoyed roasted or added to a variety of dishes.",
            },
          },
          {
            src: "/fennel-seeds-top-view_271326-7.webp",
            title: "Fennel Seeds",
            details: {
              points: [
                "Sorted for consistency in flavor intensity",
                "Graded for uniform texture in herbal teas",
                "Premium seeds selected for digestive benefits",
                "Smaller seeds ideal for seasoning and flavor",
                "Larger seeds suitable for medicinal preparations",
              ],
              description:
                "Fennel seeds are aromatic seeds used for seasoning, digestion, and freshening breath, commonly found in Indian cuisine and teas.",
            },
          },

          // {
          //   src: "/A2418245416ef4df5b3a985ff14dd9c6bk.png_300x300.webp",
          //   title: "Almond Seeds",
          //   details: {
          //     points: [
          //       "Sorted by size and flavor intensity",
          //       "Graded for premium quality in snacks and desserts",
          //       "Used in milk production from larger seeds",
          //       "Smaller seeds are ideal for roasting and snacking",
          //       "Rich in healthy fats and vitamin E, sorted for quality",
          //     ],
          //     description:
          //       "Almond seeds are nutrient-rich edible seeds valued for their flavor and health benefits, commonly used in desserts, snacks, and almond milk.",
          //   },
          // },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755232796/WhatsApp_Image_2025-08-14_at_2.42.49_PM_vaol1p.jpg",
            title: "Flaxseed",
            details: {
              points: [
                "Sorted for high omega-3 content",
                "Graded for texture consistency in baking",
                "Premium seeds selected for oil extraction",
                "Smaller seeds ideal for smoothies and cereals",
                "Larger seeds chosen for greater nutritional density",
              ],
              description:
                "Flaxseeds are tiny seeds known for their high omega-3 and fiber content, often added to foods for their nutritional and digestive benefits.",
            },
          },
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755233035/WhatsApp_Image_2025-08-14_at_2.44.18_PM_nnyhcv.jpg",
            title: "Yellow Mustard",
            details: {
              points: [
                "Sorted by size for consistent flavor intensity",
                "Graded for oil extraction based on seed size",
                "Smaller seeds ideal for pickles and tempering",
                "Larger seeds selected for mustard paste production",
                "Rich in omega-3 fatty acids and selenium, sorted for quality",
              ],
              description:
                "Mustard seeds are flavorful seeds used in cooking and oil production, known for their pungent taste and versatility in various cuisines.",
            },
          },
          {
            src: "/360_F_81663460_gpyKbEb3Rwd5eo3U9mNwlZu6Fhr7Wlh3.webp",
            title: "Coriander Seeds",
            details: {
              points: [
                "Sorted for consistency in flavor intensity",
                "Graded for premium quality in spice blends",
                "Used whole or ground in culinary dishes",
                "Selected for medicinal properties based on size",
                "Aids digestion and helps with flavor extraction",
              ],
              description:
                "Coriander seeds are fragrant, dried seeds used as a spice in culinary dishes and spice mixes, known for their flavor and digestive benefits.",
            },
          },
          {
            src: "https://ik.imagekit.io/bxhlcmkcf/Urent/img5.png?updatedAt=1756188612574",
            title: "Chia Seeds",
            details: {
              points: [
                "Sorted by size and color for uniform texture",
                "Graded for optimal oil extraction",
                "Premium quality sorted for baking and sweets",
                "Smaller seeds selected for enhanced crunch",
                "Grains sorted for even cooking in traditional dishes",
              ],
              description:
                "Chai Seeds are tiny, oil-rich seeds used for their nutty flavor in baking, sweets, and traditional curries, and are valued for their nutritional content.",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Swan 300 belt type ms frame",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm belt type machine",
          },
          {
            image: "/img8.jpeg",
            title: "Swan 8 chute 512 channel",
          },
        ],
      },

      // Pepper
      {
        name: "Pepper",
        images: [
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754985673/WhatsApp_Image_2025-08-12_at_12.56.54_PM_kksbzv.jpg", // Add image path if available
            title: "Input Material",
            details: {
              points: [
                "Removes immature, discolored, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade spice output",
                "Enhances processing efficiency and minimizes manual sorting requirements",
                "Supports high-capacity throughput for commercial spice processing facilities",
                "Preserves natural flavor, aroma, and essential oil content",
              ],
              description:
                "Pepper is a widely used spice known for its sharp flavor and aroma, commonly used in seasoning and traditional remedies around the world.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754985669/WhatsApp_Image_2025-08-12_at_12.57.07_PM_ilnrfn.jpg", // Add image path if available
            title: " Accept",
            details: {
              points: [
                "Removes immature, discolored, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade spice output",
                "Enhances processing efficiency and minimizes manual sorting requirements",
                "Supports high-capacity throughput for commercial spice processing facilities",
                "Preserves natural flavor, aroma, and essential oil content",
              ],
              description:
                "Pepper is a widely used spice known for its sharp flavor and aroma, commonly used in seasoning and traditional remedies around the world.",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754971135/WhatsApp_Image_2025-08-11_at_7.10.02_PM_tdprfa.jpg", // Add image path if available
            title: "Rejection",
            details: {
              points: [
                "Removes immature, discolored, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade spice output",
                "Enhances processing efficiency and minimizes manual sorting requirements",
                "Supports high-capacity throughput for commercial spice processing facilities",
                "Preserves natural flavor, aroma, and essential oil content",
              ],
              description:
                "Pepper is a widely used spice known for its sharp flavor and aroma, commonly used in seasoning and traditional remedies around the world.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754985669/WhatsApp_Image_2025-08-12_at_12.57.21_PM_r7wieo.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes immature, discolored, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade spice output",
                "Enhances processing efficiency and minimizes manual sorting requirements",
                "Supports high-capacity throughput for commercial spice processing facilities",
                "Preserves natural flavor, aroma, and essential oil content",
              ],
              description:
                "Pepper is a widely used spice known for its sharp flavor and aroma, commonly used in seasoning and traditional remedies around the world.",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754971132/WhatsApp_Image_2025-08-11_at_7.10.01_PM_2_oenc5r.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes immature, discolored, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade spice output",
                "Enhances processing efficiency and minimizes manual sorting requirements",
                "Supports high-capacity throughput for commercial spice processing facilities",
                "Preserves natural flavor, aroma, and essential oil content",
              ],
              description:
                "Pepper is a widely used spice known for its sharp flavor and aroma, commonly used in seasoning and traditional remedies around the world.",
            },
          },
        ],
        recommended: [
          {
            image: "/img10.jpeg",
            title: "Swan 10 Chute 640 Channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img12.jpeg",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
        ],
      },

      //Chillies
      {
        name: "Chillies",
        images: [
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754985253/WhatsApp_Image_2025-08-12_at_12.54.10_PM_j82ghm.jpg", // Add image path if available
            title: "Input Material",
            details: {
              points: [
                "Removes discolored, damaged, and foreign particles using AI and vision-based detection",
                "Ensures consistent size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial spice and chilli processing plants",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754985254/WhatsApp_Image_2025-08-12_at_12.54.23_PM_hiye8n.jpg", // Add image path if available
            title: "Accept",
            details: {
              points: [
                "Removes discolored, damaged, and foreign particles using AI and vision-based detection",
                "Ensures consistent size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial spice and chilli processing plants",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755152046/WhatsApp_Image_2025-08-14_at_11.38.59_AM_axw63k.jpg", // Add image path if available
            title: "Rejection",
            details: {
              points: [
                "Removes discolored, damaged, and foreign particles using AI and vision-based detection",
                "Ensures consistent size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial spice and chilli processing plants",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755071236/WhatsApp_Image_2025-08-13_at_1.01.13_PM_uvmlpk.jpg", // Add image path if available
            title: "Input Material",
            details: {
              points: [
                "Removes discolored, damaged, and foreign particles using AI and vision-based detection",
                "Ensures consistent size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial spice and chilli processing plants",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755861988/WhatsApp_Image_2025-08-22_at_4.37.22_PM_h3y5xk.jpg", // Add image path if available
            title: "Accept",
            details: {
              points: [
                "Removes discolored, damaged, and foreign particles using AI and vision-based detection",
                "Ensures consistent size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial spice and chilli processing plants",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755071236/WhatsApp_Image_2025-08-13_at_1.16.30_PM_vten9h.jpg", // Add image path if available
            title: "Rejection",
            details: {
              points: [
                "Removes discolored, damaged, and foreign particles using AI and vision-based detection",
                "Ensures consistent size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial spice and chilli processing plants",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754985257/WhatsApp_Image_2025-08-12_at_12.55.37_PM_fzlzme.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes discolored, damaged, and foreign particles using AI and vision-based detection",
                "Ensures consistent size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial spice and chilli processing plants",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755233642/WhatsApp_Image_2025-08-14_at_2.48.18_PM_hc1m47.jpg", // Add image path if available
            title: "Rejection",
            details: {
              points: [
                "Removes discolored, damaged, and foreign particles using AI and vision-based detection",
                "Ensures consistent size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial spice and chilli processing plants",
              ],
              description: "",
            },
          },
        ],
        recommended: [
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img76.png?updatedAt=1756188644236",
            title: "Swan 10 Chute 640 Channel",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img75.png?updatedAt=1756188642786",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img74.png?updatedAt=1756188642522",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
          {
            image:
              "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875490/256_channel_4_chute_wuw2wp.jpg",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img73.png?updatedAt=1756188641418",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
        ],
      },

      // Guar Gram
      {
        name: "Guar Gram",
        images: [
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987080/WhatsApp_Image_2025-08-12_at_1.00.18_PM_mgq8bv.jpg", // Add image path if available
            title: "Input Material",
            details: {
              points: [
                "Removes impurities, discolored seeds, and foreign matter using AI and vision-based detection",
                "Ensures uniform size, shape, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual labor requirements",
                "Supports high-capacity throughput for commercial guar processing plants",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987087/WhatsApp_Image_2025-08-12_at_1.00.36_PM_dh3zin.jpg", // Add image path if available
            title: "Accept",
            details: {
              points: [
                "Removes impurities, discolored seeds, and foreign matter using AI and vision-based detection",
                "Ensures uniform size, shape, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual labor requirements",
                "Supports high-capacity throughput for commercial guar processing plants",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987085/WhatsApp_Image_2025-08-12_at_1.01.25_PM_rips1q.jpg", // Add image path if available
            title: "Rejection",
            details: {
              points: [
                "Removes impurities, discolored seeds, and foreign matter using AI and vision-based detection",
                "Ensures uniform size, shape, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual labor requirements",
                "Supports high-capacity throughput for commercial guar processing plants",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987085/WhatsApp_Image_2025-08-12_at_1.01.05_PM_aqb2v2.jpg", // Add image path if available
            title: "Accept",
            details: {
              points: [
                "Removes impurities, discolored seeds, and foreign matter using AI and vision-based detection",
                "Ensures uniform size, shape, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual labor requirements",
                "Supports high-capacity throughput for commercial guar processing plants",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987085/WhatsApp_Image_2025-08-12_at_1.01.49_PM_cedpxe.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes impurities, discolored seeds, and foreign matter using AI and vision-based detection",
                "Ensures uniform size, shape, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual labor requirements",
                "Supports high-capacity throughput for commercial guar processing plants",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754987085/WhatsApp_Image_2025-08-12_at_1.01.48_PM_i0ikaw.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes impurities, discolored seeds, and foreign matter using AI and vision-based detection",
                "Ensures uniform size, shape, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual labor requirements",
                "Supports high-capacity throughput for commercial guar processing plants",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754988214/WhatsApp_Image_2025-08-12_at_1.06.38_PM_urswmu.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes impurities, discolored seeds, and foreign matter using AI and vision-based detection",
                "Ensures uniform size, shape, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual labor requirements",
                "Supports high-capacity throughput for commercial guar processing plants",
              ],
              description: "",
            },
          },
        ],
        recommended: [
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img76.png?updatedAt=1756188644236",
            title: "Swan 10 Chute 640 Channel",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img75.png?updatedAt=1756188642786",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img74.png?updatedAt=1756188642522",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
          {
            image:
              "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875490/256_channel_4_chute_wuw2wp.jpg",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
        ],
      },

      // Cotton Seed
      {
        name: "Cotton Seed",
        images: [
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754986102/WhatsApp_Image_2025-08-12_at_12.58.36_PM_m0zfc1.jpg", // Add image path if available
            title: "Input Material",
            details: {
              points: [
                "Removes damaged seeds, husk, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and minimizes manual sorting efforts",
                "Supports high-capacity throughput for commercial seed processing facilities",
              ],
              description:
                "Pepper is a widely used spice known for its sharp flavor and aroma, commonly used in seasoning and traditional remedies around the world.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754986102/WhatsApp_Image_2025-08-12_at_12.58.54_PM_ylkxk7.jpg", // Add image path if available
            title: "Accept",
            details: {
              points: [
                "Removes damaged seeds, husk, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and minimizes manual sorting efforts",
                "Supports high-capacity throughput for commercial seed processing facilities",
              ],
              description: "",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754986103/WhatsApp_Image_2025-08-12_at_12.59.07_PM_nzgk1n.jpg", // Add image path if available
            title: "Rejection",
            details: {
              points: [
                "Removes damaged seeds, husk, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and minimizes manual sorting efforts",
                "Supports high-capacity throughput for commercial seed processing facilities",
              ],
              description: "",
            },
          },


          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1754986103/WhatsApp_Image_2025-08-12_at_12.59.23_PM_okffcq.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes damaged seeds, husk, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and minimizes manual sorting efforts",
                "Supports high-capacity throughput for commercial seed processing facilities",
              ],
              description: "",
            },
          },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Swan 10 Chute 640 Channel",
          },
          {
            image: "/img11.jpeg",
            title: "Swan 600 mm Belt Type Machine",
          },
          {
            image: "/img7.jpeg",
            title: "Swan 1 Chute 64 Channel MS/SS Frame",
          },
          // {
          //   image:
          //     "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746876257/600mm_belt_conveyor_kk4wj4.jpg",
          //   title: "Swan 1 Chute 64 Channel MS/SS Frame",
          // },
        ],
      },

      // Ragi
      {
        name: "Ragi",
        images: [
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754816714/WhatsApp_Image_2025-08-06_at_7.24.21_PM_fccrsv.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes stones, husk particles, and discolored grains using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial millet processing plants",
              ],
              description: " ",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754816715/WhatsApp_Image_2025-08-06_at_7.24.33_PM_hvpobg.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes stones, husk particles, and discolored grains using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial millet processing plants",
              ],
              description: " ",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754816715/WhatsApp_Image_2025-08-06_at_7.24.22_PM_atzigp.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes stones, husk particles, and discolored grains using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial millet processing plants",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754816715/WhatsApp_Image_2025-08-06_at_7.24.23_PM_rwchtm.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes stones, husk particles, and discolored grains using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial millet processing plants",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754816715/WhatsApp_Image_2025-08-06_at_7.24.22_PM_1_mlrlq5.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Removes stones, husk particles, and discolored grains using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial millet processing plants",
              ],
              description: " ",
            },
          },
        ],
        recommended: [
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img76.png?updatedAt=1756188644236",
            title: "swan 5 chute 320 channel",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img75.png?updatedAt=1756188642786",
            title: "Swan 300 mm belt type machine",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img74.png?updatedAt=1756188642522",
            title: "Swan 10 chute 640 channel",
          },

          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img73.png?updatedAt=1756188641418",
            title: "Swan 10 chute 640 channel",
          },
        ],
      },

      {
        name: "Wheat",
        images: [
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754967949/WhatsApp_Image_2025-08-11_at_7.07.05_PM_eajf80.jpg",
            title: "",
            details: {
              points: [
                "Removes stones, damaged kernels, and foreign particles using AI and vision-based detection",
                "Ensures uniform grain size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial grain processing plants",
              ],
              description:
                "High-quality wheat is sorted to remove impurities and ensure uniform grain size, resulting in a consistent and high-quality product.",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754967952/WhatsApp_Image_2025-08-11_at_7.07.04_PM_2_o409d6.jpg",
            title: "",
            details: {
              points: [
                "Removes stones, damaged kernels, and foreign particles using AI and vision-based detection",
                "Ensures uniform grain size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial grain processing plants",
              ],
              description:
                "Wheat sorting involves removing broken kernels and foreign materials, ensuring high purity and consistency in the product.",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754967966/WhatsApp_Image_2025-08-11_at_7.07.04_PM_1_crr7n3.jpg",
            title: "",
            details: {
              points: [
                "Removes stones, damaged kernels, and foreign particles using AI and vision-based detection",
                "Ensures uniform grain size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial grain processing plants",
              ],
              description:
                "Color sorting ensures that only wheat grains with consistent color are selected, improving the visual appeal and uniformity of the product.",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754967954/WhatsApp_Image_2025-08-11_at_7.07.04_PM_uubvl8.jpg",
            title: "",
            details: {
              points: [
                "Removes stones, damaged kernels, and foreign particles using AI and vision-based detection",
                "Ensures uniform grain size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces dependency on manual sorting",
                "Supports high-capacity throughput for commercial grain processing plants",
              ],
              description:
                "Color sorting ensures that only wheat grains with consistent color are selected, improving the visual appeal and uniformity of the product.",
            },
          },
        ],
        recommended: [
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img76.png?updatedAt=1756188644236",
            title: "swan 5 chute 320 channel",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img75.png?updatedAt=1756188642786",
            title: "Swan 300 mm belt type machine",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img74.png?updatedAt=1756188642522",
            title: "Swan 10 chute 640 channel",
          },

          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img73.png?updatedAt=1756188641418",
            title: "Swan 10 chute 640 channel",
          },
        ],
      },

      ,
      //Done
      {
        name: "Maize",
        images: [
          {
            src: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754751547/WhatsApp_Image_2025-08-09_at_7.34.54_PM_zsvuj0.jpg", // Add image path if available
            title: "Input Material",
            details: {
              points: [
                "Removes damaged kernels, husk remnants, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and minimizes manual sorting requirements",
                "Supports high-capacity throughput for commercial grain processing plants",
              ],
              description:
                "Maize, commonly known as corn, is a versatile grain crop used globally for food, animal feed, and industrial purposes like biofuel and starch production.",
            },
          },

          {
            src: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754751547/WhatsApp_Image_2025-08-09_at_7.35.10_PM_gn2wsl.jpg", // Add image path if available
            title: " Accept",
            details: {
              points: [
                "Removes damaged kernels, husk remnants, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and minimizes manual sorting requirements",
                "Supports high-capacity throughput for commercial grain processing plants",
              ],
              description:
                "Maize, commonly known as corn, is a versatile grain crop used globally for food, animal feed, and industrial purposes like biofuel and starch production.",
            },
          },

          {
            src: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754751547/WhatsApp_Image_2025-08-09_at_7.35.24_PM_tuy2pd.jpg", // Add image path if available
            title: " Rejection",
            details: {
              points: [
                "Removes damaged kernels, husk remnants, and foreign particles using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and minimizes manual sorting requirements",
                "Supports high-capacity throughput for commercial grain processing plants",
              ],
              description:
                "Maize, commonly known as corn, is a versatile grain crop used globally for food, animal feed, and industrial purposes like biofuel and starch production.",
            },
          },
        ],
        recommended: [
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img76.png?updatedAt=1756188644236",
            title: "swan 5 chute 320 channel",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img75.png?updatedAt=1756188642786",
            title: "Swan 300 mm belt type machine",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img74.png?updatedAt=1756188642522",
            title: "Swan 10 chute 640 channel",
          },

          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img73.png?updatedAt=1756188641418",
            title: "Swan 10 chute 640 channel",
          },
        ],
      },

      //Done3
      // {
      //   name: "Beans",
      //   images: [
      //     {
      //       src: "/coffee-beans-and-ground-coffee.webp", // Add image path if available
      //       title: "Coffee Beans",
      //       details: {
      //         points: [
      //           "Sorted to remove defective or damaged beans, ensuring only high-quality beans are used",
      //           "Varieties like Arabica and Robusta are sorted to ensure consistency in size and flavor",
      //           "Roast levels are carefully chosen based on sorted beans to enhance flavor profile",
      //           "Efficient sorting ensures uniformity in caffeine and antioxidant levels for brewing",
      //           "Beans are sorted to ensure optimal flavor and freshness for coffee beverages",
      //         ],
      //         description:
      //           "Coffee beans are roasted seeds of the Coffea plant, widely consumed for their bold flavor and stimulating caffeine content. Sorting ensures that only the best beans are used for production, enhancing the coffee experience.",
      //       },
      //     },
      //   ],
      //   recommended: [
      //     {
      //       image: "/img10.jpeg",
      //       title: "Swan 10 Chute 640 Channel",
      //     },
      //     {
      //       image: "/img11.jpeg",
      //       title: "Swan 600 mm Belt Type Machine",
      //     },
      //     {
      //       image: "/img12.jpeg",
      //       title: "Swan 1 Chute 64 Channel MS/SS Frame",
      //     },
      //   ],
      // },

      // {
      //   name: "Jeera",
      //   images: [
      //     {
      //       src: "/idsjlnllbp10dhznfrhn.webp", // Add image path if available
      //       title: "Jeera",
      //       details: {
      //         points: [
      //           "Efficient sorting of cumin seeds for uniform size and quality",
      //           "Maximizes flavor and aroma retention during the sorting process",
      //           "Prevents contamination by separating damaged or non-viable seeds",
      //           "Retains high nutritional value and medicinal properties of the seeds",
      //           "Widely used in culinary dishes, spice blends, and health products",
      //         ],
      //         description:
      //           "Jeera, or cumin seeds, are a staple spice known for their distinct aroma and digestive benefits, widely used in cooking and traditional remedies. Advanced sorting systems ensure consistent quality and flavor, enhancing both culinary and medicinal benefits.",
      //       },
      //     },
      //   ],
      //   recommended: [
      //     {
      //       image: "/img1.jpeg",
      //       title: "Swan 300 Belt Type MS Frame",
      //     },
      //     {
      //       image: "/img11.jpeg",
      //       title: "Swan 600 mm Belt Type Machine",
      //     },
      //     {
      //       image: "/img8.jpeg",
      //       title: "Swan 8 Chute 512 Channel",
      //     },
      //   ],
      // },

      // Done 1
      // {
      //   name: "Clove",
      //   images: [
      //     {
      //       src: "/360_F_77814928_uAl4WZvHATAcXG0kf5KvTSAQ6VdMOTk9.webp", // Add image path if available
      //       title: "Clove",
      //       details: {
      //         points: [
      //           "Efficient sorting of clove buds to ensure uniform size and quality",
      //           "Maximizes extraction of flavor and medicinal properties",
      //           "Prevents contamination by separating damaged or non-viable cloves",
      //           "Retains high levels of antioxidants during sorting process",
      //           "Widely used in culinary dishes, spice blends, and health products",
      //         ],
      //         description:
      //           "Cloves are aromatic flower buds known for their pungent flavor and medicinal properties. Advanced sorting systems ensure uniformity, maximizing both their culinary and medicinal benefits, while improving efficiency in spice production.",
      //       },
      //     },
      //   ],
      //   recommended: [
      //     {
      //       image: "/img1.jpeg",
      //       title: "Swan 300 Belt Type MS Frame",
      //     },
      //     {
      //       image: "/img5.jpeg",
      //       title: "Swan 5 Chute 320 Channel",
      //     },
      //     {
      //       image: "/img8.jpeg",
      //       title: "Swan 8 Chute 512 Channel",
      //     },
      //   ],
      // },

      // Done
      // {
      //   name: "Cardamom",
      //   images: [
      //     {
      //       src: "/360_F_47263334_Ib96bxeudiRvgLnTVK7Za5fGbW9AIi4Q.webp", // Add image path if available
      //       title: "Cardamom",
      //       details: {
      //         points: [
      //           "Aromatic spice from the seeds of the cardamom plant",
      //           "Available in green (most common) and black varieties",
      //           "Used in both sweet and savory dishes",
      //           "Common in Indian, Middle Eastern, and Scandinavian cuisines",
      //           "Known for its strong, sweet, and slightly spicy flavor",
      //         ],
      //         description:
      //           "Cardamom is a highly aromatic spice used in cooking, desserts, and beverages, valued for its unique flavor profile and digestive benefits.",
      //       },
      //     },
      //   ],
      //   recommended: [
      //     {
      //       image: "/img1.jpeg",
      //       title: "swan 300 belt type ms frame",
      //     },
      //     {
      //       image: "/img5.jpeg",
      //       title: "Swan 5 Chute 320 Channel",
      //     },
      //     {
      //       image: "/img8.jpeg",
      //       title: "Swan 8 chute 512 channel",
      //     },
      //   ],
      // },

      // {
      //   name: "Fruit",
      //   images: [
      //     {
      //       src: "/CoffeeFruitHeader.webp", // Add image path if available
      //       title: "Coffee Fruit",
      //       details: {
      //         points: [
      //           "Optimized sorting of coffee fruit for maximum yield",
      //           "Efficient removal of non-viable fruit and contaminants",
      //           "High-precision sorting to enhance coffee bean extraction",
      //           "Rich in antioxidants, supporting health and wellness product lines",
      //           "Used in health supplements for its antioxidant and metabolic-boosting properties",
      //         ],
      //         description:
      //           "Coffee fruit, or coffee cherry, is the outer fruit that encases the coffee beans. With advanced sorting technology, it enhances coffee bean extraction while retaining valuable antioxidants that can be used in health supplements, supporting both coffee production and wellness markets.",
      //       },
      //     },
      //   ],
      //   recommended: [
      //     {
      //       image: "/img1.jpeg",
      //       title: "Swan 300 Belt Type MS Frame",
      //     },
      //     {
      //       image: "/img5.jpeg",
      //       title: "Swan 5 Chute 320 Channel",
      //     },
      //     {
      //       image: "/img8.jpeg",
      //       title: "Swan 8 Chute 512 Channel",
      //     },
      //   ],
      // },
      // {
      //   name: "Corn Flakes",
      //   images: [
      //     {
      //       src: "/13749976-Cornflakes-corn-flakes-picture-filling.webp", // Add image path if available
      //       title: "Corn Flakes",
      //       details: {
      //         points: [
      //           "Efficient sorting of corn kernels for uniform size and quality",
      //           "Maximizes the crisp texture and taste during production",
      //           "Separates damaged or imperfect kernels for higher-quality flakes",
      //           "Ensures uniform fortification with vitamins and minerals",
      //           "Widely used as a nutritious breakfast option with milk or yogurt",
      //         ],
      //         description:
      //           "Corn flakes are a popular breakfast cereal made from toasted cornmeal. Advanced sorting technology ensures consistency in texture and flavor while maximizing the nutritional value of each serving.",
      //       },
      //     },
      //   ],
      //   recommended: [
      //     {
      //       image: "/img5.jpeg",
      //       title: "Swan 5 Chute 320 Channel",
      //     },
      //     {
      //       image: "/img7.jpeg",
      //       title: "Swan 600 Belt Type MS Frame",
      //     },
      //     {
      //       image: "/img8.jpeg",
      //       title: "Swan 8 Chute 512 Channel",
      //     },
      //   ],
      // },

      // {
      //   name: "Grain",
      //   images: [
      //     {
      //       src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754814478/WhatsApp_Image_2025-08-06_at_7.24.07_PM_mbfh9r.jpg", // Add image path if available
      //       title: " Input Material ",
      //       details: {
      //         points: [
      //           "Precision sorting technology optimized for grains like sorghum",
      //           "Removes impurities and defects using AI and vision-based detection",
      //           "Ensures uniform quality and enhances food-grade processing efficiency",
      //           "Supports high-capacity throughput for commercial grain processing lines",
      //           "Ideal for gluten-free product applications in Indian and African markets",
      //         ],
      //         description:
      //           "Jowar, or sorghum, is a highly nutritious gluten-free grain, commonly used in various dishes, including flatbreads, porridges, and as flour in many cuisines.",
      //       },
      //     },
      //     {
      //       src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754814668/WhatsApp_Image_2025-08-06_at_7.24.08_PM_oljydt.jpg", // Add image path if available
      //       title: " Rejection",
      //       details: {
      //         points: [
      //           "Precision sorting technology optimized for grains like sorghum",
      //           "Removes impurities and defects using AI and vision-based detection",
      //           "Ensures uniform quality and enhances food-grade processing efficiency",
      //           "Supports high-capacity throughput for commercial grain processing lines",
      //           "Ideal for gluten-free product applications in Indian and African markets",
      //         ],
      //         description:
      //           "Jowar, or sorghum, is a highly nutritious gluten-free grain, commonly used in various dishes, including flatbreads, porridges, and as flour in many cuisines.",
      //       },
      //     },
      //     {
      //       src: "/SizeCopy_8ead0bdc-f782-4589-8c8b-9419c20e7687.webp", // Add image path if available
      //       title: " Accept",
      //       details: {
      //         points: [
      //           "Precision sorting technology optimized for grains like sorghum",
      //           "Removes impurities and defects using AI and vision-based detection",
      //           "Ensures uniform quality and enhances food-grade processing efficiency",
      //           "Supports high-capacity throughput for commercial grain processing lines",
      //           "Ideal for gluten-free product applications in Indian and African markets",
      //         ],
      //         description:
      //           "Jowar, or sorghum, is a highly nutritious gluten-free grain, commonly used in various dishes, including flatbreads, porridges, and as flour in many cuisines.",
      //       },
      //     },
      //   ],
      //   recommended: [
      //     {
      //       image: "/img5.jpeg",
      //       title: "swan 5 chute 320 channel",
      //     },
      //     {
      //       image: "/img1.jpeg",
      //       title: "Swan 300 mm belt type machine",
      //     },
      //     {
      //       image: "/img10.jpeg",
      //       title: "Swan 10 chute 640 channel",
      //     },
      //   ],
      // },

      {
        name: "Pearls",
        images: [
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754975340/WhatsApp_Image_2025-08-12_at_10.31.05_AM_ux8vyr.jpg",
            title: " Input Material ",
            details: {
              points: [
                "Removes damaged, discolored, or defective pearls using AI and vision-based detection",
                "Ensures uniform size, shape, and color for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial production lines",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754813095/WhatsApp_Image_2025-08-06_at_7.24.04_PM_1_xgmhqp.jpg",
            title: " Accept",
            details: {
              points: [
                "Removes damaged, discolored, or defective pearls using AI and vision-based detection",
                "Ensures uniform size, shape, and color for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial production lines",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754813400/WhatsApp_Image_2025-08-06_at_7.24.05_PM_v3nyya.jpg",
            title: "",
            details: {
              points: [
                "Removes damaged, discolored, or defective pearls using AI and vision-based detection",
                "Ensures uniform size, shape, and color for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial production lines",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755235841/WhatsApp_Image_2025-08-14_at_2.58.51_PM_twvhw9.jpg",
            title: " Input Material ",
            details: {
              points: [
                "Removes damaged, discolored, or defective pearls using AI and vision-based detection",
                "Ensures uniform size, shape, and color for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial production lines",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755235835/WhatsApp_Image_2025-08-14_at_2.59.12_PM_mzvnfw.jpg",
            title: " Accept",
            details: {
              points: [
                "Removes damaged, discolored, or defective pearls using AI and vision-based detection",
                "Ensures uniform size, shape, and color for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial production lines",
              ],
              description: " ",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755235835/WhatsApp_Image_2025-08-14_at_2.59.02_PM_mgzucu.jpg",
            title: " Rejection",
            details: {
              points: [
                "Removes damaged, discolored, or defective pearls using AI and vision-based detection",
                "Ensures uniform size, shape, and color for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial production lines",
              ],
              description: " ",
            },
          },
        ],
        recommended: [
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img76.png?updatedAt=1756188644236",
            title: "swan 5 chute 320 channel",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img75.png?updatedAt=1756188642786",
            title: "Swan 300 mm belt type machine",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img74.png?updatedAt=1756188642522",
            title: "Swan 10 chute 640 channel",
          },

          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img73.png?updatedAt=1756188641418",
            title: "Swan 10 chute 640 channel",
          },
        ],
      },

      //done
      {
        name: "Dehydrated onion",
        images: [
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755149568/WhatsApp_Image_2025-08-13_at_4.02.27_PM_fahxcg.jpg", // Add image path if available
            title: "Input Material",
            details: {
              points: [
                "Removes impurities, foreign particles, and discolored pieces using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial dehydrated onion production",
                "Preserves natural flavor, aroma, and nutritional content",
              ],
              description:
                "Dehydrated onion is made by drying fresh onions to preserve their flavor and aroma. It provides an easy-to-use, long-lasting alternative to fresh onions.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755149568/WhatsApp_Image_2025-08-13_at_4.02.35_PM_ovl2vw.jpg", // Add image path if available
            title: " Accept ",
            details: {
              points: [
                "Removes impurities, foreign particles, and discolored pieces using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial dehydrated onion production",
                "Preserves natural flavor, aroma, and nutritional content",
              ],
              description:
                "Dehydrated potato peel is a nutritious, eco-friendly option for adding fiber and antioxidants to various dishes, reducing food waste in the process.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755149568/WhatsApp_Image_2025-08-13_at_4.02.41_PM_ujvirv.jpg", // Add image path if available
            title: " Rejection ",
            details: {
              points: [
                "Removes impurities, foreign particles, and discolored pieces using AI and vision-based detection",
                "Ensures uniform size, color, and quality for premium-grade output",
                "Enhances processing efficiency and reduces manual sorting requirements",
                "Supports high-capacity throughput for commercial dehydrated onion production",
                "Preserves natural flavor, aroma, and nutritional content",
              ],
              description:
                "Dehydrated garlic is a potent, shelf-stable form of garlic that’s easy to store and use, making it an essential ingredient for adding robust flavor to meals.",
            },
          },
        ],
        recommended: [
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img76.png?updatedAt=1756188644236",
            title: "swan 5 chute 320 channel",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img75.png?updatedAt=1756188642786",
            title: "Swan 300 mm belt type machine",
          },
          {
            image:
              "https://ik.imagekit.io/bxhlcmkcf/Urent/img74.png?updatedAt=1756188642522",
            title: "Swan 10 chute 640 channel",
          },

          {
            image:
              "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875532/320_Channel_5_chute_pyq62s.jpg",
            title: "Swan 10 chute 640 channel",
          },
        ],
      },
    ],
  },
  {
    id: "plastic",
    title: "Plastic Waste Sorting",
    image:
      "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072465/WhatsApp_Image_2025-08-13_at_1.25.08_PM_fenthf.jpg",
    icon: "♻️",
    items: [
      {
        name: "Plastic and Minerals",
        images: [
          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072465/WhatsApp_Image_2025-08-13_at_1.25.08_PM_fenthf.jpg", // Add image path if available
            title: " Input Material",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072466/WhatsApp_Image_2025-08-13_at_1.25.28_PM_boceya.jpg", // Add image path if available
            title: " Accept",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755072466/WhatsApp_Image_2025-08-13_at_1.25.17_PM_us1iq2.jpg", // Add image path if available
            title: " Rejection",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754817173/WhatsApp_Image_2025-08-06_at_7.24.20_PM_1_jlz3sx.jpg", // Add image path if available
            title: " Accept ",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754817173/WhatsApp_Image_2025-08-06_at_7.24.20_PM_v0ugzw.jpg", // Add image path if available
            title: " Rejection",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754817790/WhatsApp_Image_2025-08-06_at_7.24.25_PM_msnhzq.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755931982/WhatsApp_Image_2025-08-23_at_12.20.23_PM_aofayp.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                // "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "",
            },
          },


          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755931982/WhatsApp_Image_2025-08-23_at_12.20.54_PM_dh9hfr.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                // "Enhances efficiency in plastic, metal, and e-waste processing lines",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754817496/WhatsApp_Image_2025-08-06_at_7.24.23_PM_zjjrxl.jpg", // Add image path if available
            title: " Input Material ",
            details: {
              points: [
                "High-quality natural and engineered stones for construction and design",
                "Offers strength, durability, and long-lasting performance",
                "Available in granite, marble, limestone, sandstone, and more",
                "Enhances aesthetics in flooring, walls, monuments, and landscaping",
              ],
              description: "",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754817502/WhatsApp_Image_2025-08-06_at_7.24.24_PM_hpww4s.jpg", // Add image path if available
            title: " Accept",
            details: {
              points: [
                "High-quality natural and engineered stones for construction and design",
                "Offers strength, durability, and long-lasting performance",
                "Available in granite, marble, limestone, sandstone, and more",
                "Enhances aesthetics in flooring, walls, monuments, and landscaping",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754817501/WhatsApp_Image_2025-08-06_at_7.24.24_PM_1_onrxjc.jpg", // Add image path if available
            title: " Rejection",
            details: {
              points: [
                "High-quality natural and engineered stones for construction and design",
                "Offers strength, durability, and long-lasting performance",
                "Available in granite, marble, limestone, sandstone, and more",
                "Enhances aesthetics in flooring, walls, monuments, and landscaping",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dysyaxsnc/image/upload/v1755150262/WhatsApp_Image_2025-08-14_at_11.12.38_AM_cg4uuq.jpg", // Add image path if available
            title: "  ",
            details: {
              points: [
                "High-quality natural and engineered stones for construction and design",
                "Offers strength, durability, and long-lasting performance",
                "Available in granite, marble, limestone, sandstone, and more",
                "Enhances aesthetics in flooring, walls, monuments, and landscaping",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754819297/WhatsApp_Image_2025-08-06_at_7.24.26_PM_xahhem.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "High-quality natural and engineered stones for construction and design",
                "Offers strength, durability, and long-lasting performance",
                "Available in granite, marble, limestone, sandstone, and more",
                "Enhances aesthetics in flooring, walls, monuments, and landscaping",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754819296/WhatsApp_Image_2025-08-06_at_7.24.26_PM_1_xwtsth.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754819558/WhatsApp_Image_2025-08-06_at_7.24.30_PM_idjeza.jpg", // Add image path if available
            title: " Input Material",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754819558/WhatsApp_Image_2025-08-06_at_7.24.31_PM_2_awatu1.jpg", // Add image path if available
            title: " Accept",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },
          {
            src: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1754819562/WhatsApp_Image_2025-08-06_at_7.24.32_PM_wtexhl.jpg", // Add image path if available
            title: "  Rejection",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755925987/WhatsApp_Image_2025-08-23_at_10.40.57_AM_wqipqk.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                " ",
            },
          },

           {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755925989/WhatsApp_Image_2025-08-23_at_10.42.09_AM_acxskq.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                " ",
            },
          },



          



          //Here

          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755866699/WhatsApp_Image_2025-08-22_at_6.06.02_PM_1_wxlmy8.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
            },
          },


          // {
          //   src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755867140/WhatsApp_Image_2025-08-22_at_6.06.01_PM_1_jthrwl.jpg", // Add image path if available
          //   title: " ",
          //   details: {
          //     points: [
          //       "Advanced material sorting technology for recycling and industrial use",
          //       "Utilizes AI, sensors, and vision systems for precise separation",
          //       "Supports sustainability by reducing landfill and promoting resource recovery",
          //       "Trusted by industries worldwide for reliable and intelligent sorting solutions",
          //     ],
          //     description:
          //       "",
          //   },
          // },
          // {
          //   src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755867382/WhatsApp_Image_2025-08-22_at_6.06.02_PM_q5kqgh.jpg", // Add image path if available
          //   title: "",
          //   details: {
          //     points: [
          //       "Advanced material sorting technology for recycling and industrial use",
          //       "Utilizes AI, sensors, and vision systems for precise separation",
          //       "Supports sustainability by reducing landfill and promoting resource recovery",
          //       "Trusted by industries worldwide for reliable and intelligent sorting solutions",
          //     ],
          //     description:
          //       "",
          //   },
          // },
          // {
          //   src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755867595/WhatsApp_Image_2025-08-22_at_6.06.03_PM_urhetm.jpg", // Add image path if available
          //   title: " ",
          //   details: {
          //     points: [
          //       "Advanced material sorting technology for recycling and industrial use",
          //       "Utilizes AI, sensors, and vision systems for precise separation",
          //       "Supports sustainability by reducing landfill and promoting resource recovery",
          //       "Trusted by industries worldwide for reliable and intelligent sorting solutions",
          //     ],
          //     description:
          //       " ",
          //   },
          // },



          // {
          //   src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755867678/WhatsApp_Image_2025-08-22_at_6.06.02_PM_2_nulmex.jpg", // Add image path if available
          //   title: " ",
          //   details: {
          //     points: [
          //       "Advanced material sorting technology for recycling and industrial use",
          //       "Utilizes AI, sensors, and vision systems for precise separation",
          //       "Supports sustainability by reducing landfill and promoting resource recovery",
          //       "Trusted by industries worldwide for reliable and intelligent sorting solutions",
          //     ],
          //     description:
          //       "",
          //   },
          // },
          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755867739/WhatsApp_Image_2025-08-22_at_6.06.04_PM_oenbuo.jpg", // Add image path if available
            title: "",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                "",
            },
          },
          // {
          //   src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755866737/WhatsApp_Image_2025-08-22_at_6.06.05_PM_s6a44j.jpg", // Add image path if available
          //   title: " ",
          //   details: {
          //     points: [
          //       "Advanced material sorting technology for recycling and industrial use",
          //       "Utilizes AI, sensors, and vision systems for precise separation",
          //       "Supports sustainability by reducing landfill and promoting resource recovery",
          //       "Trusted by industries worldwide for reliable and intelligent sorting solutions",
          //     ],
          //     description:
          //       " ",
          //   },
          // },


            {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755866737/WhatsApp_Image_2025-08-22_at_6.06.04_PM_1_ga5upt.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                " ",
            },
          },


          {
            src: "https://res.cloudinary.com/dz4gzayip/image/upload/v1755927129/WhatsApp_Image_2025-08-23_at_11.01.13_AM_pjjjda.jpg", // Add image path if available
            title: " ",
            details: {
              points: [
                "Advanced material sorting technology for recycling and industrial use",
                "Utilizes AI, sensors, and vision systems for precise separation",
                "Supports sustainability by reducing landfill and promoting resource recovery",
                "Trusted by industries worldwide for reliable and intelligent sorting solutions",
              ],
              description:
                " ",
            },
          },



          

          // {
          //   src: "/plastic-pellets.webp", // Add image path if available
          //   title: "Plastic Granules",
          //   details: {
          //     points: [
          //       "Advanced material sorting technology for recycling and industrial use",
          //       "Utilizes AI, sensors, and vision systems for precise separation",
          //       "Enhances efficiency in plastic, metal, and e-waste processing lines",
          //       "Supports sustainability by reducing landfill and promoting resource recovery",
          //       "Trusted by industries worldwide for reliable and intelligent sorting solutions",
          //     ],
          //     description:
          //       "Plastic granules are small, granular pieces of plastic used in the production of plastic products. They are melted and molded into different shapes for a variety of applications, ranging from packaging to automotive parts.",
          //   },
          // },

          // {
          //   src: "/quartz.webp", // Add image path if available
          //   title: "Quartz",
          //   details: {
          //     points: [
          //       "Advanced material sorting technology for recycling and industrial use",
          //       "Utilizes AI, sensors, and vision systems for precise separation",
          //       "Enhances efficiency in plastic, metal, and e-waste processing lines",
          //       "Supports sustainability by reducing landfill and promoting resource recovery",
          //       "Trusted by industries worldwide for reliable and intelligent sorting solutions",
          //     ],
          //     description:
          //       "Quartz is a highly abundant and versatile mineral used in a variety of industries, including electronics, glass, and ceramics, known for its hardness, stability, and various industrial applications.",
          //   },
          // },
        ],
        recommended: [
          {
            image: "/img1.jpeg",
            title: "Plastic Granules Sorting Machine",
          },
          {
            image: "/img11.jpeg",
            title: "Color Sorter Machine",
          },
          {
            image: "/img12.jpeg",
            title: "Color Sorter Machine",
          },
          {
            image: "/img13.jpeg",
            title: "Conveyor Belt System",
          },
        ],
      },
    ],
  },
];

const Page = () => {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);
  const [selectedItem, setSelectedItem] = useState(selectedSolution.items[0]);
  const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const clearImage = () => {
    setSelectedImage(null);
  };

  // New function to get relevant items for the "MultiGrains, Spices..." section
  const getCategoryItems = (categoryName) => {
    if (selectedSolution.id !== "agriculture") return [];

    const categoryMappings = {
      MultiGrains: ["Wheat", "Rice", "Grain"], // Corrected to include 'Grain'
      Spices: [
        "pepper",
        "Clove",
        "Cardamom",
        "Chilli",
        "Coriander seeds",
        "Jeera",
        "Fennel Seeds",
      ],
      "All Types Of Pulses": [
        "Toor Dal",
        "Moong Dal",
        "Masoor Dal",
        "Chana Dal",
        "Green Moong",
        "Toor Whole",
        "Urad Dal",
        "Urad Dal Whole",
        "Fried Gram",
        "Chick Peas",
        "Mung Bean",
        "Peas",
        "SoyBean",
      ], //Added Peas and Soyabean
      Seeds: [
        "Poppy Seeds",
        "Mustard",
        "Tamarind Seeds",
        "Watermelon Seeds",
        "Sesame Seeds",
        "Coffee Beans",
        "Rajgira Seeds (Ramdana seeds)",
        "Rice Seeds",
        "Wheat Seeds",
        "Other Seeds",
        "Flaxseed",
        "Niger seeds",
        "Sunflower Seeds",
        "Pumpkin seeds",
        "Jowar grain",
        "Ragi",
        "Barley",
        "Betel Nut",
      ], //Added Barley and Betel Nut
    };

    const itemNames = categoryMappings[categoryName] || [];
    return selectedSolution.items.filter((item) =>
      itemNames.includes(item.name)
    );
  };

  // Define categories for the new section
  const categories = ["MultiGrains", "Spices", "All Types Of Pulses", "Seeds"];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 text-gray-900">
        {/* Top Grid - Solution Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((sol) => (
            <motion.div
              key={sol.id}
              className={`p-4 bg-white shadow-md rounded-lg cursor-pointer transition duration-300 transform hover:scale-105 ${
                selectedSolution.id === sol.id ? "border-2 border-teal-500" : ""
              }`}
              onClick={() => {
                setSelectedSolution(sol);
                setSelectedItem(sol.items[0]);
                setSelectedImage(null); // Clear selected image when switching solutions
              }}
            >
              <Image
                src={sol.image}
                alt={sol.title}
                width={220}
                height={130}
                className="rounded-lg h-42 object-cover"
              />
              <h3 className="text-lg font-semibold mt-2">{sol.title}</h3>
              <div className="text-3xl mt-2">{sol.icon}</div>
            </motion.div>
          ))}
        </div>

        {/* Lower Section */}
        <motion.div
          key={selectedSolution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
        >
          {/* Item Selector */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">
              {selectedSolution.title} Materials
            </h2>
            <div className="space-y-2">
              {selectedSolution.items.map((item) => (
                <button
                  key={item.name}
                  className={`block w-full p-3 text-left shadow rounded-md transition ${
                    selectedItem.name === item.name
                      ? "bg-teal-500 text-white font-bold"
                      : "bg-white text-gray-900 hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedItem(item);
                    setSelectedImage(null); // Clear selected image when switching items
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Images Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-semibold mb-4">
              {selectedItem.name} Images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {selectedItem.images.map((img, index) => {
                const isClickable =
                  img.details &&
                  img.details.points &&
                  img.details.points.length > 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`text-center ${
                      isClickable ? "cursor-pointer" : ""
                    }`} // Make clickable
                    onClick={
                      isClickable ? () => handleImageClick(img) : undefined
                    } // Handle click
                  >
                    <Image
                      src={img.src}
                      alt={selectedItem.name}
                      width={250}
                      height={180}
                      className="rounded-lg object-cover shadow-md h-72"
                    />
                    <p className="text-sm mt-2 font-medium">{img.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Recommended Machines Section */}
        <div className="mt-14">
          <h2 className="text-4xl font-bold text-center mb-2 text-[#8E54FF]">
            Recommended Sorting Machines
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Advanced technology built for precision and productivity — tailored
            for {selectedItem.name}.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {(selectedItem.recommended || []).map((rec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <Image
                  src={rec.image}
                  alt={rec.title}
                  width={250}
                  height={150}
                  className="rounded-md h-72 object-contain m-auto"
                />
                <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Details Modal */}
        <AnimatePresence>
          {selectedImage && selectedImage.details && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 w-full h-full overflow-y-auto"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedImage.title} Details
                  </h2>
                  <button
                    onClick={clearImage}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                  <div className="lg:w-1/2">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      width={800}
                      height={600}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <h3 className="text-lg font-semibold mb-2">Key Points</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedImage.details.points.map((point, index) => (
                        <li key={index} className="text-gray-700">
                          {point}
                        </li>
                      ))}
                    </ul>
                    {/* Recommended Products */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-2">
                        Recommended Products
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(selectedItem.recommended || []).map((rec, idx) => (
                          <div
                            key={idx}
                            className="rounded-md p-2 flex items-center gap-2"
                          >
                            <Image
                              src={rec.image}
                              alt={rec.title}
                              width={80}
                              height={60}
                              className="rounded-md w-60 h-72 object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Process + Conditional Material Panel */}
      <div>
        <CooperationProcess />
        {selectedSolution.id === "MultiGrains" && <MaterialPanel />}
        {selectedSolution.id === "plastic" && <MaterialPanelPlastic />}
      </div>

      {/* Contact Form & Footer */}
      <div>
        <ContactSidebar />
        <ChatBot />
        <AutoPopupChat />
        <Footerpage />
      </div>
    </div>
  );
};


export default Page;
