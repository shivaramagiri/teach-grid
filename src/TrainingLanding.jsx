import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PremiumCards from "./components/PremiumCards.jsx";
import Footer from "./components/Footer.jsx";
import TrainerIntro from "./components/trainer-intro.jsx";

export default function TrainingLanding(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-pink-50 text-slate-900">
      <Header />
      <Hero />
      <PremiumCards />
      <Footer />
      <TrainerIntro />
    </div>
  );
}
