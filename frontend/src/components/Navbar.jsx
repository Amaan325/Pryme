import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-16 my-6">
      <header className="flex justify-between items-center px-8 py-4">
        <h1
          className="text-3xl font-bold text-blue-700"
          style={{ fontFamily: "Jaro, sans-serif" }}
        >
          Pryme
        </h1>
        <nav className="space-x-6 hidden md:block">
          <NavLink to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </NavLink>
          <NavLink to="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </NavLink>
          <NavLink to="/about-us" className="text-gray-700 hover:text-blue-600">
            About
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </NavLink>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-700">Log In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
