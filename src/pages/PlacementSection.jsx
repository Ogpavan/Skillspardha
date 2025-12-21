import React, { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: "Full mastery program!",
      text: "Professional, responsive, and easy to work with. They understood our needs perfectly.The final product exceeded expectations.well good.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      name: "James Anderson"
    },
    {
      id: 2,
      title: "Ultimate learning journey!",
      text: "From start to finish, everything was perfect. Great attention to detail, pixel-perfect layouts, and a strong sense of user experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      name: "Charlotte Williams"
    },
    {
      id: 3,
      title: "From basics to mastery!",
      text: "We're over the moon with our new website. It looks sharp, functions brilliantly, and has already drawn great feedback.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      name: "Oliver Smith"
    },
    {
      id: 4,
      title: "Exceptional experience!",
      text: "The team delivered beyond our expectations. Every detail was carefully crafted, and the final result speaks for itself.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      name: "Emma Johnson"
    },
    {
      id: 5,
      title: "Game-changing results!",
      text: "Working with them transformed our business. The quality and professionalism were outstanding from day one.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80",
      name: "Michael Brown"
    }
  ];

  // Auto-play carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const TestimonialCard = ({ testimonial }) => {
    return (
      <div className="flex-shrink-0 w-full sm:w-[calc(100%-48px)] md:w-[380px] bg-white rounded-[20px] p-8 sm:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-500 mx-auto sm:mx-0">
        {/* Quote Icon */}
        <div className="text-[#e0e0e0] text-[64px] leading-[0.8] font-serif mb-6 select-none">"</div>

        {/* Title */}
        <h3 className="text-[18px] font-bold text-[#2a2a2a] mb-5 leading-[1.3]">
          {testimonial.title}
        </h3>

        {/* Text */}
        <p className="text-[#757575] text-[14px] leading-[1.7] mb-10">
          {testimonial.text}
        </p>

        {/* Divider */}
        <div className="w-[48px] h-[3px] bg-orange-400 mb-8 rounded-full"></div>

        {/* Profile */}
        <div className="flex flex-col items-center pt-2">
          <div className="w-[72px] h-[72px] rounded-full overflow-hidden mb-4 border-2 border-gray-100">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[#555] font-semibold text-[15px]">
            {testimonial.name}
          </p>
        </div>
      </div>
    );
  };

  // Calculate card width + gap based on screen size
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return width; // Full width on mobile
      if (width < 768) return width - 48; // Account for padding on small screens
      return 404; // 380px card + 24px gap
    }
    return 404;
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#f5f5f5] py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADING */}
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-[#888] uppercase tracking-[0.2em] text-[10px] font-bold mb-4">
            REVIEWS FROM GLOBAL LEARNERS
          </p>
          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold text-[#1a1a1a] leading-[1.2] px-4">
            What our clients say about us
          </h2>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative max-w-[1200px] mx-auto">
          {/* Fade overlays on sides - hidden on small screens */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10 pointer-events-none"></div>
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Track */}
          <div className="overflow-hidden px-0 sm:px-0">
            <div 
              className="flex gap-4 sm:gap-6 transition-transform duration-800 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`
              }}
            >
              {/* Render testimonials in a loop for infinite effect */}
              {testimonials.concat(testimonials).concat(testimonials).map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Dots indicator for mobile */}
          <div className="flex sm:hidden justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex % testimonials.length === index 
                    ? 'bg-orange-400 w-6' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}