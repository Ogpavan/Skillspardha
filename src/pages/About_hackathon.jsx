import React from 'react';

export default function MissionPage() {
  const navItems = [
    'Upcoming events',
    'Past events',
    'Hackathon',
    'Programs',
    'Get Involved',
    'News & Events',
    'Contact'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {/* <nav className="bg-orange-500 py-4 overflow-hidden relative">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex animate-scroll">
          {[...Array(4)].map((_, repeatIndex) => (
            <ul key={repeatIndex} className="flex items-center gap-8 px-4 whitespace-nowrap">
              {navItems.map((item, index) => (
                <li key={`${repeatIndex}-${index}`}>
                  <a 
                    href="#" 
                    className="text-white text-sm hover:underline transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div className="h-full">
            {/* Rectangular Image */}
            <div className="w-full h-145 overflow-hidden rounded-lg shadow-md">
              <img
                src="https://images.pexels.com/photos/6964137/pexels-photo-6964137.jpeg"
                alt="Person in forest"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl text-[#2c5f7f] font-light mb-8">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Skill Spardha proposes to conduct a structured, offline, institution-aligned hackathon designed to strengthen
              students’ analytical thinking, programming proficiency, and professional discipline. The event follows a
              standardized academic framework ensuring fairness, transparency, and measurable outcomes suitable for
              institutional benchmarking. We help learners build skills through hand-on training, real-world projects, and
              industry-validated curricla.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              The hackathon aims to assess coding competencies across progressive difficulty levels, promote ethical
              competitive practices, identify industry-ready talent, and cultivate a disciplined, performance-driven learning
              environment aligned with academic and industry expectations.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              Overall, the Skill Spardha Hackathon serves as an academic enrichment initiative aligned with institutional
              goals of skill development, employability enhancement, and innovation culture. It imposes no financial
              burden on students and adds measurable academic value through structured assessment and merit-based
              recognition.
            </p>
          </div>
        </div>
      </div>

      <nav className="bg-orange-500 py-4 overflow-hidden relative">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="flex animate-scroll">
          {[...Array(4)].map((_, repeatIndex) => (
            <ul key={repeatIndex} className="flex items-center gap-8 px-4 whitespace-nowrap">
              {navItems.map((item, index) => (
                <li key={`${repeatIndex}-${index}`}>
                  <a
                    href="#"
                    className="text-white text-sm hover:underline transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </nav>
    </div>
  );
}