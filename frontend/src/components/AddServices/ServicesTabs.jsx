import React, { useMemo } from "react";
import { IoSearch } from "react-icons/io5";
import { RiChatDownloadFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";

const ServicesTabs = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = useMemo(
    () => [
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
        path: "/admin/bookings",
      },
    ],
    []
  );

  return (
    <div className="flex space-x-4 mb-6">
      {tabs.map(({ label, icon, path }) => {
        const isActive = location.pathname === path;
        const baseStyles = "flex flex-col items-center px-6 py-3 rounded-lg shadow transition-colors";

        const activeStyles = isActive
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white";

        return (
          <button
            key={label}
            onClick={() => navigate(path)}
            className={`${baseStyles} ${activeStyles}`}
          >
            {icon}
            <span className="text-[14px]">{label}</span>
          </button>
        );
      })}
    </div>
  );
});

export default ServicesTabs;
