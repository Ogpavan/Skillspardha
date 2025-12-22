import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoursesSection() {

    const MotionLink = motion(Link);
  const allCourses = [
    {
      id: 1,
      category: "AI",
      title: "Master Artificial Intelligence and Machine Learning",
      lessons: 60,
      price: "5399",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tag: "AI",
      badge: "Newly Added"
    },
    {
      id: 3,
      category: "ML",
      title: "Deep Learning and Neural Networks",
      lessons: 55,
      price: "5399",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      tag: "ML"
    },
    {
      id: 5,
      category: "Data Analytics",
      title: "Data Science and Analytics Fundamentals",
      lessons: 50,
      price: "5399",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tag: "Data Analytics",
      badge: "Recommended"
    },
    {
      id: 6,
      category: "AI",
      title: "Natural Language Processing with Python",
      lessons: 38,
      price: "5399",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      tag: "AI"
    },
    {
      id: 8,
      category: "ML",
      title: "Computer Vision and Image Recognition",
      lessons: 48,
      price: "5399",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80",
      tag: "ML",
      badge: "Newly Added"
    },
    {
      id: 10,
      category: "Data Analytics",
      title: "Advanced SQL and Database Management",
      lessons: 44,
      price: "5399",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tag: "Data Analytics"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20 px-6 md:px-12 lg:px-16">
      
      {/* HEADING */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <p className="text-gray-500 uppercase tracking-widest text-[11px] font-semibold mb-3">
          FIND THE COURSE RIGHT FOR YOUR GOAL
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Select the program tailored to your <span className="text-orange-500">success!</span>
        </h2>
      </motion.div>

      {/* COURSE CARDS */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12"
      >
        {allCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer h-[380px] sm:h-[400px] md:h-[420px] lg:h-[400px]"
          >
            {/* FULL BACKGROUND IMAGE */}
            <div className="absolute inset-0">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark overlay that gets darker on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
            </div>

            {/* CONTENT OVERLAY */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              {/* TOP: Category and Badge */}
              <div className="flex flex-col gap-2">
                {course.badge && (
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider inline-block bg-orange-500 px-3 py-1.5 rounded-full w-fit">
                    {course.badge}
                  </p>
                )}
                
              </div>

              {/* BOTTOM: Title, Price, Lessons */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 leading-snug line-clamp-2 drop-shadow-lg">
                  {course.title}
                </h3>
                
                {/* PRICE AND LESSONS */}
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-orange-400 leading-none drop-shadow-lg">₹ {course.price}</p>
                    <p className="text-xs text-orange-400 mt-1">INR</p>
                  </div>
                </div>

                {/* BUTTON - Hidden by default, shown on hover */}
                <button
                  className="
                    inline-flex items-center justify-center
                    gap-1 px-6 py-2 text-xs font-medium uppercase tracking-wide
                    bg-orange-500 text-white
                    border border-black 
                    shadow-xl
                    transition-all duration-500
                    opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                    hover:bg-orange-400 hover:text-white
                    cursor-pointer
                  "
                >
                  <span>Course details</span>
                  <ArrowUpRight size={18} className="transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* SHOW MORE BUTTON */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-8"
      >
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
         View All Courses
         <ArrowRight
           size={16}
           className="transition-all duration-300 group-hover:translate-x-1"
         />
       </MotionLink>
      </motion.div>
    </div>
  );
}