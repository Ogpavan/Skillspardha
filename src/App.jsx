import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import CoursePg from "./pages/CoursePg";
import CourseDetails from "./pages/CourseDetails";
import Contact from "./pages/Contact";
import Hackathon from "./pages/Hackathon";
import Info from "./pages/Info";
import Hackathon_form from "./pages/Hackathon_form";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<CoursePg />} />
    <Route path="/courses/:category/:id" element={<CourseDetails />} />
    <Route path="/hackathon" element={<Hackathon />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/info" element={<Info />} />
    <Route path="/hackathon_form" element={<Hackathon_form />} />
    </Routes>
  );
}

export default App;
