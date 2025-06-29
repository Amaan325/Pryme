import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service7 from "../assets/service7.jpg";

const QuoteForm = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white px-4 sm:px-8 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Form */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold">Quote</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your first name"
                className="border rounded-md p-3 w-full border-gray-200"
              />
              <input
                type="text"
                placeholder="Enter your last name"
                className="border rounded-md p-3 w-full border-gray-200"
              />
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-md p-3 w-full border-gray-200"
            />

            <input
              type="text"
              placeholder="456 Elm Street"
              className="border rounded-md p-3 w-full border-gray-200"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/au.png"
                    alt="Australia"
                    className="h-5 w-5"
                  />
                  <span className="text-gray-600 text-sm">Australia</span>
                </div>
                <input
                  type="text"
                  className="border rounded-md p-3 w-full pl-20 bg-gray-100 text-gray-500 border-gray-200"
                  disabled
                />
              </div>

              <input
                type="text"
                placeholder="Town/City"
                className="border rounded-md p-3 w-full border-gray-200"
              />
              <input
                type="text"
                placeholder="Post Code"
                className="border rounded-md p-3 w-full border-gray-200"
              />
            </div>

            <textarea
              rows={4}
              placeholder="More Details about Property"
              className="border rounded-md p-3 w-full border-gray-200"
            ></textarea>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium w-full sm:w-auto">
              Book Now
            </button>
          </div>

          {/* Right Service Card */}
          <div className="bg-blue-50 rounded-xl shadow p-4">
            <img
              src={Service7}
              alt="Mirrors Cleaning"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Mirrors Cleaning</h3>
              <p className="text-sm text-gray-600 mt-2">
                Our mirror cleaning service leaves your mirrors sparkling and
                streak-free. We use special techniques.
              </p>
              <p className="mt-2 text-sm">
                Price:{" "}
                <span className="text-blue-600 font-semibold">$21.99/hour</span>
              </p>
              <button className="text-sm text-black mt-4 hover:underline flex items-center gap-1">
                Change service <span className="text-lg">🔄</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuoteForm;
