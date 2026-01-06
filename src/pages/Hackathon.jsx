import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Calendar, MapPin, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import hackathon from "../assets/hackathon.jpg";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import About_hackathon from "./About_hackathon.jsx";

export default function CoursePg() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);
  const upcomingRef = useRef(null);
  const pastRef = useRef(null);
  const [upcomingVisible, setUpcomingVisible] = useState(false);
  const [pastVisible, setPastVisible] = useState(false);
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

      if (upcomingRef.current) {
        const rect = upcomingRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isInView && !upcomingVisible) {
          setUpcomingVisible(true);
        }
      }

      if (pastRef.current) {
        const rect = pastRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isInView && !pastVisible) {
          setPastVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [upcomingVisible, pastVisible]);

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

 
  const pastEvents = [
    {
      id: 1,
      title: "Hack Your Portfolio",
      date: "JUL 12TH - 14TH",
      location: "Online Mode",
      type: "Digital Only",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 2,
      title: "Hack the 6ix",
      date: "AUG 2ND - 4TH",
      location: "Online Mode",
      type: "In-Person Only",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 3,
      title: "Global Hack Week: AI/ML",
      date: "AUG 9TH - 15TH",
      location: "Online Mode",
      type: "Digital Only",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Global Hack Week: Cloud",
      date: "SEP 5TH - 12TH",
      location: "Online Mode",
      type: "Digital Only",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-black text-white overflow-x-hidden">
        {/* Hero Section with Background Image */}
        <section className="relative flex items-center min-h-[70vh] sm:min-h-screen overflow-hidden">
          {/* BG Image */}
          <img
            src={hackathon}
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
                <span className="block whitespace-nowrap">Where Ideas Turn</span>
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
                  Into Impact

                </span>
              </motion.h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Join hands-on hackathons and workshops built for makers who want to learn fast, collaborate deeply, and build things that matter.
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
                Grab the Opportunity
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
            {/* Optionally, add an empty right side for spacing on desktop */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        </section>
        <About_hackathon />

        {/* Events Section */}
        <section className="w-full bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">

            

            {/* Past Events Section */}
            <div ref={pastRef}>
              <div className={`text-center mb-12 transition-all duration-1000 ${pastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                  Past Events
                </h2>
                <p className="text-xl text-gray-700 font-medium mb-3">Celebrating our community's achievements</p>
                <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Take a look at the incredible events we've hosted. From global hack weeks to intensive bootcamps, our community continues to learn, build, and grow together.
                </p>
              </div>

              {/* Past Events Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pastEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={`group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:-translate-y-2 ${pastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                      }`}
                    style={{
                      transform: `translateY(${scrollY * 0.02 * (index % 2 === 0 ? -1 : 1)}px)`,
                      transitionDelay: pastVisible ? `${index * 150}ms` : '0ms'
                    }}
                  >
                    {/* Image with Gradient Overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-50 group-hover:opacity-70 mix-blend-multiply transition-opacity duration-500`} />
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {event.title}
                      </h3>

                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="font-medium text-gray-500">{event.date}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="font-semibold text-gray-900">{event.location}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Monitor className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-500">{event.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        </section>
        <Footer />
      </div>
    </>
  );
}