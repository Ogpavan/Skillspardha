import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      {/* Decorative background pattern with education icons */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Book */}
          <g transform="translate(100, 50)">
            <rect
              x="0"
              y="10"
              width="40"
              height="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              rx="2"
            />
            <line
              x1="20"
              y1="10"
              x2="20"
              y2="60"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="0"
              y1="30"
              x2="40"
              y2="30"
              stroke="currentColor"
              strokeWidth="1"
            />
          </g>

          {/* Graduation cap */}
          <g transform="translate(250, 200)">
            <polygon
              points="30,10 10,20 30,30 50,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="30"
              y1="30"
              x2="30"
              y2="45"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="30" cy="47" r="3" fill="currentColor" />
            <rect x="48" y="18" width="4" height="20" fill="currentColor" />
            <polygon points="50,38 45,42 55,42" fill="currentColor" />
          </g>

          {/* Pencil */}
          <g transform="translate(400, 100)">
            <rect
              x="15"
              y="0"
              width="10"
              height="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <polygon
              points="20,50 15,60 25,60"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect x="15" y="0" width="10" height="8" fill="currentColor" />
          </g>

          {/* Lightbulb */}
          <g transform="translate(600, 180)">
            <circle
              cx="25"
              cy="25"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect
              x="20"
              y="37"
              width="10"
              height="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              rx="1"
            />
            <line
              x1="25"
              y1="45"
              x2="25"
              y2="50"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="25"
              y1="8"
              x2="25"
              y2="13"
              stroke="currentColor"
              strokeWidth="2"
            />
          </g>

          {/* Notebook */}
          <g transform="translate(800, 80)">
            <rect
              x="10"
              y="5"
              width="35"
              height="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              rx="2"
            />
            <line
              x1="10"
              y1="15"
              x2="45"
              y2="15"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line
              x1="10"
              y1="25"
              x2="45"
              y2="25"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line
              x1="10"
              y1="35"
              x2="45"
              y2="35"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="7" cy="20" r="2" fill="currentColor" />
            <circle cx="7" cy="30" r="2" fill="currentColor" />
          </g>

          {/* Apple */}
          <g transform="translate(950, 220)">
            <circle
              cx="25"
              cy="30"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M 25 15 Q 20 10 20 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <ellipse cx="22" cy="6" rx="3" ry="2" fill="currentColor" />
          </g>

          {/* Calculator */}
          <g transform="translate(1100, 120)">
            <rect
              x="10"
              y="5"
              width="30"
              height="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              rx="3"
            />
            <rect x="13" y="10" width="24" height="10" fill="currentColor" />
            <circle cx="18" cy="28" r="2" fill="currentColor" />
            <circle cx="25" cy="28" r="2" fill="currentColor" />
            <circle cx="32" cy="28" r="2" fill="currentColor" />
            <circle cx="18" cy="36" r="2" fill="currentColor" />
            <circle cx="25" cy="36" r="2" fill="currentColor" />
            <circle cx="32" cy="36" r="2" fill="currentColor" />
          </g>

          {/* Atom/Science */}
          <g transform="translate(200, 280)">
            <circle cx="25" cy="25" r="4" fill="currentColor" />
            <ellipse
              cx="25"
              cy="25"
              rx="20"
              ry="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="rotate(45 25 25)"
            />
            <ellipse
              cx="25"
              cy="25"
              rx="20"
              ry="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="rotate(-45 25 25)"
            />
          </g>

          {/* Certificate */}
          <g transform="translate(500, 300)">
            <rect
              x="5"
              y="10"
              width="40"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              rx="2"
            />
            <circle
              cx="45"
              cy="40"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="10"
              y1="20"
              x2="35"
              y2="20"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="10"
              y1="27"
              x2="30"
              y2="27"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line
              x1="10"
              y1="33"
              x2="30"
              y2="33"
              stroke="currentColor"
              strokeWidth="1"
            />
          </g>

          {/* Globe */}
          <g transform="translate(850, 300)">
            <circle
              cx="25"
              cy="25"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <ellipse
              cx="25"
              cy="25"
              rx="7"
              ry="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="10"
              y1="25"
              x2="40"
              y2="25"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M 25 10 Q 30 25 25 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <span className="text-3xl font-bold tracking-tight">
              <span className="text-blue-500">Skill</span>
              <span className="text-orange-500">Spardha</span>
            </span>

            <p className="text-sm text-gray-500 leading-relaxed mt-2">
              Grow today. Lead tomorrow. Inspire always.
            </p>
          </div>

          {/* Main pages */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">
              Main pages
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-sm hover:text-white transition-colors"
                >
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular courses */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">
              Popular courses
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/courses"
                  className="text-sm hover:text-white transition-colors"
                >
                  Web development
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-sm hover:text-white transition-colors"
                >
                  UI/UX design
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-sm hover:text-white transition-colors"
                >
                  Mobile development
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-sm hover:text-white transition-colors"
                >
                  Data Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">
              Quick links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/career"
                  className="text-sm hover:text-white transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/instructor"
                  className="text-sm hover:text-white transition-colors"
                >
                  Instructor
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-sm hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">
              Social Links
            </h3>
            <ul className="space-y-2 flex flex-col gap-2">
              <li>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Facebook size={16} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Linkedin size={16} /> Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Twitter size={16} /> X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row  justify-center  items-center gap-4 text-sm">
          <p className="text-gray-500">© SkillSpardha 2025</p>
        </div>
      </div>
    </footer>
  );
}
