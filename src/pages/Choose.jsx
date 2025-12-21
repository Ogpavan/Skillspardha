import React, { useEffect, useRef, useState } from 'react';
import { Network, Users, Award, Lightbulb, ArrowUpRight } from 'lucide-react';

export default function WhyChooseUs() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: Network,
      title: "Accessibility",
      description: "Learning made easy for everyone, anytime, anywhere.",
      color: "bg-orange-400"
    },
    {
      icon: Users,
      title: "Cost-effectiveness",
      description: "Affordable learning without compromising on quality.",
      color: "bg-orange-400" 
    },
    {
      icon: Award,
      title: "Course accessibility",
      description: "Gain recognized credentials and professional skills.",
      color: "bg-orange-400"
    },
    {
      icon: Lightbulb,
      title: "Personalized learning",
      description: "Customized courses tailored to your unique learning needs.",
      color: "bg-orange-400"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)));
        setScrollY(scrollProgress);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div 
          className="text-center mb-16 transition-all duration-700"
          style={{
            transform: `translateY(${isVisible ? 0 : 40}px)`,
            opacity: isVisible ? 1 : 0
          }}
        >
          <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-3">
            WHY CHOOSE US
          </p>
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            style={{
              transform: `translateY(${scrollY * -20}px)`
            }}
          >
            United we strive and achieve <br /> remarkable success.
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 relative cursor-pointer overflow-hidden"
              style={{
                transform: `translateY(${isVisible ? 0 : 60}px) scale(${isVisible ? 1 : 0.95})`,
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 via-orange-300/0 to-orange-500/0 group-hover:from-orange-400/5 group-hover:via-orange-300/10 group-hover:to-orange-500/5 transition-all duration-500 rounded-2xl"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-400/20 transition-all duration-500"></div>
              {/* Icon and Arrow Container */}
              <div 
                className="flex items-start justify-between mb-6 relative z-10"
                style={{
                  transform: `translateY(${scrollY * (10 + index * 5)}px)`
                }}
              >
                {/* Icon */}
                <div className={`${feature.color} rounded-xl p-4 inline-flex transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-400/50`}>
                  <feature.icon className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-500" strokeWidth={2} />
                </div>
                
                {/* Decorative circle that scales on hover */}
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-orange-400/0 group-hover:bg-orange-400/10 rounded-full blur-xl transition-all duration-700 group-hover:scale-150"></div>
              </div>

              {/* Content */}
              <div
                className="relative z-10"
                style={{
                  transform: `translateY(${scrollY * (5 + index * 3)}px)`
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}