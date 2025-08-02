import React from "react";
import { IoSearch } from "react-icons/io5";
import { RiChatDownloadFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";

const ServicesTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      label: "Find Services",
      icon: <IoSearch className="w-6 h-6 mb-1" />,
      path: "/findservices",
    },
    {
      label: "All Services",
      icon: <RiChatDownloadFill className="w-6 h-6 mb-1" />,
      path: "/admin/allservices",
    },
    {
      label: "Bookings",
      icon: <IoMdContact className="w-6 h-6 mb-1" />,
      path: "/bookings",
    },
  ];

  return (
    <div className="flex space-x-4 mb-6">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <button
            key={tab.label}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center px-6 py-3 rounded-lg shadow transition-colors ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {tab.icon}
            <span className="text-[14px]">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ServicesTabs;
