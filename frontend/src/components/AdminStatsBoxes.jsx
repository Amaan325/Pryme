import React from "react";
import { HiMiniChartBarSquare } from "react-icons/hi2";
import { LuNotebookText } from "react-icons/lu";
import { IoPricetagSharp } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";

const AdminStatsBoxes = () => {
  const stats = [
    {
      value: "762",
      label: "Total Bookings",
      change: "+8% from yesterday",
      color: "bg-red-100 text-red-600",
      icon: HiMiniChartBarSquare,
      iconColor: "text-red-600",
    },
    {
      value: "12",
      label: "New Bookings",
      change: "+5% from yesterday",
      color: "bg-orange-100 text-orange-600",
      icon: LuNotebookText,
      iconColor: "text-orange-600",
    },
    {
      value: "4,321",
      label: "New Visitors",
      change: "+12% from yesterday",
      color: "bg-green-100 text-green-600",
      icon: IoPricetagSharp,
      iconColor: "text-green-600",
    },
    {
      value: "333",
      label: "Completed",
      change: "0% from yesterday",
      color: "bg-purple-100 text-purple-600",
      icon: RiContactsFill,
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className={`p-6 rounded-lg ${stat.color} shadow-sm flex flex-col gap-2`}
          >
            <Icon className={`text-xl ${stat.iconColor}`} />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-gray-700">{stat.label}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.change}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminStatsBoxes;
