import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";
import SignupPopup from "./Signup";

// Add "Home" as the first item
const navItems = ["Home", "About", "Courses", "Contact"];

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path === "/home") setActiveItem("Home");
    else if (path === "/about") setActiveItem("About");
    else if (path === "/courses") setActiveItem("Courses");
    // else if (path === "/hackathons") setActiveItem("Hackathons");
    else if (path === "/contact") setActiveItem("Contact");
    else setActiveItem("");
  }, [location]);

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    switch (item) {
      case "Home":
        navigate("/");
        break;
      case "About":
        navigate("/about");
        break;
      case "Courses":
        navigate("/courses");
        break;
        // case "Hackathons":
        //   navigate("/hackathons");
        break;
      case "Contact":
        navigate("/contact");
        break;
         case "Hackathons":
        navigate("/hackathon");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out ${
          isScrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
            : "bg-transparent"
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="relative shrink-0 -mr-1">
                <div className="absolute -inset-3 bg-transparent rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-12 w-auto rounded-full"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight leading-none">
                <span className="text-blue-500">Skill</span>
                <span className="text-orange-500">Spardha</span>
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative px-4 py-2 text-[15px] font-medium transition-all duration-300 group"
                >
                  {activeItem === item && (
                    <span className="absolute inset-0 bg-white/5 rounded-lg border border-white/10 backdrop-blur-xl transition-all duration-300"></span>
                  )}
                  <span
                    className={`absolute inset-0 bg-white/10 rounded-lg opacity-0 transition-all duration-500 ${
                      hoveredItem === item ? "opacity-100" : ""
                    }`}
                  ></span>
                  {hoveredItem === item && (
                    <span className="absolute inset-0 bg-white/5 rounded-lg blur-sm animate-pulse"></span>
                  )}
                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      activeItem === item
                        ? "text-white"
                        : hoveredItem === item
                        ? "text-white"
                        : "text-white/60"
                    }`}
                  >
                    {item}
                  </span>
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <button
                className="btn relative overflow-hidden group isolate"
                onClick={() => setIsSignupOpen(true)}
              >
                <span className="relative z-10">Sign up</span>
                <div
                  className="absolute inset-0 -z-10
                    bg-linear-to-r from-blue-400/20 to-purple-500/20
                    opacity-0 scale-75 
                    blur-2xl 
                    transition-all duration-500 ease-out
                    group-hover:opacity-100 group-hover:scale-100 group-hover:blur-xl"
                ></div>
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-[max-height] duration-500 ease-out overflow-hidden bg-black/90 backdrop-blur-2xl border-t border-white/5 ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 sm:px-6 py-8">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`w-full px-5 py-4 text-left text-[15px] font-medium rounded-xl transition-all duration-300 ${
                    activeItem === item
                      ? "text-white bg-white/5 border border-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <button
                className="btn relative overflow-hidden group isolate w-full"
                onClick={() => setIsSignupOpen(true)}
              >
                <span className="relative z-10">Sign up</span>
                <div
                  className="absolute inset-0 -z-10
                    bg-linear-to-r from-blue-400/20 to-purple-500/20
                    opacity-0 scale-75 
                    blur-2xl 
                    transition-all duration-500 ease-out
                    group-hover:opacity-100 group-hover:scale-100 group-hover:blur-xl"
                ></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Signup Modal Popup with smooth animation */}
      <AnimatePresence>
        {isSignupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: "fixed", inset: 0, zIndex: 100 }}
          >
            <SignupPopup open={isSignupOpen} onOpenChange={setIsSignupOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </>
  );
};

export default PremiumNavbar;
