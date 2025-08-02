import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";

const TrainingTabs = () => {
  return (
    <div className="-mt-6 -translate-x-6 flex space-x-4 mb-6">
      <button className="flex flex-col items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow">
        <IoMdContact className="w-6 h-6 mb-1" />
        <span className="text-[14px]">Account</span>
      </button>

      <button className="flex flex-col items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow">
        <IoSearch className="w-6 h-6 mb-1" />
        <span className="text-[14px]">Find Services</span>
      </button>

      <button className="flex flex-col items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow">
        <FaRegFileAlt className="w-6 h-6 mb-1" />
        <span className="text-[14px]">Feedback</span>
      </button>
    </div>
  );
};

export default TrainingTabs;
