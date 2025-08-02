import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { formatDate } from "../../utils/date";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axiosInstance.get("/bookings");
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 px-6 pt-6">Bookings</h2>

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full table-auto border border-gray-200 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left w-[20%]">Name</th>
                <th className="p-2 text-left w-[15%]">Email</th>
                <th className="p-2 text-left w-[20%]">Address</th>
                <th className="p-2 text-left w-[10%]">Service</th>
                <th className="p-2 text-left w-[10%]">Price</th>
                <th className="p-2 text-left w-[20%]">Details</th>
                <th className="p-2 text-left w-[15%]">Created At</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, i) => (
                <tr
                  key={booking._id || i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="p-2">{booking.firstName} {booking.lastName}</td>
                  <td className="p-2">{booking.email}</td>
                  <td className="p-2">{booking.address}, {booking.city}, {booking.postCode}</td>
                  <td className="p-2">{booking.service?.title}</td>
                  <td className="p-2">${booking.service?.price}</td>
                  <td className="p-2">{booking.details || "-"}</td>
                  <td className="p-2 whitespace-nowrap">{formatDate(booking.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingList;
