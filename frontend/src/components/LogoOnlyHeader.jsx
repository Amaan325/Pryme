import React from "react";

const LogoOnlyHeader = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 my-6 relative z-50">
      <header className="flex justify-between items-center px-4 sm:px-8 py-4">
        <h1
          className="text-3xl font-bold text-blue-700"
          style={{ fontFamily: "Jaro, sans-serif" }}
        >
          Pryme
        </h1>
      </header>
    </div>
  );
};

export default LogoOnlyHeader;
