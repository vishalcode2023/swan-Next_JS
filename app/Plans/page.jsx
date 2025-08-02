"use client";
import { useState } from "react";
import Footerpage from "../Components/LandingPages/Footerpage";
import Navbar from "../Components/NavbarLinks/Navbar";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import { motion } from "framer-motion";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";

// Data for different product categories, including flow charts and sorting examples
const data = {
  Rice: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png",
    ],
    sorting: [
      {
        label: "Finished Product",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812433831030785.webp",
      },
      {
        label: "Light Yellow",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514808463998488578.webp",
      },
      {
        label: "White Belly",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514811829864534018.webp",
      },
      {
        label: "Broken Rice",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514811986357514242.webp",
      },
      {
        label: "Blackheads",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812072073007106.webp",
      },
      {
        label: "Dark Yellow",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812123121184769.webp",
      },
      {
        label: "Long Grain 1",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812239165689857.webp",
      },
      {
        label: "Long Grain 2",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812582653325314.webp",
      },
      {
        label: "Long Grain 3",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812632460685313.webp",
      },
      {
        label: "Long Grain 4",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812718142623745.webp",
      },
      {
        label: "Long Grain 5",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812433831030785-1.webp",
      },
      {
        label: "Good Beans",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812123121184769-1.webp",
      },
      {
        label: "Paddy",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813079192506369.webp",
      },
      {
        label: "Clean Brown Rice",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813195017515009.webp",
      },
      {
        label: "Paddy",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514812123121184769-1.webp",
      },
      {
        label: "Unripe Rice Grains",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813036678344705.webp",
      },
      {
        label: "Sticky Rice",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813417923801089.webp",
      },
      {
        label: "Red Rice",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813493777788930.webp",
      },
      {
        label: "Black Rice",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813535046242306.webp",
      },
      {
        label: "Germ Rice",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813587168161793.webp",
      },
    ],
  },

  Pulses: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png", // Placeholder flow image
    ],
    sorting: [
      {
        label: "pluses",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938040/damaged_ewuqem.jpg",
      },
      {
        label: "pluses good",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938041/pluses_good_hblknb.jpg",
      },
      {
        label: "defects pulses",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938041/defects_pulses_gurznx.jpg",
      },
      {
        label: "unpolished Pulses",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938041/unpolished__xyvbrk.jpg",
      },

      {
        label: "",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119846/WhatsApp_Image_2025-07-30_at_1.01.16_PM_1_eainog.jpg",
      },
      {
        label: "",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119848/WhatsApp_Image_2025-07-30_at_1.01.17_PM_1_iekhnu.jpg",
      },
      {
        label: "",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119848/WhatsApp_Image_2025-07-30_at_1.01.17_PM_mcpahd.jpg",
      },
      {
        label: "",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119848/WhatsApp_Image_2025-07-30_at_1.01.17_PM_2_zbvm8l.jpg",
      },
      {
        label: "",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119852/WhatsApp_Image_2025-07-30_at_1.01.16_PM_nkwnbb.jpg",
      },
    ],
  },

  Cashew: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png", // Placeholder flow image
    ],
    sorting: [
      {
        label: "W180",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753190615/WhatsApp_Image_2025-07-21_at_2.59.38_PM_ke73bp.jpg",
      },
      {
        label: "W210",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753190615/WhatsApp_Image_2025-07-21_at_3.00.13_PM_enyky6.jpg",
      },
      {
        label: "W240",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753190615/WhatsApp_Image_2025-07-21_at_3.08.13_PM_uk4edw.jpg",
      },
      {
        label: "W320",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753190615/WhatsApp_Image_2025-07-21_at_3.08.23_PM_ppqaoi.jpg",
      },
      {
        label: "JH",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753190615/WhatsApp_Image_2025-07-21_at_3.08.43_PM_jxq1yo.jpg",
      },
      {
        label: "JK",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753190615/WhatsApp_Image_2025-07-21_at_3.08.50_PM_osvlxx.jpg",
      },
      {
        label: "LWP",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753190616/WhatsApp_Image_2025-07-21_at_3.09.03_PM_l6rj1p.jpg",
      },
      {
        label: "W450",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753190615/WhatsApp_Image_2025-07-21_at_3.09.12_PM_w4uwup.jpg",
      },


      {
        label: "NW Cashew",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753332169/WhatsApp_Image_2025-07-23_at_9.36.52_PM_mpnsew.jpg",
      },
      {
        label: "Baby cashew",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753332170/WhatsApp_Image_2025-07-23_at_9.36.59_PM_l669oc.jpg",
      },
      {
        label: "Cashew Shell",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753332170/WhatsApp_Image_2025-07-23_at_9.37.05_PM_la80eb.jpg",
      }
    ],
  },
  GroundNut: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752507901/WhatsApp_Image_2025-07-14_at_5.27.09_PM_zxgn3j.jpg",
    ],
    sorting: [
      {
        label: "mouldy groundnut",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937399/mouldy_groundnut_fwvdu7.jpg",
      },
      {
        label: "broken groundnut",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937399/broken_groundnut_nbkvc9.webp",
      },
      {
        label: "alltype sorting",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937400/alltype_sorting_add_last_ogsnvf.png",
      },
      {
        label: "good groundnut",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937400/good_groundnut_lx1cax.jpg",
      },
      {
        label: "defective groundnut",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937400/defective_groundnut_cochtz.jpg",
      },
    ],
  },

  "Coffee Beans": {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217865/coffeesorting_rgaz1u.png",
    ],
    sorting: [
      {
        label: "Good Beans",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/72198ac86523ccc0bb6c2bc2e75f959.png",
      },
      {
        label: "Wormhole",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/52a39879b857c18d2f36a4d9157565a.png",
      },
      {
        label: "Shrinkled",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/e723c099a2d24214210e67103ee5c5c.png",
      },
      {
        label: "Mouldy",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/e37b828a4abbdf1a8b50b336bc0d232.png",
      },
      {
        label: "Heterochromatic",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/60218f1ed7bcc3f872e52b7a7a6514d-1.png",
      },
      {
        label: "Good Beans",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/41ff78e1374d9338a5a2f2ef23fecdc.png",
      },
      {
        label: "Wormhole",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/ee80dc2dd9613a3f112bbb668b0492e.png",
      },
      {
        label: "Light-colored",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/21e277c4b579e6839083fb642b57c8a.png",
      },
      {
        label: "Empty Walnut Nuts",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/402125ab696af7d6e3a897b1ca20644.png",
      },
      {
        label: "Empty Almond Nuts",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/3d58a4fc96228fa17c453b9cb5d717d.png",
      },
      {
        label: "Empty Macadamia Nuts",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/643b541daeb5ac049572968289e0f4d.png",
      },
    ],
  },

  Garlic: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png", // Placeholder flow image
    ],
    sorting: [
      {
        label: "peeled garlic",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937070/garlic_1_kdgnc5.jpg",
      },
      {
        label: "mouldy garlic",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937070/garlic__pqw9hd.jpg",
      },
      {
        label: "garlic",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937070/garlic_4_fgnjif.webp",
      },
      {
        label: "garlic",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937071/garlic_5_lnokql.webp",
      },
      {
        label: " garlic",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937070/garlic_4_fgnjif.webp",
      },
      {
        label: "Good garlic",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937071/good_garlic_ums1by.webp",
      },
      {
        label: "peeled garlic",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937071/garlic_3_spccgh.jpg",
      },
      {
        label: "mould garlic",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937071/mould_garlic_bkdub6.webp",
      },
      {
        label: "Dry garlic",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753341186/WhatsApp_Image_2025-07-24_at_11.46.20_AM_wwc8kd.jpg",
      },
    ],
  },

  Plastic: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217611/plasticsorting_yxvdel.png",
    ],
    sorting: [
      {
        label: "Good ABS",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/704e9d00196a1f70376787047ad2436.png",
      },
      {
        label: "ABS Defective",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/f0ddbd4cf419dc389e70bcef29bc660.png",
      },
      {
        label: "Good Plastic",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/7a3e7b549c812eb721b12678c4cdfdd.png",
      },
      {
        label: "",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119445/WhatsApp_Image_2025-07-30_at_1.01.06_PM_1_bzarcc.jpg",
      },
      {
        label: "",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119446/WhatsApp_Image_2025-07-30_at_1.01.07_PM_nikfkh.jpg",
      },
      {
        label: "",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119446/WhatsApp_Image_2025-07-30_at_1.01.07_PM_2_os6lk6.jpg",
      },
      {
        label: "",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119445/WhatsApp_Image_2025-07-30_at_1.01.07_PM_1_m9rchk.jpg",
      },
      {
        label: "",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119445/WhatsApp_Image_2025-07-30_at_1.01.06_PM_imz1uo.jpg",
      },
      {
        label:"",
        img:"https://res.cloudinary.com/dybpd6dkz/image/upload/v1754119719/WhatsApp_Image_2025-07-30_at_1.01.16_PM_swqxns.jpg"
      },
      {
        label: "Good Plastic",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/30d77deade81e1b8ef29b6b2d3923b1.png",
      },
    ],
  },

  Millets: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png", // Placeholder flow image
    ],
    sorting: [
      {
        label: "Foxtail Millet",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937652/millet2_xvlktg.webp",
      },
      {
        label: "Finger Millet (Ragi)",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937652/millet4_mnsz4w.avif",
      },
      {
        label: "Pearl Millet (Bajra)",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937652/millet6_kln18u.jpg",
      },
      {
        label: "Little Millet",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937652/millet7_o9nu1q.webp",
      },
      {
        label: "Barnyard Millet",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937653/millet9_okwkue.webp",
      },
      {
        label: "Kodo Millet",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937653/millt3_tsezfg.jpg",
      },
      {
        label: "Proso Millet",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937653/millet10_n2lfmt.webp",
      },
      {
        label: "Brown Top Millet",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937653/millet1_fnc64a.webp",
      },
      {
        label: "Sorghum (Jowar)",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752937654/millt5_gsjpqj.jpg",
      },
    ],
  },

  Nut: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217733/nutsorting_pdwp4p.png",
    ],
    sorting: [
      {
        label: "Half Walnut",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1518118358260105218.webp",
      },
      {
        label: "1/4 Walnut",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1518118511356395522.webp",
      },
      {
        label: "1/8 Walnut",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1518117962368815106.webp",
      },
      {
        label: "Broken Kernels",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1518117668390047746.webp",
      },
      {
        label: "Sharp white",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1518120612019703809.webp",
      },
      {
        label: "Plain white",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1518120969738633218.webp",
      },
      {
        label: "Second white",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1518120700490158081.webp",
      },
      {
        label: "Oil Extraction",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1518120746861707265.webp",
      },
      {
        label: "Almond",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/6986c6fa1c39b318b66d00d4b7e0fac.png",
      },
      {
        label: "Almond shell",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/14ddec1fc9162f0366f96401676304a.png",
      },
      {
        label: "Mouldy",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/9a050440fbd2a79ac25b3affe1eea9d.png",
      },

      {
        label: "eterochromatic",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/f87e85cec2a7f37fad94cffaa7af10a.png",
      },
      {
        label: "Broken valve",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/60e5d0dcfe9744bfe28969fe2af6e73.png",
      },
      {
        label: "Fracture",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/07f8987b9569442a15731473492e073.png",
      },
      {
        label: "Good",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/f3b22adf11a4fc5f0919fdccce811fb.png",
      },
      {
        label: "Defective",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/2a7915bf8a38fe36533e9508c71f211.png",
      },
      {
        label: "Mouldy",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516736559592239107.webp",
      },
      {
        label: "Green Kernel",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/ffda369c467821f76d89d792f9e60aa.png",
      },
      {
        label: "Empty Walnut Nuts",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/0bc754c5b9e8fc9a1c15f64633e5494.png",
      },

      {
        label: "Empty Almond Nuts",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/2a7915bf8a38fe36533e9508c71f211.png",
      },
      {
        label: "Empty Macadamia Nuts",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/c3104680d21068861512c6c9408e2c7.png",
      },
      {
        label: "Almond",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1f43d2064d4bd86196af5f2d5c6c7dd.png",
      },
      {
        label: "Macadamia Nuts",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1f43d2064d4bd86196af5f2d5c6c7dd.png",
      },
      {
        label: "Sunflower Seeds",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/3c2e79ac24291e545f715d2e2325808.png",
      },
      {
        label: "Pine Nuts",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/aaac3f76d6d3d71c9e5aeddb93c9421.png",
      },
      {
        label: "Metal",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516736559718764546.webp",
      },
      {
        label: "Stone",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516736559592239107.webp",
      },
      {
        label: "Grass",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516736559718764545.webp",
      },
      {
        label: "Rod",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516736559592239106.webp",
      },
    ],
  },

  Seed: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png",
    ],
    sorting: [
      {
        label: "Raw Material",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/f36b7a30832cb2434f9311cf0d2e9d8.png",
      },
      {
        label: "White Ouinoa",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1c3f64c65b0ce6f81006a366712905d.png",
      },
      {
        label: "Red Ouinoa",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/118e1b446ce52983c07fce80ebae5fe.png",
      },
      {
        label: "Black Ouinoa",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/3b0e064a0b75ef87511b08e64238377.png",
      },
      {
        label: "Brown Good",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/d9e9272651cd35bd7b2d9061056561f.png",
      },
      {
        label: "Defective",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/77e69d44dd832a5e49db6ad704bb982.png",
      },
      {
        label: "Black Good",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/17485d7acc05f75fcf25121399076b8.png",
      },
      {
        label: "Defective",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/35687f1d5f6899e8ed70382695be9f6.png",
      },
    ],
  },

  FriedGram: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png", // Placeholder flow image
    ],
    sorting: [
      {
        label: "Roasted Gram Whole",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752935811/Roasted-Gram-1_cyx2wd.png",
      },
      {
        label: "Roasted Gram Split",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752935809/gr22_ijgoc1.jpg",
      },
      {
        label: "Roasted Gram without Skin",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752935809/gre_d5tsl2.webp",
      },
      {
        label: "Fried Gram (Chana Dal)",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752935809/gr33_q7cymc.jpg",
      },
      {
        label: "Premium Roasted Gram",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752935809/fdd_1_fcikls.jpg",
      },
      {
        label: "Desi Fried Gram",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752935809/fried_gr1_s4yeee.webp",
      },
      {
        label: "Crispy Roasted Gram",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752935808/gr3_kynpzj.webp",
      },
      {
        label: "Roasted Gram with Skin",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752935808/bad_gr1_hof9r7.jpg",
      },
      {
        label: "Roasted Gram with Skin",
        img: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330211/WhatsApp_Image_2025-07-23_at_9.32.49_PM_xgroyd.jpg",
      },
    ],
  },

  Quartz_and_Minerals: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png", // Placeholder flow image
    ],
    sorting: [
      {
        label: " Quartz",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938284/quartz3_a482lm.webp",
      },
      {
        label: "Good Quartz",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938284/good_quartz_bhifuc.jpg",
      },
      {
        label: "Quartz ",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938283/q2_xpdoe9.jpg",
      },
      {
        label: "Defective_Quartz",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938283/broken_crytals_viry0k.jpg",
      },
    ],
  },

  Ragi: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png", // Placeholder flow image
    ],
    sorting: [
      {
        label: "Ragi broken",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938496/raagi_bad_broken_vvwbkf.jpg",
      },
      {
        label: " Bad Ragi",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938496/ragi1_ub9rf8.jpg",
      },
      {
        label: "mixed Ragi",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938496/ragi2_qbhjzw.jpg",
      },
      {
        label: "good Ragi",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938496/ragi_bad_ubbcgi.jpg",
      },
      {
        label: "moudly Ragi",
        img: "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752938497/ragi3_yb976y.webp",
      },
    ],
  },
  // Wheat: {
  //   flow: [
  //     "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png", // Placeholder flow image
  //   ],
  //   sorting: [
  //     {
  //       label: "Good Wheat",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Good+Wheat",
  //     },
  //     {
  //       label: "Shriveled Wheat",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Shriveled+Wheat",
  //     },
  //     {
  //       label: "Broken Wheat",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Broken+Wheat",
  //     },
  //     {
  //       label: "Discolored Wheat",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Discolored+Wheat",
  //     },
  //     {
  //       label: "Foreign Matter",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Foreign+Matter",
  //     },
  //   ],
  // },

  // Raisin: {
  //   flow: [
  //     "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png", // Placeholder flow image
  //   ],
  //   sorting: [
  //     {
  //       label: "Good Raisin",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Good+Raisin",
  //     },
  //     {
  //       label: "Stem",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Stem",
  //     },
  //     {
  //       label: "Capstem",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Capstem",
  //     },
  //     {
  //       label: "Light Berry",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Light+Berry",
  //     },
  //     {
  //       label: "Damaged",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Damaged",
  //     },
  //     {
  //       label: "Foreign Matter",
  //       img: "https://placehold.co/160x100/ADD8E6/000000?text=Foreign+Matter",
  //     },
  //   ],
  // },

  Other: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217611/plasticsorting_yxvdel.png",
    ],
    sorting: [
      {
        label: "Good ",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/ece9c4d6c285bac02f2b942f0444302.png",
      },
      {
        label: "Mouldy",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/73215d8456d0f88ac7de489dea734f9.png",
      },
      {
        label: "Sprout",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/89f92b145bed4f99bf16e2a8773b550.png",
      },
      {
        label: "Good",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/4c16fca209e7b6d10a6b19cc0f97e5a.png",
      },
      {
        label: "Wormhole",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/a5998160d47b0b9f63cbf5921aabfbf.png",
      },
      {
        label: "Single Fruit",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/fea3cfa49fbef0a378136297ff4da4a.png",
      },
      {
        label: "Triplets",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1a113024cfd6bc83b8b86997b2c7775.png",
      },
      {
        label: "Brown Good",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/945e27f3b337b46961d86a5355c8658.png",
      },
      {
        label: "Black Good",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/3ee7f1cb09a4951479625acfe13d380.png",
      },
      {
        label: "Defective",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/29a9650fc13ba0dbfec76e48c7f7683.png",
      },
      {
        label: "Defective",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/b7bd486c08238166c3d94a68907754d.png",
      },
      {
        label: "Fennel",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/07a79c0696ff7ea9a8bd34afb1252e5.png",
      },
      {
        label: "Pickled peppers",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/ecee7a299e645b19537ec06371a603b.png",
      },
      {
        label: "Chili",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/6ce3e57721ebb9e7275dc9de7815b78.png",
      },
      {
        label: "Cumin",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/5019fc816b0442d0a47d1c9c817a274.png",
      },

      {
        label: "Good ",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/48f1d2669a18af7e74e6cef26e6812e.png",
      },
      {
        label: "Mouldy",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/5c4134a3a6b5e2b980dae2808ab3b37.png",
      },
      {
        label: "Lesions",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/008486d65dba80ca0e7b7d1c253b393.png",
      },
      {
        label: "Broken Kernels",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1a66a82d1ae35017d5b8cc2061bf5cf.png",
      },
      {
        label: "Rod",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1fa3c337f94798b0b9aa75e2f4d5e7c.png",
      },
      {
        label: "Good",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/4776afa8b97e140b5f064cebbec84d3.png",
      },
      {
        label: "Red",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/8c4d3b0d6601353f28d86d96a89a2ed.png",
      },
      {
        label: "Yellow",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/5b4bcb4bc9e4701ffc30e4dc05d4efa.png",
      },
      {
        label: "Black ",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/11cd507edf6ddab8b896753affeca06.png",
      },
      {
        label: "Good Quartz",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/c422ee008d4048cb8f98d35e9893f84.png",
      },
      {
        label: "Defective Quartz Stone",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1518777552642387969.webp",
      },
      {
        label: "Petroleum Coke Pellets",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/0217902f562f20a617a98b857d9a2d2.png",
      },
      {
        label: "Good",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/c6965ce15fd3499d57d0b58fbebdaf1.png",
      },
      {
        label: "Good Shrimp",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/9fc41ee64760d4047ece1beb13d5182.png",
      },
      {
        label: "Defective Shrimp",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/86993d458733b963a198d98f436fc87.png",
      },

      {
        label: "Good Small Silver Fish",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/f8a97532cebbd55eaa5c83e58d6eeca.png",
      },
      {
        label: "Defective",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/0b2bd50069f7875280ebbfad5b23245.png",
      },
    ],
  },
};

