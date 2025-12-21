import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Badge = ({ label, highlight }) => (
  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${
      highlight ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
    }`}
  >
    {label}
  </span>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      {...props}
      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
    />
  </div>
);

const CourseDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetch("/coursedetails.json")
      .then((res) => res.json())
      .then((data) => {
        setCourse(data[decodeURIComponent(title)] || null);
      })
      .finally(() => setLoading(false));
  }, [title]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.phone) {
      setError("All fields are required.");
      return;
    }
    setSuccess("Redirecting to secure payment...");

    const options = {
      key: "rzp_test_xxxxxxxxxxxxx", // Replace with your Razorpay Test Key
      amount: Number(course.price.replace(/[^0-9]/g, "")) * 100, // Amount in paise
      currency: "INR",
      name: course.title,
      description: course.description,
      image: course.image,
      handler: function (response) {
        setSuccess(
          "Payment successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading course…
      </div>
    );

  if (!course)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Course not found
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen   px-4 lg:px-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 ">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center gap-2 text-gray-500 hover:text-orange-500 font-medium text-sm transition"
            type="button"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          {/* Image with Title Overlay */}
          <div className="relative mb-6">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-xl w-full object-cover"
            />
            <div className="absolute left-0 bottom-0 w-full bg-linear-to-t from-black/70 to-transparent rounded-b-xl px-6 py-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                {course.title}
              </h1>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge label={course.duration} />
            <Badge label={course.level} />
            <Badge label={course.price} highlight />
          </div>
          {/* SYLLABUS */}
          {course.syllabus && (
            <>
              <h2 className="text-xl font-semibold mb-3">What you’ll learn</h2>
              <ul className="space-y-2 text-gray-600">
                {course.syllabus.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-500">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
          {/* INSTRUCTOR */}
          {course.instructor && (
            <div className="mt-8 flex items-center gap-4 border-t pt-6">
              <img
                src={course.instructor.avatar}
                className="w-12 h-12 rounded-full"
                alt={course.instructor.name}
              />
              <div>
                <div className="font-semibold">{course.instructor.name}</div>
                <div className="text-sm text-gray-500">
                  {course.instructor.bio}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CHECKOUT CARD */}
        <div className="bg-white rounded-2xl   p-6 h-fit sticky top-6">
          <h2 className="text-xl font-bold mb-1">Enroll Now</h2>
          <p className="text-gray-500 text-sm mb-4">
            Secure checkout · Instant access
          </p>

          <div className="text-2xl font-bold mb-6">{course.price}</div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Proceed to Secure Payment →
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4 text-center">
            🔒 100% secure payment · Razorpay
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
