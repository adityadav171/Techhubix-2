/**
 * Main App Component
 * Routes configuration for TechHubbix application
 * Includes all page views and navigation logic
 */

import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/footer";
import { Route, Routes } from "react-router";
import { logInfo } from "./utils/logger";

// Page Imports
import Home from "./Pages/Home";
import About from "./Pages/About";
import ServicesList from "./Pages/Services/ServicesList";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetail";
import Blogs from "./Pages/Blogs";
import BlogDetail from "./Pages/BlogDetail";
import Contact from "./Pages/Contact";

// Global Animations CSS
import "./styles/animations.css";

/**
 * App Component - Main application wrapper
 * Handles routing and page structure
 */
const App = () => {
  useEffect(() => {
    logInfo("Application loaded successfully");
  }, []);

  return (
    <>
      {/* Header Navigation */}
      <Header />

      {/* Main Content Routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Services Pages */}
        <Route path="/services" element={<ServicesList />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />

        {/* Projects Pages */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />

        {/* Blogs Pages */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
