import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import axiosInstance from "../utils/axiosInstance";
import io from "socket.io-client";

const AdminNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const socket = io(import.meta.env.VITE_BACKEND_URL, {
      withCredentials: true,
    });

    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get("/admin/me");
        console.log("Auth check response:", response.data);
        setIsAuthenticated(true);
        fetchNotifications();

        socket.emit("join", "admin");

        socket.on("admin-notification", (notif) => {
          setNotifications((prev) => [notif, ...prev]);
        });
      } catch (err) {
        setIsAuthenticated(false);
        console.error("Not authenticated:", err?.response?.data || err.message);
      }
    };

    checkAuth();

    return () => {
      socket.disconnect();
    };
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await axiosInstance.get("/notifications");
      setNotifications(res.data);
    } catch (err) {
      console.error("Failed to fetch notifications:", err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/admin/logout");
      window.location.href = "/adminlogin";
    } catch (err) {
      console.error("Logout failed", err.message);
    }
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 my-2 relative z-50 bg-white">
      <header className="flex items-center justify-between px-4 sm:px-8 py-4 relative">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-blue-700"
          style={{ fontFamily: "Jaro, sans-serif" }}
        >
          Pryme
        </NavLink>

        {/* Center title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-gray-700 font-semibold text-lg sm:text-xl">
          Admin Dashboard
        </div>

        {/* Right side */}
        {isAuthenticated && (
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                className="relative p-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <FiBell className="text-2xl text-blue-700" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
                )}
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md z-50 overflow-hidden border">
                  <div className="p-3 border-b font-semibold bg-gray-100">
                    Notifications
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-sm text-gray-500 text-center">
                        No notifications
                      </div>
                    ) : (
                      notifications.map((notif, idx) => (
                        <div
                          key={idx}
                          className="p-3 border-b hover:bg-gray-50 text-sm"
                        >
                          <div className="font-medium">{notif.message}</div>
                          <div className="text-xs text-gray-500">
                            {new Date(notif.createdAt).toLocaleString()}
                          </div>
                          <button
                            className="mt-1 text-blue-600 hover:underline text-xs"
                            onClick={() => navigate("/admin/bookings")}
                          >
                            View
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Log Out
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default AdminNavbar;
