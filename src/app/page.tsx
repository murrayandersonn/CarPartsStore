import React from "react";
import HeroSection from "./components/HeroSection";
import ReviewsAndSales from "./components/ReviewsAndSales";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ReviewsAndSales />
    </div>
  );
}
