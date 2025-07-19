import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
// import QuoteForm from "./pages/QuoteForm";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecoverPassword from "./pages/RecoverPassword";
import RecoverPassword2 from "./pages/RecoverPassword2";
import CreateNewPassword from "./pages/CreateNewPassword";
import AdminLogin from "./pages/AdminLogin";

const App = () => {
  return (
    <Router> {/* ✅ Removed basename */}
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/quote-form" element={<QuoteForm />} /> */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />
          <Route path="/recoverpassword2" element={<RecoverPassword2 />} />
          <Route path="/newpassword" element={<CreateNewPassword />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
