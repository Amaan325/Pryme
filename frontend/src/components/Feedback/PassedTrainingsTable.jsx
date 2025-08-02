import React from "react";
import { FaPen } from "react-icons/fa";

const PassedTrainingsTable = () => {
  const rows = [
    { date: "24 Apr", training: "Security Awareness", instructor: "Keithlyn O'Hara", hours: "1.00" },
    { date: "16 Feb", training: "Induction program: Office user manual", instructor: "Matthew Brandstock", hours: "1.00" },
    { date: "16 Feb", training: "Induction program: Security", instructor: "Chris Columbus", hours: "1.00" },
    { date: "11 Feb", training: "Induction program: Capability profile and corporate CV. Dashboard Overview", instructor: "Chris Columbus", hours: "1.50" },
    { date: "03 Feb", training: "Induction program: Career development in company", instructor: "Arnold Harris", hours: "2.00" },
    { date: "01 Feb", training: "Induction program: Office policy", instructor: "Arnold Harris", hours: "0.50" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm -translate-x-6">
      {/* Filter */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold">Passed trainings:</span>
        <select className="border border-gray-300 rounded px-3 py-2">
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-2">Date</th>
            <th className="p-2">Training</th>
            <th className="p-2">Instructor</th>
            <th className="p-2">Hours</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="p-2">{row.date}</td>
              <td className="p-2">{row.training}</td>
              <td className="p-2">{row.instructor}</td>
              <td className="p-2">{row.hours}</td>
              <td className="p-2 text-right">
                <FaPen className="text-gray-500 w-4 h-4" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PassedTrainingsTable;
