import React from "react";
import HeroSection from "./components/HeroSection.tsx";
import ReviewsAndSales from "./components/ReviewsAndSales.tsx";
import Navbar from "./components/Navbar.tsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ReviewsAndSales />
    </div>
  );
}
