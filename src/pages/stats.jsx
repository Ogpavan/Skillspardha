import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


export default function CombinedSections() {

  const MotionLink = motion(Link);


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}


      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
          >
            Explore a wide range of<br />courses all in one place.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            Embrace a realm of possibilities and take charge of your destiny by honing new skills that help you fulfill your ambitions.
          </motion.p>
        </div>
      </section>

      {/* Stats Grid with Parallax */}
      <section className="py-16 px-8 bg-gray-100 relative overflow-hidden">
        {/* Floating Orbs Background */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            {/* Left Column - 2 Cards Stacked */}
            <div className="flex flex-col gap-8 h-full">
              {/* Hours Videos Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-3xl p-10 shadow-sm relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute top-8 right-8 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  <svg
                    className="w-8 h-8 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">120+</h2>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">Hours videos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Engage with a wealth of expertly crafted courses, delivered by top-tier professionals from the industry.
                </p>
              </motion.div>

              {/* Images Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-sm flex items-center justify-center overflow-hidden flex-1"
              >
                <div className="flex gap-6">
                  <motion.div
                    initial={{ opacity: 0, rotate: 0 }}
                    whileInView={{ opacity: 1, rotate: 6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ rotate: 8, y: -5 }}
                    className="w-32 h-44 rounded-3xl overflow-hidden shadow-lg"
                  >
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80" alt="Student" className="w-full h-full object-cover" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, rotate: 0 }}
                    whileInView={{ opacity: 1, rotate: -6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ rotate: -8, y: -5 }}
                    className="w-32 h-44 rounded-3xl overflow-hidden shadow-lg"
                  >
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80" alt="Learning" className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Center Column - Tall Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col h-full"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 flex flex-col justify-center flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">A Great Community</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We cherish the support of our diverse global community, fostering an inclusive
                  environment where everyone feels valued.
                </p>
                <MotionLink
                  to="/courses"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#e5e5e5"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center gap-1 px-6 py-2 text-sm font-medium uppercase tracking-wide bg-white text-black border-2 border-black cursor-pointer w-fit hover:text-black"
                >
                  Explore
                  <ArrowRight
                    size={16}
                    className="transition-all duration-300 group-hover:translate-x-1"
                  />
                </MotionLink>
              </div>
            </motion.div>

            {/* Right Column - 2 Cards Stacked */}
            <div className="flex flex-col gap-8 h-full">
              {/* Community Chat Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-3xl p-10 shadow-sm relative overflow-hidden flex-1"
              >
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  {/* Chat Bubbles with Staggered Animation */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                      <p className="text-sm text-gray-800">Hey, How are you?</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="flex items-start gap-2 flex-row-reverse"
                  >
                    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-gray-900 text-white rounded-2xl px-4 py-2">
                      <p className="text-sm">Good</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                      <p className="text-sm text-gray-800">Hey, How are you?</p>
                    </div>
                  </motion.div>
                </div>

                {/* Avatar Row */}
                <div className="flex gap-3 mt-36">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                  ].map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden"
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>


              </motion.div>

              {/* Happy Students Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-3xl p-10 shadow-sm relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-8 right-8 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <h2 className="text-6xl font-bold text-black mb-6">45K+</h2>
                <h3 className="text-2xl font-bold text-black mb-4">Happy Students</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our core belief: experiential learning drives results. Each course is designed to enhance practical skills and promote openness.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}