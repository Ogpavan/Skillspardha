import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Girl2 from "../assets/girl2.webp";
import Girl3 from "../assets/girl3.webp";
import Study from "../assets/study.webp";
import Bg from "../assets/bg.avif";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Stats from "./stats.jsx";
import Learning from "./Learning.jsx";
import Choose from "./Choose.jsx";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.06, 0.9, 0.12, 0.99],
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const isInView =
          rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax calculations
  const bgParallax = scrollY * 0.5;
  const glowParallax = scrollY * 0.2;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative flex items-center min-h-[80vh] sm:min-h-[90vh] overflow-hidden">
          {/* BG Image with Parallax */}
          <img
            src={Bg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
            style={{
              transform: `translateY(${bgParallax}px)`,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

          {/* Glow Effects */}
          <div
            className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"
            style={{
              transform: `translate(${
                glowParallax * 0.5
              }px, ${glowParallax}px)`,
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
            style={{
              transform: `translate(-${
                glowParallax * 0.5
              }px, -${glowParallax}px)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-24">
            <motion.div
              className="w-full md:w-1/2 max-w-3xl md:max-w-7xl text-left space-y-6 md:pr-12"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your dreams, <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                  our mission
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Learn with clarity, not clutter. No shortcuts. No noise. Just
                intentional progress — one skill at a time.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.2 },
                }}
                className="btn px-6 py-3 text-base sm:text-lg font-semibold flex items-center gap-2"
              >
                Explore
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
            {/* Optionally, add an empty right side for spacing on desktop */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        </section>

        {/* Content Section with Scroll Animations */}
        <div
          ref={contentRef}
          className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20 bg-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8"
                style={{
                  transitionDelay: isVisible ? "0ms" : "0ms",
                }}
              >
                Consistent growth,
                <br />
                boundless potential
              </h2>
              <p
                className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed"
                style={{
                  transitionDelay: isVisible ? "100ms" : "0ms",
                }}
              >
                SkillSpardha cutting-edge online learning platform empowers
                individuals and teams with vital skills, enhancing their
                confidence for professional success and personal growth.
              </p>
              {/* Features */}
              <ul className="space-y-6">
                {[
                  "Our online learning platform inspires learners to discover their potential and embark on a journey of growth.",
                  "Our platform motivates learners to pursue their dreams and reach significant milestones in their education.",
                  "Our learning platform encourages individuals to achieve their best, paving the way for personal and professional success.",
                ].map((text, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-4 transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${600 + index * 150}ms`
                        : "0ms",
                    }}
                  >
                    <span className="shrink-0 w-6 h-6 flex items-center font-bold justify-center text-orange-400 text-xl ">
                      ✓
                    </span>
                    <span className="text-base leading-relaxed text-gray-600">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div
                className={`rounded-3xl h-64 sm:h-72 overflow-hidden bg-linear-to-br from-[#f5b5a0] to-[#e89480] hover:scale-105 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{
                  transitionDelay: isVisible ? "200ms" : "0ms",
                }}
              >
                <img
                  src={Girl2}
                  alt="Student with laptop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`rounded-3xl row-span-2 min-h-[450px] sm:min-h-[500px] overflow-hidden bg-linear-to-br from-[#c4a365] to-[#9d8b70] hover:scale-105 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{
                  transitionDelay: isVisible ? "400ms" : "0ms",
                }}
              >
                <img
                  src={Girl3}
                  alt="Student studying"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`rounded-3xl h-48 sm:h-56 overflow-hidden bg-linear-to-br from-[#c4c1b8] to-[#a8a59d] hover:scale-105 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{
                  transitionDelay: isVisible ? "600ms" : "0ms",
                }}
              >
                <img
                  src={Study}
                  alt="Students collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats />
      <Learning />
      <Choose />
      <Footer />
    </>
  );
}
