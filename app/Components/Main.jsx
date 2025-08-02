"use client";
import React, { useState, useEffect } from "react";

import Hero from "./LandingPages/Hero";
import TechnologyPage from "./LandingPages/TechnologyPage";
import ProductsPage from "./LandingPages/ProductsPage";
import AboutUsPage from "./LandingPages/AboutUsPage";
import Footerpage from "./LandingPages/Footerpage";
import Gallery from "./LandingPages/Gallery";
import ChatBot from "./ChatBot/ChatBot";
import OurAims from "./LandingPages/OurAims";
import TeamSection from "./LandingPages/TeamSection";
import BusinessGrowthBanner from "./LandingPages/BusinessGrowthBanner";
import Latestnews from "./LandingPages/Latestnews";
import FAQSection from "./LandingPages/FAQsection";
import VisitorPopup from "../Components/VisitorPages/Visitor";
import AutoPopupChat from "./LandingPages/AutoComponentspop";
import OurClients from "./LandingPages/OurClients";
import ContactSidebar from "./LandingPages/ContactSidebar";
import SwansorterJourney from "./LandingPages/SwansorterJourney";




// Extra
import ProductCategory from "../Components/ExtraComponents/ProductCategory";
// import AboutUs from '../Components/ExtraComponents/AboutUs'
import Solutions from "./ExtraComponents/Solutions";
import FeatureImages from "./ExtraComponents/FeatureImages";
import CooperationProcess from "./ExtraComponents/CooperationProcess";

const Main = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    // Show landing page immediately
    setShowLanding(true);

    // Show popup immediately without checking localStorage
    // This ensures it always appears for testing
    const timer = setTimeout(() => {
      setPopupOpen(true);
      // We can keep this line for production, or remove it for testing
      // localStorage.setItem("popupShown", "true");
    }, 1000); // Reduced to 1 second delay for faster testing

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("Main component mounted, AutoPopupChat should be loaded");
  }, []);

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="w-full h-auto overflow-hidden">
      {showLanding && (
        <>
          <Hero />
          <TechnologyPage />
          <ProductCategory />
          <ProductsPage />
          <FeatureImages />
          <OurAims />
          <BusinessGrowthBanner />
          <Solutions />
          <AboutUsPage />
          {/* <TeamSection /> */}
          <Gallery />
          <Latestnews />
          <FAQSection />
          <CooperationProcess />
          <SwansorterJourney/>
          <OurClients />
          <Footerpage />
          <ContactSidebar />
          <ChatBot />
          <AutoPopupChat />

          {/* <AboutUs/> */}
        </>
      )}

      {/* Show popup only after landing is shown */}
      {popupOpen && (
        <VisitorPopup open={popupOpen} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Main;
