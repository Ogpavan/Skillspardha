import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LearningJourneySection() {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const MotionLink = motion(Link);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      setScrollY(window.scrollY);

      // Check if section is in viewport
      const isInView = rect.top < windowHeight * 0.8 && rect.bottom > 0;
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  // Calculate parallax only when section is near viewport
  const calculateParallax = () => {
    if (!sectionRef.current) return { y: 0, opacity: 1 };

    const rect = sectionRef.current.getBoundingClientRect();
    const relativeScroll =
      scrollY - (rect.top + window.scrollY) + window.innerHeight;

    // Only apply parallax when section is in view
    if (rect.top > window.innerHeight || rect.bottom < 0) {
      return { y: 0, opacity: 1 };
    }

    const y = Math.max(
      -120,
      Math.min(0, (relativeScroll - window.innerHeight) * 0.15)
    );
    const opacity = Math.max(
      0.3,
      Math.min(1, 1 - (Math.abs(rect.top) / window.innerHeight) * 0.3)
    );

    return { y, opacity };
  };

  const { y, opacity } = calculateParallax();

  return (
    <section
      ref={sectionRef}
      aria-label="Start your learning journey"
      className="relative w-full min-h-[420px] flex items-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${y}px)`,
          opacity: opacity,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://www.udacity.com/_next/image?url=%2Fimages%2Fexperiments%2Fab_plp_redesign_2025%2Fit-specialist-in-front-of-computer.png&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left content */}
          <div
            className={`text-white transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h1
              className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
              style={{
                transitionDelay: isVisible ? "200ms" : "0ms",
              }}
            >
              Start Your Learning Journey
              <span className="text-orange-400"> Today</span>
            </h1>

            <p
              className="max-w-xl text-sm md:text-base text-white/90 leading-relaxed mb-6"
              style={{
                transitionDelay: isVisible ? "400ms" : "0ms",
              }}
            >
              Master real-world skills with practical, industry-ready learning.
            </p>

            <div
              className="flex gap-4"
              style={{
                transitionDelay: isVisible ? "600ms" : "0ms",
              }}
            >
              <MotionLink
                to="/courses"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#e5e5e5",
                  color: "#1a1a1a",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="btn relative overflow-hidden group isolate flex items-center gap-2"
              >
                View All Courses
                <ArrowRight
                  size={16}
                  className="transition-all duration-300 group-hover:translate-x-1"
                />
              </MotionLink>
            </div>
          </div>

          {/* Right spacer */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
