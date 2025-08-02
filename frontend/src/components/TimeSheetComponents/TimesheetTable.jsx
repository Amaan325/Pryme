import React from "react";

const TimesheetTable = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left p-2">Project</th>
            <th className="text-left p-2">Role</th>
            <th className="text-left p-2">Activity</th>
            <th className="text-center p-2">15 / Mon</th>
            <th className="text-center p-2">16 / Tue</th>
            <th className="text-center p-2">17 / Wed</th>
            <th className="text-center p-2">18 / Thu</th>
            <th className="text-center p-2">19 / Fri</th>
            <th className="text-center p-2">20 / Sat</th>
            <th className="text-center p-2">21 / Sun</th>
          </tr>
        </thead>
        <tbody>
          {["Cleaning home", "Clean Wearhouse"].map((project) => (
            <tr key={project}>
              <td className="p-2">
                <div className="bg-gray-100 rounded px-3 py-2">{project}</div>
              </td>
              <td className="p-2">
                <div className="bg-gray-100 rounded px-3 py-2">
                  <select className="bg-gray-100 outline-none">
                    <option>Manager</option>
                  </select>
                </div>
              </td>
              <td className="p-2">
                <div className="bg-gray-100 rounded px-3 py-2">
                  <select className="bg-gray-100 outline-none">
                    <option>Alpha</option>
                  </select>
                </div>
              </td>
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <td key={day} className="p-2">
                  <input
                    type="text"
                    value="4.00"
                    className={`text-center border ${
                      day === 4
                        ? "bg-green-500 text-white"
                        : "bg-blue-500 text-white"
                    } px-2 py-1 rounded w-16`}
                    readOnly
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center flex-wrap gap-4 mt-4">
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50">
          + Add row
        </button>
        <button className="bg-[#F2994A] text-white px-4 py-2 rounded-full hover:opacity-90">
          + Add overtime
        </button>
        <div className="flex-grow"></div>
        <button className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">
          Save
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">
          Reject
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">
          Submit
        </button>
      </div>

      <div className="text-right text-sm mt-6">
        Total <span className="font-semibold">32.00 / 32.00</span>
      </div>
    </div>
  );
};

export default TimesheetTable;
