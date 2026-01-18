import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  Globe,
  BarChart3,
  Download,
  Award,
  ChevronDown,
  CheckCircle,
  X,
} from "lucide-react";

const CourseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openSections, setOpenSections] = useState({});
  const [enrollError, setEnrollError] = useState("");

  useEffect(() => {
    fetchCourseData();
    // eslint-disable-next-line
  }, [id]);

  const fetchCourseData = async () => {
    setLoading(true);
    setEnrollError("");
    try {
      const response = await fetch(
        `https://app.skillspardha.com/api/display-courses/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          cache: "no-store", // mobile-safe
        },
      );
      if (!response.ok) throw new Error("Course not found");
      const data = await response.json();
      if (!data.course_json) throw new Error("Invalid course data format");
      setCourseData(data.course_json);
    } catch (err) {
      setEnrollError(err.message);
      setCourseData(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  /* ---------- UI STATES ---------- */

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (enrollError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600 text-lg font-semibold">{enrollError}</div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl font-semibold">Course not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 relative">
        <button
          onClick={() => {
            if (window.history.length > 2) {
              navigate(-1);
            } else {
              navigate("/courses");
            }
          }}
          className="absolute top-6 left-6 p-2 hover:bg-white/50 rounded-full transition-colors z-50 cursor-pointer border-2 border-white/30 shadow"
        >
          <ArrowLeft className="w-6 h-6 cursor-pointer" />
        </button>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <h2 className="text-5xl font-bold mb-4">{courseData.t}</h2>
              <p className="text-gray-700 mb-8">{courseData.st}</p>

              <div className="flex gap-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">{courseData.meta[0]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">
                    {courseData.cur.length} Sections
                  </span>
                </div>
              </div>
            </div>

            <div className="w-1/2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={
                  courseData.image ||
                  courseData.meta[3] ||
                  "/images/default-course.jpg"
                }
                alt={courseData.t}
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="w-full h-80 bg-gradient-to-r from-orange-400 via-purple-400 to-yellow-400 opacity-20"></div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-4">About the course</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {courseData.d}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-4">
                You will be able to know
              </h2>
              <ul className="space-y-3">
                {courseData.hl.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-2">Curriculum</h2>
              <p className="text-gray-600 mb-6">
                {courseData.cur.length} Sections · {courseData.meta[0]}
              </p>

              <div className="space-y-3">
                {courseData.cur.map((section, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg"
                  >
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openSections[index] ? "rotate-180" : ""
                          }`}
                        />
                        <span className="font-semibold text-lg">
                          {section[1]}
                        </span>
                      </div>
                      <span className="text-gray-600 font-medium">
                        {String(section[0]).padStart(2, "0")}
                      </span>
                    </button>
                    {openSections[index] && (
                      <div className="px-5 pb-5 border-t border-gray-200">
                        <ul className="mt-4 space-y-2">
                          {section[2].map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-gray-700 pl-8">
                              • {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {courseData.proj && (
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <ul className="space-y-3">
                  {courseData.proj.map((project, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-black mr-3">•</span>
                      <span className="text-gray-700">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-8 shadow-sm sticky top-6">
              <h3 className="text-2xl font-bold mb-6">This course include</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">{courseData.meta[0]}</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">
                    {courseData.cur.length} Sections
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Language: English</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">
                    Course Level: {courseData.meta[1]}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Downloadable Files: 10</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">{courseData.cert}</span>
                </div>
              </div>

              <div className="border-t pt-6">
                {/* <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold">
                    {courseData.price[1]}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {courseData.price[0]}
                  </span>
                </div> */}

                <button
                  onClick={() => navigate("/info", { state: { courseId: id } })}
                  className="inline-flex items-center justify-center gap-1 px-6 py-2 text-sm font-medium uppercase tracking-wide bg-orange-500 text-white border-2 border-orange-500 cursor-pointer   hover:bg-orange-600 hover:border-orange-600 w-full"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
