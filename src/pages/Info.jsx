import React, { useState } from "react";
import { User, Mail, Phone, GraduationCap, Calendar, BookOpen, CreditCard, ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";
import studygirl from "../assets/studygirl.webp";

const StudentInfoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeName: "",
    batch: "",
    semester: "",
    courseInterested: "",
    paymentMode: ""
  });
  const [buyLoading, setBuyLoading] = useState(false);

  const courses = [
    "Web Development",
    "Data Science",
    "Machine Learning",
    "Mobile App Development",
    "Cybersecurity",
    "Cloud Computing",
    "Digital Marketing",
    "UI/UX Design"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.collegeName || 
        !formData.batch || !formData.semester || !formData.courseInterested || !formData.paymentMode) {
      alert("Please fill in all fields");
      return;
    }
    setBuyLoading(true);
    console.log("Form submitted:", formData);
    
    // Simulate processing
    setTimeout(() => {
      setBuyLoading(false);
      alert("Form submitted successfully!");
    }, 1500);
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback if no history
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 p-2 hover:bg-white/50 rounded-full transition-colors z-50 cursor-pointer border-2 border-white/30 shadow"
        >
          <ArrowLeft className="w-6 h-6 cursor-pointer" />
          {/* <span className="font-medium text-gray-700">Back</span> */}
        </button>
      </div>
      
      {/* Heading at the top center */}
      <div className="text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Enroll to Start Your Learning Journey!
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="space-y-6">
                {/* Name */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="10-digit phone number"
                    />
                  </div>
                </div>

                {/* College Name */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    College Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <GraduationCap className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your college name"
                    />
                  </div>
                </div>

                {/* Batch and Semester */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Batch */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Batch
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="batch"
                        value={formData.batch}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Enter batch year"
                      />
                    </div>
                  </div>

                  {/* Semester */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Semester
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BookOpen className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Enter semester"
                      />
                    </div>
                  </div>
                </div>

                {/* Course Interested In */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Interested In
                  </label>
                  <select
                    name="courseInterested"
                    value={formData.courseInterested}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Payment Mode */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mode of Payment
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMode: "UPI" })}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                        formData.paymentMode === "UPI"
                          ? "bg-orange-50 border-orange-500 text-orange-700"
                          : "bg-white border-gray-300 text-gray-700 hover:border-orange-300"
                      }`}
                    >
                      <CreditCard className="h-5 w-5" />
                      <span className="font-medium">UPI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMode: "Net Banking" })}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                        formData.paymentMode === "Net Banking"
                          ? "bg-orange-50 border-orange-500 text-orange-700"
                          : "bg-white border-gray-300 text-gray-700 hover:border-orange-300"
                      }`}
                    >
                      <CreditCard className="h-5 w-5" />
                      <span className="font-medium">Net Banking</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={buyLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg px-6 py-4 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {buyLoading ? "Processing..." : "Buy Now"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="h-full">
            <div className="w-full h-200 overflow-hidden rounded-lg shadow-md">
              <img
                src={studygirl}
                alt="Students learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default StudentInfoForm;