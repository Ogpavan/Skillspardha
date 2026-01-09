import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Girl2 from "../assets/girl2.webp";
import Girl3 from "../assets/girl3.webp";
import Study from "../assets/study.webp";

const ConsistentGrowthSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const rect = contentRef.current.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.75 && rect.bottom > 0;

      setIsVisible(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white">
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20"
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8 text-black">
              Consistent growth,
              <br />
              boundless potential
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              SkillSpardha cutting-edge online learning platform empowers
              individuals and teams with vital skills, enhancing their
              confidence for professional success and personal growth.
            </p>

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
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center font-bold text-orange-400 text-xl">
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
              className={`rounded-3xl h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-[#f5b5a0] to-[#e89480] hover:scale-105 transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              <img
                src={Girl2}
                alt="Student with laptop"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`rounded-3xl row-span-2 min-h-[450px] sm:min-h-[500px] overflow-hidden bg-gradient-to-br from-[#c4a365] to-[#9d8b70] hover:scale-105 transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              <img
                src={Girl3}
                alt="Student studying"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`rounded-3xl h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-[#c4c1b8] to-[#a8a59d] hover:scale-105 transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
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
    </section>
  );
};

export default ConsistentGrowthSection;
