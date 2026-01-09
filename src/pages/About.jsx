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

import About_sec from "./About_sec.jsx";

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

  const float = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse",
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
       <section className="relative flex items-center min-h-[70vh] sm:min-h-screen overflow-hidden">
                {/* BG Image */}
                <img
                  src={Bg}
                  alt="Background"
                  className="absolute top-0 left-0 w-screen h-screen object-cover brightness-[0.5]"
                  style={{
                    transform: `translateY(${bgParallax}px)`,
                  }}
                />
      
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-[1]" />
      
                {/* Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-[2] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />
      
                {/* Glow Effects */}
                <motion.div
                  variants={float}
                  animate="animate"
                  style={{ transform: `translateY(${glowParallax}px)` }}
                  className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl z-[3]"
                />
                <motion.div
                  variants={float}
                  animate="animate"
                  style={{ transform: `translateY(${glowParallax}px)` }}
                  className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl z-[3]"
                />
      
                {/* Content */}
                <div className="relative z-10 w-full flex justify-center sm:justify-center px-4 sm:px-6 md:px-8 lg:px-20 pt-[30vh] pb-16">
                  <motion.div
                    className="w-full max-w-[90vw] sm:max-w-md md:w-1/2 md:max-w-xl text-left space-y-6 -translate-x-2 sm:translate-x-0 md:pr-12"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                  >
                    <motion.h1
                      variants={fadeUp}
                      className="text-xl sm:text-base md:text-4xl lg:text-6xl font-semibold leading-tight"
      
                    >
                      <span className="block whitespace-nowrap">From Vision</span>
                      <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                        To Reality
      
                      </span>
                    </motion.h1>
      
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                     Our mission is to create learning spaces where makers grow through experience, teamwork, and purposeful building.
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
                      onClick={() => navigate("/courses")}
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

     
       
       
      </div>
      <About_sec />
      <Stats />
      <Learning />
      <Choose />
      <Footer />
    </>
  );
}