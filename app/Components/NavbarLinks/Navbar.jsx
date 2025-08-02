"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaChevronRight } from "react-icons/fa";
import GoogleTranslateDropdown from "../Google_Translator/google";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);

  return (
    <nav className="w-[95%] mx-auto my-4">
      <div className="flex justify-between items-center py-2 text-white rounded-xl bg-gradient-to-r from-[#1f3d3b] to-[#2b4a48] shadow-xl px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Image
            src="https://res.cloudinary.com/dt2juqy9s/image/upload/v1745319822/Logo_img_rxgrwt.png"
            className="rounded-full"
            alt="SwanSorter Logo"
            width={50}
            height={50}
          />
          <h1 className="text-sm sm:text-lg font-bold leading-3.5">
            SwanSorter <br />
            <span className="text-xs">Systems Pvt Ltd.</span>
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex gap-6 text-sm lg:text-base font-medium items-center"
        >
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <span className="hover:text-blue-300 cursor-pointer">Solutions</span>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2 flex flex-col bg-white text-black py-4 px-4 rounded-lg shadow-xl top-full left-0 min-w-[230px] z-50 space-y-3"
            >
              <div className="relative group/nested">
                <span className="cursor-pointer hover:text-blue-600 font-medium flex items-center justify-between">
                  ColorSorters <FaChevronRight className="ml-2 text-sm" />
                </span>

                <div className="absolute invisible group-hover/nested:visible opacity-0 group-hover/nested:opacity-100 transition-all duration-300 top-0 left-full ml-2 bg-white shadow-lg rounded-lg px-4 py-3 space-y-2 z-50 min-w-[200px]">
                  <div className="relative group/belt">
                    <Link href="/ColorSorters/Belt-type" className="hover:text-blue-600 text-sm block">Belt Type</Link>
                    <div className="absolute left-full top-0 ml-2 mt-0 invisible group-hover/belt:visible opacity-0 group-hover/belt:opacity-100 bg-white shadow-lg rounded-lg px-4 py-2 space-y-1 transition-all duration-300 z-50 min-w-[180px]">
                      <Link href="/Belt_Type1" className="block text-sm hover:text-blue-600">Slow Speed Conveyors</Link>
                      <Link href="/Belt_Type2" className="block text-sm hover:text-blue-600">Belt Sortex</Link>
                    </div>
                  </div>

                  <div className="relative group/chute">
                    <Link href="/ColorSorters/Chute-type" className="hover:text-blue-600 text-sm block">Chute Type</Link>
                    <div className="absolute left-full top-0 ml-2 mt-0 invisible group-hover/chute:visible opacity-0 group-hover/chute:opacity-100 bg-white shadow-lg rounded-lg px-4 py-2 space-y-1 transition-all duration-300 z-50 min-w-[220px]">
                      <Link href="/Chute_Type1" className="block text-sm hover:text-blue-600">Chute Type Colour sorter</Link>
                      <Link href="/Chute_Type2" className="block text-sm hover:text-blue-600">Colour sorter For Cashew</Link>
                      <Link href="/Chute_Type3" className="block text-sm hover:text-blue-600">Colour sorter for Millets & Fired gram</Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/Solutions" className="hover:text-blue-500 transition">Solutions</Link>
              <Link href="/Multigrains" className="hover:text-blue-500 transition">MultiGrains Sorting</Link>
              <Link href="/Spices" className="hover:text-blue-500 transition">Spices Sorting</Link>
              <Link href="/Pulses" className="hover:text-blue-500 transition">All Types Of Pulses Sorting</Link>
              <Link href="/Seeds" className="hover:text-blue-500 transition">Seeds Sorting</Link>
            </motion.div>
          </div>

          <Link href="/Productss" className="hover:text-gray-300 transition">Products</Link>
          <Link href="/Plans" className="hover:text-gray-300 transition">END to END sorting</Link>
          <Link href="/Company" className="hover:text-gray-300 transition">About us</Link>
          <Link href="/R&D" className="hover:text-gray-300 transition">R&D</Link>
          <Link href="/Services" className="hover:text-gray-300 transition">Services</Link>
          <Link href="/Feedback" className="hover:text-gray-300 transition">Feedback</Link>
          <Link href="/Team" className="hover:text-gray-300 transition">Our Team</Link>
          <Link href="/Blogs" className="hover:text-gray-300 transition">Blogs</Link>
          <Link href="/Videos" className="hover:text-gray-300 transition">Videos</Link>
          <div className="mx-2"><GoogleTranslateDropdown /></div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden flex flex-col bg-[#1f3d3b] text-white mt-2 rounded-xl shadow-xl p-4 space-y-4"
        >
          <Link href="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>

          <details>
            <summary className="cursor-pointer font-semibold py-2 px-2 rounded-md hover:bg-gray-100 transition">Solutions</summary>
            <div className="ml-4 mt-2 space-y-2">
              <details>
                <summary className="cursor-pointer font-medium py-2 px-2 rounded-md hover:bg-gray-100 transition">ColorSorters</summary>
                <div className="ml-4 mt-2 space-y-2">
                  <details>
                    <summary className="cursor-pointer font-medium py-2 px-2 rounded-md hover:bg-gray-100 transition">Belt Type</summary>
                    <div className="ml-4 mt-2 space-y-2">
                      <Link href="/Belt_Type1" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Slow Speed Conveyors</Link>
                      <Link href="/Belt_Type2" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Belt Sortex</Link>
                    </div>
                  </details>
                  <details>
                    <summary className="cursor-pointer font-medium py-2 px-2 rounded-md hover:bg-gray-100 transition">Chute Type</summary>
                    <div className="ml-4 mt-2 space-y-2">
                      <Link href="/Chute_Type1" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Chute Type Colour sorter</Link>
                      <Link href="/Chute_Type2" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Colour sorter For Cashew</Link>
                      <Link href="/Chute_Type3" className="block hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Colour sorter for Millets & Fired gram</Link>
                    </div>
                  </details>
                </div>
              </details>
              <Link href="/Solutions" className="block hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Solutions</Link>
              <Link href="/Multigrains" className="block hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Multi Grains Sorting</Link>
              <Link href="/Spices" className="block hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Spices Sorting</Link>
              <Link href="/Pulses" className="block hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>All Types Of Pulses Sorting</Link>
              <Link href="/Seeds" className="block hover:text-blue-500 transition" onClick={() => setMenuOpen(false)}>Seeds Sorting</Link>
            </div>
          </details>

          <Link href="/Productss" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/Plans" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>END to END sorting</Link>
          <Link href="/Company" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link href="/R&D" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>R&D</Link>
          <Link href="/Services" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/Feedback" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Feedback</Link>
          <Link href="/Team" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Our Team</Link>
          <Link href="/Blogs" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link href="/Videos" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Videos</Link>
          <div className="pt-2">
            <GoogleTranslateDropdown />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