// Machine data for each category
const machineData = {
  Rice: [
    {
      name: "Paddy Pre-cleaner",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/04/PRE-CLEANER-1500-08-768x665.jpg",
      link: "#",
    },
    {
      name: "Vibro Classifier",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/05/GVCA-212-9000_00-01-768x489.jpg",
      link: "#",
    },
    {
      name: "Vibro De-Stoner",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/GVDA-2D-120-9000_00-01-768x672.jpg",
      link: "#",
    },
    {
      name: "Pneumatic Sheller",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/SLP08481-768x768.jpg",
      link: "#",
    },
    {
      name: "Husk Aspirator",
      image:
        "https://graintecindustries.com/wp-content/uploads/2024/10/HUSK_ASPIRATOR-removebg-preview.png",
      link: "#",
    },
    {
      name: "Husk Separator",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/Husker-Husse-02-768x555.jpg",
      link: "#",
    },
    {
      name: "Paddy Separator",
      image:
        "https://graintecindustries.com/wp-content/uploads/2024/10/PADDY_SEPARATOR-removebg-preview.png",
      link: "#",
    },
    {
      name: "Rice De-Stoner",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/Rice-Destoner-02-768x659.png",
      link: "#",
    },
    {
      name: "Thick & Thin Grader",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/GTGA-6D-9000_00-01-768x987.jpg",
      link: "#",
    },
    {
      name: "Rice Whitener",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/04/RICE-WHITENER-02-768x785.jpg",
      link: "#",
    },
    {
      name: "Rice Polisher",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/Silky-Polisher-02-768x756.png",
      link: "#",
    },
    {
      name: "Rice Silky Polisher", // This name seems redundant with "Rice Polisher"
      image:
        "https://graintecindustries.com/wp-content/uploads/2024/10/ROTARY_SIFTER-removebg-preview.png",
      link: "#",
    },
    {
      name: "Rotary Sifter",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/04/LENGTH-GRADER-03-768x432.jpg",
      link: "#",
    },
    {
      name: "Elevator",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330937/WhatsApp_Image_2025-07-23_at_9.34.30_PM_vh4xe2.jpg",
      link: "#",
    },
    {
      name: "Sorting Machine ",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875631/512_Channel_8_chute_smmkzj.jpg",
      link: "#",
    },
  ],
  Beans: [
    {
      name: "Bean Processing Machine 1",
      image: "https://placehold.co/160x100/ADD8E6/000000?text=Bean+Machine+1",
      link: "#",
    },
    {
      name: "Bean Processing Machine 2",
      image: "https://placehold.co/160x100/ADD8E6/000000?text=Bean+Machine+2",
      link: "#",
    },
  ],
  Nut: [
    {
      name: " Sorting Machine ",
      image:
        "/img1.jpeg",
      link: "#",
    },
    {
      name: "Sorting Machine ",
      image: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875732/64_Channel_NW_machine_zvbkoy.jpg",
      link: "#",
    },
    {
      name: "Sorting Machine ",
      image: "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746876257/600mm_belt_conveyor_kk4wj4.jpg",
      link: "#",
    },
  ],
  "Coffee Beans": [
    {
      name: "Pre cleaner",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752934544/WhatsApp_Image_2025-07-18_at_1.41.21_PM_rx7ptn.jpg",
      link: "#",
    },
    {
      name: "Bullet and osilator",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752934544/WhatsApp_Image_2025-07-18_at_1.41.32_PM_zypfyg.jpg",
      link: "#",
    },
    {
      name: "Huller and osilator",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752934544/WhatsApp_Image_2025-07-18_at_1.42.05_PM_jndagv.jpg",
      link: "#",
    },
    {
      name: "Destoner",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752934548/WhatsApp_Image_2025-07-18_at_1.42.15_PM_q2u8fn.jpg",
      link: "#",
    },
    {
      name: "Gravity block",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752934545/WhatsApp_Image_2025-07-18_at_1.42.26_PM_mjqyol.jpg",
      link: "#",
    },
    {
      name: "Grander",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752934960/WhatsApp_Image_2025-07-18_at_1.42.37_PM_ornji9.jpg",
      link: "#",
    },
    {
      name: "Elevator",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330210/WhatsApp_Image_2025-07-23_at_9.32.35_PM_sjtpq0.jpg",
      link: "#",
    },
    {
      name: " Sorting Machine ",
      image:
        "/img1.jpeg",
      link: "#",
    },
    {
      name:" Sorting Machine ",
      image:"https://res.cloudinary.com/dybpd6dkz/image/upload/v1753331816/WhatsApp_Image_2025-07-23_at_9.36.04_PM_aacsjd.jpg",
      link:"#"
    }
  ],
  Plastic: [
    {
      name: " Bottle Recycling",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752765896/WhatsApp_Image_2025-07-17_at_3.13.23_PM_p9xl24.jpg",
      link: "#",
    },
    {
      name: "Cutting machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752765896/WhatsApp_Image_2025-07-17_at_3.13.35_PM_pxjvkq.jpg",
      link: "#",
    },
    {
      name: "Washing line",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752765896/WhatsApp_Image_2025-07-17_at_3.13.48_PM_jublp4.jpg",
      link: "#",
    },
    {
      name: "Plastic  Bottle Recycling",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752765896/WhatsApp_Image_2025-07-17_at_3.14.00_PM_viftht.jpg",
      link: "#",
    },
    {
      name: "Film Recycling",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752765896/WhatsApp_Image_2025-07-17_at_3.14.09_PM_wgtydb.jpg",
      link: "#",
    },
    {
      name: "Film Pelletizing",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752765896/WhatsApp_Image_2025-07-17_at_3.14.19_PM_r1yhvn.jpg",
      link: "#",
    },
    {
      name: "Rigid Plastic Pelletizing",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752765897/WhatsApp_Image_2025-07-17_at_3.14.29_PM_b2nwl3.jpg",
      link: "#",
    },
    {
      name: "Plastic Shredder Machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752765897/WhatsApp_Image_2025-07-17_at_3.14.37_PM_q2r6r8.jpg",
      link: "#",
    },
    {
      name: "Sorting Machine",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875490/256_channel_4_chute_wuw2wp.jpg",
      link: "#",
    },
  ],
  Seed: [
    {
      name: "Seed Pre Cleaner",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752763242/WhatsApp_Image_2025-07-15_at_11.05.51_AM_givflc.jpg",
      link: "#",
    },
    {
      name: "Seed Grader",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752763243/WhatsApp_Image_2025-07-15_at_11.05.51_AM_1_tus36y.jpg",
      link: "#",
    },
    {
      name: "Indented Cylinder",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752763242/WhatsApp_Image_2025-07-15_at_11.05.52_AM_ss0uhm.jpg",
      link: "#",
    },
    {
      name: "Vibro type destoner",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752763242/WhatsApp_Image_2025-07-15_at_11.05.52_AM_1_q7ne8s.jpg",
      link: "#",
    },
    {
      name: "Vertical bucket elevator",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752763242/WhatsApp_Image_2025-07-15_at_11.05.53_AM_ydcmeq.jpg",
      link: "#",
    },
    {
      name: "Magnetic Destoner",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752763242/WhatsApp_Image_2025-07-15_at_11.05.53_AM_1_itrns3.jpg",
      link: "#",
    },
    {
      name: "Gravity Separator",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752763243/WhatsApp_Image_2025-07-15_at_11.05.53_AM_2_ruxzjf.jpg",
      link: "#",
    },
    {
      name: "Sorting Machine",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875490/256_channel_4_chute_wuw2wp.jpg",
      link: "#",
    },

  ],
  Cashew: [
    {
      name: "Boiling machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752933545/WhatsApp_Image_2025-07-18_at_10.22.29_AM_wox9w4.jpg",
      link: "#",
    },
    {
      name: "Cutting Machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764005/WhatsApp_Image_2025-07-15_at_4.46.57_PM_ommosg.jpg",
      link: "#",
    },
    {
      name: "Scooping line",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764007/WhatsApp_Image_2025-07-15_at_4.47.37_PM_kdstrh.jpg",
      link: "#",
    },
    {
      name: "NW Sortex machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764008/WhatsApp_Image_2025-07-15_at_4.47.46_PM_d16sgw.jpg",
      link: "#",
    },
    {
      name: "Hot house",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764007/WhatsApp_Image_2025-07-15_at_4.47.57_PM_fozmft.jpg",
      link: "#",
    },
    {
      name: " Peeling machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764008/WhatsApp_Image_2025-07-15_at_4.48.09_PM_od9ye3.jpg",
      link: "#",
    },
    {
      name: "Elevator",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330938/WhatsApp_Image_2025-07-23_at_9.34.41_PM_wzlawi.jpg",
      link: "#",
    },
    {
      name: "Sortex machine",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875765/128_channel_cashew_2_chute_d2too2.jpg",
      link: "#",
    },
  ],
  GroundNut: [
    {
      name: "Pre Cleaner",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752511024/WhatsApp_Image_2025-07-14_at_12.27.53_PM_ukvm4x.jpg",
      link: "#",
    },
    {
      name: "Destoner Machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752511024/WhatsApp_Image_2025-07-14_at_12.32.10_PM_mwy0dc.jpg",
      link: "#",
    },
    {
      name: "Decadicator",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752511025/WhatsApp_Image_2025-07-14_at_12.27.54_PM_t3sfx5.jpg",
      link: "#",
    },
    {
      name: "Shaker",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752511023/WhatsApp_Image_2025-07-14_at_12.27.54_PM_2_wwh2aw.jpg",
      link: "#",
    },
    {
      name: "Round Shaker",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752511024/WhatsApp_Image_2025-07-14_at_12.27.54_PM_1_h6pkco.jpg",
      link: "#",
    },
    {
      name: "HPS",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764008/WhatsApp_Image_2025-07-15_at_4.56.36_PM_txyyk1.jpg",
      link: "#",
    },
     {
      name: "Elevator",
      image:
        " https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330210/WhatsApp_Image_2025-07-23_at_9.32.35_PM_sjtpq0.jpg",
      link: "#",
    },
    {
      name: "Sorting Machine",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875532/320_Channel_5_chute_pyq62s.jpg",
      link: "#",
    },
  ],
  RagiPlant: [
    {
      name: "Sortex machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764009/WhatsApp_Image_2025-07-15_at_4.48.19_PM_jvnuga.jpg",
      link: "#",
    },
    {
      name: "Sorting Machine ",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875447/192_channel_3_chute_bdmqms.jpg",
      link: "#",
    },
  ],
  Wheat: [
    {
      name: "Drum Sieve",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/GDSB-9000_00-01-768x756.jpg",
      link: "#",
    },
    {
      name: "Grain Pre Cleaner",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/04/PRE-CLEANER-1500-08-768x665.jpg",
      link: "#",
    },
    {
      name: "Vibro Classifier",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/GVCA-212-9000_00-01-768x489.jpg",
      link: "#",
    },
    {
      name: "De-Stoner",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/03/SLP08733-768x768.jpg",
      link: "#",
    },
    {
      name: "Vibro De-Stoner",
      image:
        "https://graintecindustries.com/wp-content/uploads/2024/10/VIBRO_DE-STONER-removebg-preview.png",
      link: "#",
    },
    {
      name: "Mud Ball Separator",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/IMG_3690_01-732x1024.jpg",
      link: "#",
    },
    {
      name: "Gravity Separator",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/IMG_3749-768x432.jpg",
      link: "#",
    },
    {
      name: "Sorting Machine",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875391/128_channel_2_chute_zwprka.jpg",
      link: "#",
    },
  ],
  FriedGram: [
    {
      name: "Precleaner ",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330210/WhatsApp_Image_2025-07-23_at_9.30.49_PM_qr1hmn.jpg",
      link: "#",
    },
    {
      name: "Destoner ",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330210/WhatsApp_Image_2025-07-23_at_9.31.02_PM_ofcgsb.jpg",
      link: "#",
    },
    {
      name: "Friedgram Roaster ",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330210/WhatsApp_Image_2025-07-23_at_9.31.14_PM_kia1iw.jpg",
      link: "#",
    },
    {
      name: "",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330210/WhatsApp_Image_2025-07-23_at_9.31.32_PM_vkeplk.jpg",
      link: "#",
    },
    {
      name: "Elevator ",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1753335638/WhatsApp_Image_2025-07-23_at_9.32.35_PM_wcbnmn.jpg",
      link: "#",
    },
    {
      name: "Sorting Machine",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875532/320_Channel_5_chute_pyq62s.jpg",
      link: "#",
    },
  ],
  Raisin: [
    {
      name: "Sortex machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764009/WhatsApp_Image_2025-07-15_at_4.48.19_PM_jvnuga.jpg",
      link: "#",
    },
  ],
  Quartz_and_Minerals: [
    {
      name: "Sorting Machine",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746876210/300_slow_conveyor_ljcxfk.jpg",
      link: "#",
    },
    { name: "Sorting Machine", image: "/img7.jpeg", link: "#" },
  ],

  Pulses: [
    {
      name: "Drum Sieve",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/GDSB-9000_00-01-768x756.jpg",
      link: "#",
    },
    {
      name: "Grain Pre Cleaner",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/04/PRE-CLEANER-1500-08-768x665.jpg",
      link: "#",
    },
    {
      name: "Vibro Classifier",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/GVCA-212-9000_00-01-768x489.jpg",
      link: "#",
    },
    {
      name: "De-Stoner",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/03/SLP08733-768x768.jpg",
      link: "#",
    },
    {
      name: "Vibro De-Stoner",
      image:
        "https://graintecindustries.com/wp-content/uploads/2024/10/VIBRO_DE-STONER-removebg-preview.png",
      link: "#",
    },
    {
      name: "Mud Ball Separator",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/IMG_3690_01-732x1024.jpg",
      link: "#",
    },
    {
      name: "Gravity Separator",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/IMG_3749-768x432.jpg",
      link: "#",
    },

    {
      name: "Pulse De Huller",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/GHLC-D-9001_00-01-768x804.jpg", // Placeholder image
    },
    {
      name: "Vibro Aspirator",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/Vibro_Aspirator_02-removebg-preview.png", // Placeholder image
    },
    {
      name: "Fatka Splitter",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/04/Fatka-02-768x758.jpg", // Placeholder image
    },
    {
      name: "Pulse De Huller",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/01/GHLC-D-9001_00-01-768x804.jpg", // Placeholder image
    },
    {
      name: "Chakki Splitter",
      image:
        "http://graintecindustries.com/wp-content/uploads/2025/04/CHAKKI-03-768x987.jpg", // Placeholder image
    },
    {
      name: "Dal Buff Polisher",
      image:
        "https://graintecindustries.com/wp-content/uploads/2025/04/Buff_Polisher-07-768x779.jpg", // Placeholder image
    },
    {
      name: "Elevator",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330937/WhatsApp_Image_2025-07-23_at_9.34.17_PM_vuqkb2.jpg",
      link: "#",
    },
       {
      name: "Sortex machine",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875447/192_channel_3_chute_bdmqms.jpg",
      link: "#",
    },
  ],

  Garlic: [
    {
      name: "Bulb breaker",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764009/WhatsApp_Image_2025-07-15_at_5.27.37_PM_qdc0rk.jpg",
      link: "#",
    },
    {
      name: "Peeling machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752766456/WhatsApp_Image_2025-07-15_at_5.27.45_PM_froxnx.jpg",
      link: "#",
    },
    {
      name: "Garlic washing machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752766456/WhatsApp_Image_2025-07-15_at_5.27.53_PM_qe0fat.jpg",
      link: "#",
    },
    {
      name: "Sorting Machine",
      image:
        "/img1.jpeg",
      link: "#",
    },
      //  {
    //   name: "Sortex machine",
    //   image:
    //     "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746875765/128_channel_cashew_2_chute_d2too2.jpg",
    //   link: "#",
    // },
  ],

  Ragi: [
    {
      name: " Sorting Machine",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746876126/640_Channel_Forward_10_chute_ryrk7f.jpg",
      link: "#",
    },
  ],

  Millets: [
    {
      name: "Grader Cum Aspirator",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764834/WhatsApp_Image_2025-07-17_at_1.14.15_PM_uj2isw.jpg",
      link: "#",
    },
    {
      name: "Destoner",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764833/WhatsApp_Image_2025-07-17_at_1.14.15_PM_1_tz94vx.jpg",
      link: "#",
    },
    {
      name: "Dehuller",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764834/WhatsApp_Image_2025-07-17_at_1.14.16_PM_ukpoqa.jpg",
      link: "#",
    },
    {
      name: "Gravity separator",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764834/WhatsApp_Image_2025-07-17_at_1.14.16_PM_1_hdnbav.jpg",
      link: "#",
    },
    {
      name: "Elevator",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1753330938/WhatsApp_Image_2025-07-23_at_9.35.06_PM_myf2y8.jpg",
      link: "#",
    },
    {
      name: "Sorting Machine",
      image:
        "https://res.cloudinary.com/dybpd6dkz/image/upload/v1746876126/640_Channel_Forward_10_chute_ryrk7f.jpg",
      link: "#",
    },
  ],

  Other: [
    {
      name: "Sortex machine",
      image:
        "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752764009/WhatsApp_Image_2025-07-15_at_4.48.19_PM_jvnuga.jpg",
      link: "#",
    },
  ],
};

