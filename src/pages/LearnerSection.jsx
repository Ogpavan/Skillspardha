import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Users, GraduationCap, Award, BookOpen, Target } from "lucide-react";

const LearnerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const items = [
    { text: "Seasoned teachers", icon: GraduationCap },
    { text: "Skilled mentors", icon: Users },
    { text: "Expert educators", icon: BookOpen },
    { text: "Industry experts", icon: Briefcase },
    { text: "Experienced educators", icon: Award },
    { text: "Knowledge leaders", icon: Target },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-12'
          }`}
        >
          <h2 className="text-4xl font-bold leading-tight text-black mb-6">
            Join a growing community of <br /><span className="text-orange-400">18,000+ learners!</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Discover the journeys of our learners! Delve into their experiences and insights as they navigate
            their educational paths.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            Explore the inspiring stories of our learners! Gain insights into their unique experiences and the
            challenges they overcome on their educational journeys.
          </p>

          {/* GRID ICON LIST */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${index * 100 + 300}ms` : '0ms' 
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shadow">
                    <IconComponent size={18} className="" />
                  </div>
                  <span className="text-gray-900 font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div 
          className={`w-full transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-12'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
            alt="Learner"
            className="w-full rounded-[10px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default LearnerSection;