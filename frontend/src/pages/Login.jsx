import React from "react";
import Footer from "../components/Footer";
import LogoOnlyHeader from "../components/LogoOnlyHeader";

const Login = () => {
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
            {/* Add a margin-top here if you want spacing */}
            <div className="mt-0">
              <h2 className="text-2xl font-bold mb-2">Log In</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Let&apos;s get started with a few essentials we need
              </p>

              <div className="mb-6">
                <label className="block text-sm mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border-0 border-b-2 border-gray-400 focus:border-blue-600 focus:outline-none py-2"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm mb-1 text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full border-0 border-b-2 border-gray-400 focus:border-blue-600 focus:outline-none py-2"
                  placeholder="********"
                />
              </div>

              <div className="flex justify-end mb-8">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password
                </a>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors mb-4">
                Log In
              </button>

              <p className="text-sm text-center">
                Don&apos;t have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
