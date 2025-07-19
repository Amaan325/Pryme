import React from "react";
import Footer from "../components/Footer";
import LogoOnlyHeader from "../components/LogoOnlyHeader";

const RecoverPassword2 = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <LogoOnlyHeader />

      {/* Content box INSIDE same container */}
      <div className="mx-9 sm:mx-8 md:mx-24 mb-12">
        <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden gap-6">
          {/* Left: Image */}
          <div className="w-[650px] h-[500px]">
            <img
              src="AuthImage.jpg"
              alt="Auth"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2 px-8 md:px-12 flex flex-col">
            <div>
              <h2 className="text-2xl font-bold mb-2">Recover Password</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Enter code that we have sent to your email <br /> your...@domain.com{" "}
              </p>

              {/* Code input boxes */}
              <div className="flex gap-3 mb-8 max-w-xs">
                <input
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-gray-300 rounded-md focus:border-blue-600 focus:outline-none text-xl"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-gray-300 rounded-md focus:border-blue-600 focus:outline-none text-xl"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-gray-300 rounded-md focus:border-blue-600 focus:outline-none text-xl"
                />
                <input
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-gray-300 rounded-md focus:border-blue-600 focus:outline-none text-xl"
                />
              </div>

              {/* Submit button */}
              <button className="w-86 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mb-4">
                Submit
              </button>

              {/* Resend button */}
              <button className="w-86 border border-blue-600 text-blue-600 py-3 rounded-md hover:bg-blue-50 transition-colors">
                Resend Code
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RecoverPassword2;