// Define tabs, starting with "Rice" as the first category
const tabs = Object.keys(data);

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1, // Stagger children by 0.1 seconds
      when: "beforeChildren", // Animate parent before children
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageItemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 }, // Start slightly lower, faded, and smaller
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120, // Slightly less stiff for a smoother feel
      damping: 15, // More damping for less bounce
      duration: 0.6, // Explicit duration for overall animation
    },
  },
};

export default function PlanPage() {
  const [active, setActive] = useState(tabs[0]); // Initial state is the first category (e.g., "Rice")

  // Determine which machine images to display based on the active tab
  const machinesToDisplay = machineData[active] || [];
  // Determine which sorting images to display based on the active tab
  const sortingToDisplay = data[active]?.sorting || [];

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-16 py-12 bg-white text-center min-h-screen">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-700 mb-4 tracking-tight"
          initial="hidden"
          whileInView="visible" // Animate when in view
          viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% in view
          variants={itemVariants}
        >
          Complete End To End Sorting Plant
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible" // Animate when in view
          viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% in view
          variants={itemVariants}
        >
          Our customizable systems are designed to maximize productivity while
          maintaining the integrity and appearance of your produce. With a focus
          on energy efficiency and sustainability, SwanSorter system offers
          reliable and innovative solutions tailored to meet the unique needs of
          your processing facility. Partner with us to enhance your operations
          and achieve the highest quality output.
        </motion.p>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12"
          initial="hidden"
          whileInView="visible" // Animate when in view
          viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% in view
          variants={containerVariants}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm md:text-base font-medium ${
                active === tab
                  ? "bg-[#8E54FF] text-white shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#8E54FF]/10 hover:text-[#8E54FF]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Machine Images Section */}
        <div className="mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-700 mb-6"
            initial="hidden"
            whileInView="visible" // Animate when in view
            viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% in view
            variants={itemVariants}
          >
            <span className="text-[#8E54FF]">Processing Machines</span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6"
            key={active + "-machines"} // Key change to re-trigger animation on tab change
            initial="hidden"
            whileInView="visible" // Animate when in view
            viewport={{ once: true, amount: 0.1 }} // Animate when 10% in view for better mobile feel
            variants={containerVariants}
          >
            {machinesToDisplay.map((machine, i) => (
              <motion.div
                key={i}
                className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform text-center"
                variants={imageItemVariants}
              >
                <img
                  src={
                    machine.image ||
                    "https://placehold.co/160x100?text=No+Image"
                  }
                  alt={machine.name}
                  className="rounded-md mx-auto h-[250px] w-[250px] object-contain"
                />
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {machine.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sorting Section */}
        {sortingToDisplay.length > 0 && (
          <>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-700 mb-6"
              initial="hidden"
              whileInView="visible" // Animate when in view
              viewport={{ once: true, amount: 0.5 }} // Only animate once, when 50% in view
              variants={itemVariants}
            >
              <span className="text-[#8E54FF]">Sorting Solutions</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
              key={active + "-sorting"} // Key change to re-trigger animation on tab change
              initial="hidden"
              whileInView="visible" // Animate when in view
              viewport={{ once: true, amount: 0.1 }} // Animate when 10% in view for better mobile feel
              variants={containerVariants}
            >
              {sortingToDisplay.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform text-center"
                  variants={imageItemVariants}
                >
                  <img
                    src={
                      item.img || "https://placehold.co/160x100?text=No+Image"
                    } // Fallback for empty image URLs
                    alt={item.label}
                    className="rounded-md mx-auto h-[100px] w-[160px] object-cover"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
      <ContactSidebar />
      <ChatBot />
      <AutoPopupChat />
      <Footerpage />
    </div>
  );
}
