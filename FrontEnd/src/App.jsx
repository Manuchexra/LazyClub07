import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import LoginForm from "./components/authpages/LoginForm";
import RegisterForm from "./components/authpages/RegisterForm";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Header data={landingPageData.Header} />} />
            <Route path="/features" element={<Features data={landingPageData.Features} />} />
            <Route path="/about" element={<About data={landingPageData.About} />} />
            <Route path="/gallery" element={<Gallery data={landingPageData.Gallery} />} />
            <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
            <Route path="/team" element={<Team data={landingPageData.Team} />} />
            <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
            <Route path="/login" element={<LoginForm />} /> {/* Use LoginForm component */}
            <Route path="/register" element={<RegisterForm />} /> {/* Use RegisterForm component */}
          </Routes>
        </div>
  );
};

export default App;
