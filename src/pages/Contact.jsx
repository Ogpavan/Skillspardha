import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Bg_contact from "../assets/bg_contact1.webp";
import FAQ from "./FAQ";
import Footer from "../components/Footer";

export default function CoursePg() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    saveInfo: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      saveInfo: false,
    });
  };

  const bgParallax = scrollY * 0.5;
  const contentParallax = scrollY * 0.3;
  const glowParallax = scrollY * 0.2;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section with Background Image */}
        <section className="relative flex items-center min-h-[70vh] sm:min-h-screen overflow-hidden">
          {/* BG Image with Parallax */}
          <img
            src={Bg_contact}
            alt="Background"
            className="absolute inset-0 bg-black/90 w-full h-full object-cover brightness-[0.5]"
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
              <div className="relative z-10 max-w-7xl mx-auto px-0 w-full">
                <div className="grid  gap-12 items-center">
                  {/* Left content */}
                  <motion.div
                    className="space-y-4  sm:px-6 md:px-8 lg:px-0 text-white max-w-3xl mx-auto lg:mx-0 pb-12 lg:pb-0"
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.9 }}
                  >
                    <motion.p
                      variants={fadeUp}
                      className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold uppercase text-white"
                    >
                      Connect with us
                    </motion.p>
                    <motion.h1
                      variants={fadeUp}
                      className="md:text-5xl sm:text-3xl leading-none tracking-tight"
                    >
                      Get in touch <br />
                      <span className="text-transparent bg-clip-text bg-orange-400">
                        with us
                      </span>
                    </motion.h1>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <div className="hidden md:block md:w-1/2" />
          </div>
        </section>

        {/* Contact Section - Overlapping Hero */}
        <section className="relative mt-23 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Contact Info (No Card) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white p-8 lg:p-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  Interested in learning online? Contact Us
                </h2>

                <p className="text-base lg:text-lg text-gray-600 mb-12 leading-relaxed text-justify">
                  We’d love to hear from you. From course details and program
                  selection to enrollment support, our team is available to
                  assist you at every stage. Send us a message and we’ll help
                  you move forward with clarity.
                </p>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Fill out for contact
                </h3>
                <p className="text-gray-600 mb-8">
                  Reach out and our team will connect with you shortly.
                </p>

                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name*"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email*"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message*"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center"></div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Send message
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Extra spacing at bottom */}
        <div className="h-32"></div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
}
