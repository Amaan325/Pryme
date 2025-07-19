import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 my-6 relative z-50">
      <header className="flex justify-between items-center px-4 sm:px-8 py-4">
        <h1
          className="text-3xl font-bold text-blue-700"
          style={{ fontFamily: "Jaro, sans-serif" }}
        >
          Pryme
        </h1>

        {/* Desktop Nav */}
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

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <NavLink
            to="/login"
            className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
          >
            Log In
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-blue-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white rounded-md shadow-md py-4 px-6 absolute w-full left-0 top-20 z-40">
          <nav className="space-y-4">
            <NavLink
              to="/"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/about-us"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact-us"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
            <div className="pt-4 border-t border-gray-200">
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-white border border-gray-600 text-gray-700 px-4 py-2 mb-2 rounded-md hover:bg-gray-100"
              >
                Log In
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </NavLink>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
