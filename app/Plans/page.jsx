"use client";
import { useState } from "react";
import FlowChart from "../Components/ExtraComponents/FlowChart";
import Footerpage from "../Components/LandingPages/Footerpage";
import Navbar from "../Components/NavbarLinks/Navbar";
import ChatBot from "../Components/ChatBot/ChatBot";
import AutoPopupChat from "../Components/LandingPages/AutoComponentspop";
import ContactSidebar from "../Components/LandingPages/ContactSidebar";
import RicePaddyProcessingPage from "../Components/ExtraComponents/RicePaddyProcessingPage";

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
        label: "Wormhole",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813036678344705.webp",
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
      {
        label: "White Plastic",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813660707590146.webp",
      },
      {
        label: "Grass",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813741120090114.webp",
      },
      {
        label: "Black Rice",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813790932340738.webp",
      },
      {
        label: "Germ Rice",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1514813846678138881.webp",
      },
    ],
  },
  Beans: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217671/beans2_u1pjat.png",
    ],
    sorting: [
      {
        label: "Good Soybeans",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516730239820492801.webp",
      },
      {
        label: "Wormhole",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516730753454960641.webp",
      },
      {
        label: "Mouldy",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516730797025390593.webp",
      },
      {
        label: "Shriveled",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516730828294623234.webp",
      },
      {
        label: "Broken valve",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516730858899763201.webp",
      },
      {
        label: "Wrinkled",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516730891255320577.webp",
      },
      {
        label: "Good Beans",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516732943083671554.webp",
      },
      {
        label: "Heterochromatic",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516734981766377474.webp",
      },
      {
        label: "Good Beans",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516734730301075457.webp",
      },
      {
        label: "Heterochromatic",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516734767282950146.webp",
      },
      {
        label: "Good Beans",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516736802497662978.webp",
      },

      {
        label: "Heterochromatic",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516736889168064513.webp",
      },
      {
        label: "Good Beans",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516736888472506369.webp",
      },
      {
        label: "Heterochromatic",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516736802266279937.webp",
      },
      {
        label: "Heterochromatic",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/1516736802266279937.webp",
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
        label: "Good PP",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/7a3e7b549c812eb721b12678c4cdfdd.png",
      },
      {
        label: "Pp Defective",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/13ace808a3cf9c903378b76ce148e53.png",
      },
      {
        label: "Good PET",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/c7126d053ba82cb0f0c2a357a160add.png",
      },
      {
        label: "PET Defective",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/691c18ac1d39b20f54ba1aa058ed180.png",
      },
      {
        label: "Good Beans",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/415960846ffce4f14153e9ab80f8e69.png",
      },
      {
        label: "Red",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/21273d2d1023c996e6ae537c0d90730.png",
      },
      {
        label: "Yellow",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/5e013848071dacd1a953febe8966409.png",
      },
      {
        label: "Blue",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/90fe2e65c260dfdffb049ec3247f3ab.png",
      },
      {
        label: "Green",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/ea161ead7963a33e4342f5d60c48a97.png",
      },
      {
        label: "Gray",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/bf26dc1708ab007e848da124cec0432.png",
      },
      {
        label: "Black",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/f4dc281d86c0d36b9e816a6bc29c02a.png",
      },
      {
        label: "PP",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/30d77deade81e1b8ef29b6b2d3923b1.png",
      },
      {
        label: "PET",
        img: "https://www.wesortcolorsorters.com/wp-content/uploads/2024/06/5019fc816b0442d0a47d1c9c817a274.png",
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
  Cashew: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png",
    ],
    sorting: [
      {
        label: "Raw Material",
        img: "",
      },
      {
        label: "White Ouinoa",
        img: "",
      },
      {
        label: "Red Ouinoa",
        img: "",
      },
      {
        label: "Black Ouinoa",
        img: "",
      },
      {
        label: "Brown Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
      {
        label: "Black Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
    ],
  },
  GroundNut: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png",
    ],
    sorting: [
      {
        label: "Raw Material",
        img: "",
      },
      {
        label: "White Ouinoa",
        img: "",
      },
      {
        label: "Red Ouinoa",
        img: "",
      },
      {
        label: "Black Ouinoa",
        img: "",
      },
      {
        label: "Brown Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
      {
        label: "Black Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
    ],
  },
  RagiPlant: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png",
    ],
    sorting: [
      {
        label: "Raw Material",
        img: "",
      },
      {
        label: "White Ouinoa",
        img: "",
      },
      {
        label: "Red Ouinoa",
        img: "",
      },
      {
        label: "Black Ouinoa",
        img: "",
      },
      {
        label: "Brown Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
      {
        label: "Black Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
    ],
  },
  Wheat: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png",
    ],
    sorting: [
      {
        label: "Raw Material",
        img: "",
      },
      {
        label: "White Ouinoa",
        img: "",
      },
      {
        label: "Red Ouinoa",
        img: "",
      },
      {
        label: "Black Ouinoa",
        img: "",
      },
      {
        label: "Brown Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
      {
        label: "Black Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
    ],
  },
  FriedGram: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png",
    ],
    sorting: [
      {
        label: "Raw Material",
        img: "",
      },
      {
        label: "White Ouinoa",
        img: "",
      },
      {
        label: "Red Ouinoa",
        img: "",
      },
      {
        label: "Black Ouinoa",
        img: "",
      },
      {
        label: "Brown Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
      {
        label: "Black Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
    ],
  },
  Raisin: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png",
    ],
    sorting: [
      {
        label: "Raw Material",
        img: "",
      },
      {
        label: "White Ouinoa",
        img: "",
      },
      {
        label: "Red Ouinoa",
        img: "",
      },
      {
        label: "Black Ouinoa",
        img: "",
      },
      {
        label: "Brown Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
      {
        label: "Black Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
    ],
  },
  Quartz_and_Minerals: {
    flow: [
      "https://res.cloudinary.com/dt2juqy9s/image/upload/v1752217446/rice_raw_material_fmrzty.png",
    ],
    sorting: [
      {
        label: "Raw Material",
        img: "",
      },
      {
        label: "White Ouinoa",
        img: "",
      },
      {
        label: "Red Ouinoa",
        img: "",
      },
      {
        label: "Black Ouinoa",
        img: "",
      },
      {
        label: "Brown Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
      {
        label: "Black Good",
        img: "",
      },
      {
        label: "Defective",
        img: "",
      },
    ],
  },
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

const tabs = Object.keys(data);

export default function PlanPage() {
  const [active, setActive] = useState("Rice");

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-16 py-12 bg-white text-center min-h-screen">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4 tracking-tight">
          Complete End To End Sorting Plan
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
          Our customizable systems are designed to maximize productivity while
          maintaining the integrity and appearance of your produce. With a focus
          on energy efficiency and sustainability, GrainTech offers reliable and
          innovative solutions tailored to meet the unique needs of your
          processing facility. Partner with us to enhance your operations and
          achieve the highest quality output.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm md:text-base font-medium ${
                active === tab
                  ? "bg-[#8E54FF] text-white shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#8E54FF]/10 hover:text-[#8E54FF]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="md: relative -top-10">
          <RicePaddyProcessingPage />
        </div> 

        {/* Sorting Section */}
        {data[active]?.sorting && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
              <span className="text-[#8E54FF]">Sorting Solutions</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {data[active].sorting.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-transform text-center"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="rounded-md mx-auto h-[100px] w-[160px] object-cover"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}


        {/* Flow Chart */}
        {data[active]?.flow && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
              <span className="text-[#8E54FF]">Flow Chart</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {data[active].flow.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`flow-${index}`}
                  className="w-[95%] md:w-[80%] h-auto rounded-2xl shadow-md hover:scale-[1.03] transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <ContactSidebar />
      <ChatBot />
      <AutoPopupChat />
      <Footerpage />
    </div>
  );
}
