import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Check, ChevronRight, Search } from "lucide-react";
import Courses from "./Courses";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function CoursePg() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [courseCategories, setCourseCategories] = useState({});
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch categories and courses from public/courses.json
  useEffect(() => {
    let mounted = true;

    setLoadingCourses(true);

    fetch(`https://app.skillspardha.com/api/display-courses/by-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store", // IMPORTANT for mobile + SW
    })
      .then(async (res) => {
        const contentType = res.headers.get("content-type");

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status}: ${text}`);
        }

        if (!contentType || !contentType.includes("application/json")) {
          const text = await res.text();
          throw new Error("Non-JSON response: " + text.slice(0, 200));
        }

        return res.json();
      })
      .then((data) => {
        if (!mounted) return;

        setCourseCategories(data || {});

        if (!activeCategory && data) {
          const first = Object.keys(data)[0];
          if (first) setActiveCategory(first);
        }
      })
      .catch((err) => {
        console.error("❌ Mobile API error:", err.message);
      })
      .finally(() => mounted && setLoadingCourses(false));

    return () => {
      mounted = false;
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.5,
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

  const bgParallax = scrollY * 0.5;
  const contentParallax = scrollY * 0.3;
  const glowParallax = scrollY * 0.2;

  const categories = Object.keys(courseCategories || {});

  // Courses for active tab
  const currentCourses = courseCategories?.[activeCategory] || [];

  // All courses (for global search)
  const allCourses = Object.values(courseCategories || {}).reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? val : []),
    [],
  );

  // Final filtered list
  const filteredCourses = !searchQuery?.trim()
    ? currentCourses
    : allCourses.filter((course) => {
        const query = searchQuery.trim().toLowerCase();

        const searchableText = `
        ${course?.title || ""}
        ${course?.description || ""}
        ${(course?.tags || []).join(" ")}
      `.toLowerCase();

        return searchableText.includes(query);
      });

  return (
    <>
      <Navbar />
      <div className="bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative flex items-center min-h-[70vh] sm:min-h-screen overflow-hidden">
          {/* BG Image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
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
                className="text-3xl sm:text-sm md:text-5xl lg:text-6xl font-semibold leading-tight"
              >
                <span className="block whitespace-nowrap">Your Dreams,</span>
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                  Our Mission
                </span>
              </motion.h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Stop consuming content. Start building skill. Progress that
                shows in your work.
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

        {/* Course Categories Section */}
        <section className="relative py-10 px-2 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider text-center mb-2">
                ONLINE COURSES
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center">
                Explore Our Online Courses
              </h2>
            </div>
            <div className="mb-8">
              <div className="relative max-w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-center text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses by name, topic, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-base text-gray-900"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Categories */}
              <div className="w-full lg:w-64 shrink-0">
                {/* Mobile Tabs */}
                <div className="lg:hidden mb-6">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-b border-gray-200">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveCategory(category);
                          setSearchQuery("");
                        }}
                        className={`pb-2 text-sm font-semibold transition relative ${
                          category === activeCategory
                            ? "text-gray-900"
                            : "text-gray-500 hover:text-gray-800"
                        }`}
                      >
                        {category}
                        {category === activeCategory && (
                          <span className="absolute left-0 -bottom-px w-full h-0.5 bg-orange-400 rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Desktop Sidebar */}
                <div className="hidden lg:block">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Courses
                  </p>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveCategory(category);
                          setSearchQuery("");
                        }}
                        className={`w-full text-left px-4 py-3 text-base font-medium transition-all ${
                          category === activeCategory
                            ? "text-gray-900 border-l-4 border-orange-400 bg-gray-50"
                            : "text-gray-600 hover:text-gray-900 border-l-4 border-transparent hover:border-gray-300"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Content - Course List */}
              <div className="flex-1">
                {loadingCourses ? (
                  <div className="text-center py-16 text-gray-500 text-lg">
                    Loading courses...
                  </div>
                ) : filteredCourses.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-xl text-gray-500">
                      No courses found matching "{searchQuery}"
                    </p>
                    <button
                      onClick={() => setSearchQuery("")}
                      className="mt-4 text-gray-900 font-semibold hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {filteredCourses.map((course, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200 last:border-b-0 group"
                      >
                        {/* Course Image */}
                        <div className="md:w-80 shrink-0 relative">
                          <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                            <img
                              src={
                                course.image?.startsWith("/uploads/")
                                  ? `https://app.skillspardha.com/api${course.image}`
                                  : course.image
                              }
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          {/* 40% OFF Badge */}
                          <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-linear-to-br from-orange-500 to-red-600 shadow-2xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-transparent rounded-full"></div>
                            <div className="relative flex flex-col items-center justify-center">
                              <span
                                className="text-white font-black text-2xl leading-none"
                                style={{
                                  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                                }}
                              >
                                40%
                              </span>
                              <span
                                className="text-white font-bold text-[11px] uppercase tracking-wider"
                                style={{
                                  textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                                }}
                              >
                                OFF
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Course Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                              {course.duration} • {course.level}
                            </p>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                              {course.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                              {course.description}
                            </p>
                            <div className="flex items-center justify-between mt-6">
                              {/* Price */}
                              <div className="flex flex-row-reverse gap-x-3 items-center">
                                <span className="text-xs font-medium text-gray-400 line-through mt-2">
                                  ₹8,999
                                </span>
                                <div className="flex">
                                  <span className="text-4xl font-black text-gray-900">
                                    {course.price}
                                  </span>
                                </div>
                              </div>
                              {/* CTA */}
                              <button
                                className="group inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wide bg-white text-black border-2 border-black cursor-pointer w-auto sm:w-fit hover:bg-gray-200 hover:text-black transition-all duration-300"
                                onClick={() => {
                                  navigate(
                                    `/courses/${encodeURIComponent(
                                      activeCategory,
                                    )}/${course.id}`,
                                  );
                                }}
                              >
                                <span className="hidden sm:inline whitespace-nowrap">
                                  Course Details
                                </span>
                                <span className="sm:hidden">View</span>
                                <svg
                                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <Courses />
      </div>
      <Footer />
    </>
  );
}
