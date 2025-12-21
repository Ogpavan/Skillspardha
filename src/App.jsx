import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import CoursePg from "./pages/CoursePg";
import CourseDetails from "./pages/CourseDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<CoursePg />} />
      <Route path="/courses/:category/:title" element={<CourseDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
