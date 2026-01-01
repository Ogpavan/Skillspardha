import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Video from "../assets/video1.mp4";
import Navbar from "../components/Navbar.jsx";
import Stats from "./stats.jsx";
import LearnerSection from "./LearnerSection.jsx";
import CoursesSection from "./Courses.jsx";
import Learning from "./Learning.jsx";
import Footer from "../components/Footer.jsx";
import PlacementSection from "./PlacementSection.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className=" bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="items-center min-h-[70vh] sm:min-h-[90vh] overflow-hidden  ">
          {/* BG Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/fallback.jpg"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
          >
            <source src={Video} />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

          {/* Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />

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
                <span className="block whitespace-nowrap">Making Learning</span>
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                  Limitless
                </span>
              </motion.h1>

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

        <LearnerSection />
        <Stats />
        <CoursesSection />
        <Learning />
        <PlacementSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
