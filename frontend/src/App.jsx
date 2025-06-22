import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import QuoteForm from "./pages/QuoteForm";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quote-form" element={<QuoteForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
