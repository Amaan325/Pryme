import React from "react";
import Footer from "../components/Footer";
import LogoOnlyHeader from "../components/LogoOnlyHeader";

const CreateNewPassword = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <LogoOnlyHeader />

      {/* Content box INSIDE same container */}
      <div className="mx-9 sm:mx-8 md:mx-24 mb-12">
        <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden gap-6">
          {/* Left: Image */}
          <div className="w-[650px] h-[500px]">
            <img
              src="/AuthImage.jpg"
              alt="Auth"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2 px-8 md:px-12 flex flex-col">
            <div>
              <h2 className="text-2xl font-bold mb-2">Create New Password</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Create a strong password which you remember
              </p>

              <div className="mb-6">
                <label className="block text-sm mb-1 text-gray-700">
                  Create Password
                </label>
                <input
                  type="password"
                  className="w-full border-0 border-b-2 border-gray-400 focus:border-blue-600 focus:outline-none py-2"
                  placeholder="********"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm mb-1 text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full border-0 border-b-2 border-gray-400 focus:border-blue-600 focus:outline-none py-2"
                  placeholder="********"
                />
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mb-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateNewPassword;
