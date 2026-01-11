import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  BookOpen,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import Footer from "../components/Footer";
import studygirl from "../assets/studygirl.webp";

// Add these above your component if you want to customize options
const batchYears = Array.from({ length: 8 }, (_, i) => 2025 - i); // 2024 to 2017
const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

const StudentInfoForm = () => {
  const location = useLocation();
  const preselectedCourseId = location.state?.courseId || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeName: "",
    batch: "",
    semester: "",
    courseInterested: preselectedCourseId,
    paymentMode: "",
  });
  const [buyLoading, setBuyLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  // Fetch courses for dropdown
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://app.skillspardha.com/api/display-courses/names-ids",
          {
            headers: { Accept: "application/json" },
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        setCourses(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setCourses([]);
      }
    };

    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openRazorpay = ({ orderId, amount, key, enrollmentId }) => {
    const options = {
      key,
      amount,
      currency: "INR",
      name: "Your Company Name",
      description: "Course Enrollment",
      order_id: orderId,
      handler: async function (response) {
        // On successful payment, update payment_status in backend
        await fetch(`https://app.skillspardha.com/api/course-buy/mark-paid`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            enrollmentId,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        alert("Payment successful! Enrollment complete.");
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: "#F37254" },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.collegeName ||
      !formData.batch ||
      !formData.semester ||
      !formData.courseInterested ||
      !formData.paymentMode
    ) {
      alert("Please fill in all fields");
      return;
    }
    setBuyLoading(true);

    try {
      const response = await fetch(
        "https://app.skillspardha.com/api/course-buy",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },

          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();

      if (response.ok && data.success) {
        // 1. Call backend to create Razorpay order
        const paymentRes = await fetch(
          "http://localhost:5000/api/payment/create-order",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ enrollmentId: data.enrollmentId }),
          }
        );
        const paymentData = await paymentRes.json();

        // 2. Load Razorpay script if not already loaded
        if (!window.Razorpay) {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () =>
            openRazorpay({ ...paymentData, enrollmentId: data.enrollmentId });
          document.body.appendChild(script);
        } else {
          openRazorpay({ ...paymentData, enrollmentId: data.enrollmentId });
        }
      } else {
        alert(data.error || "Enrollment failed");
      }
    } catch (err) {
      alert("Server error. Please try again later.");
    } finally {
      setBuyLoading(false);
    }
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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-6 w-full">
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 p-2 hover:bg-white/50 rounded-full transition-colors z-50 cursor-pointer border-2 border-white/30 shadow"
        >
          <ArrowLeft className="w-6 h-6 cursor-pointer" />
        </button>
      </div>

      {/* Heading at the top center */}
      <div className="text-center py-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Enroll to Start Your Learning Journey!
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex-1">
        <div className="grid md:grid-cols-2 gap-8 items-start h-full">
          {/* Left Side - Form */}
          <div className="h-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 h-full">
              <div className="space-y-4">
                {/* Name */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="10-digit phone number"
                    />
                  </div>
                </div>

                {/* College Name */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    College Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <GraduationCap className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your college name"
                    />
                  </div>
                </div>

                {/* Batch and Semester */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Batch (Year) Dropdown */}
                  <div className="group">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Batch (Year)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-4 w-4 text-gray-400" />
                      </div>
                      <select
                        name="batch"
                        value={formData.batch}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select batch year</option>
                        {batchYears.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Semester Dropdown */}
                  <div className="group">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Semester
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BookOpen className="h-4 w-4 text-gray-400" />
                      </div>
                      <select
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select semester</option>
                        {semesters.map((sem) => (
                          <option key={sem} value={sem}>
                            {sem}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Course Interested In */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Course Interested In
                  </label>
                  <select
                    name="courseInterested"
                    value={formData.courseInterested}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Payment Mode */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Mode of Payment
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, paymentMode: "UPI" })
                      }
                      className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg border-2 transition-all ${
                        formData.paymentMode === "UPI"
                          ? "bg-orange-50 border-orange-500 text-orange-700"
                          : "bg-white border-gray-300 text-gray-700 hover:border-orange-300"
                      }`}
                    >
                      <CreditCard className="h-4 w-4" />
                      <span className="font-medium text-sm">UPI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, paymentMode: "Net Banking" })
                      }
                      className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg border-2 transition-all ${
                        formData.paymentMode === "Net Banking"
                          ? "bg-orange-50 border-orange-500 text-orange-700"
                          : "bg-white border-gray-300 text-gray-700 hover:border-orange-300"
                      }`}
                    >
                      <CreditCard className="h-4 w-4" />
                      <span className="font-medium text-sm">Net Banking</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={buyLoading}
                  className="inline-flex items-center justify-center gap-1 px-6 py-2 text-sm font-medium uppercase tracking-wide bg-orange-500 text-white border-2 border-orange-500 cursor-pointer   hover:bg-orange-600 hover:border-orange-600 w-full"
                >
                  {buyLoading ? "Processing..." : "Buy Now"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image (hidden on small devices) */}
          <div className="hidden md:block h-full">
            <div className="w-full h-full overflow-hidden rounded-lg shadow-md">
              <img
                src={studygirl}
                alt="Students learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentInfoForm;
