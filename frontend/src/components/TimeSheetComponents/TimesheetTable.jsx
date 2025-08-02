import React from "react";

const TimesheetTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-md space-y-6 overflow-hidden">
      <h2 className="text-xl font-semibold p-6 border-b border-gray-100">Timesheet</h2>

      <div className="rounded-md border border-gray-200 mx-6 mb-6 overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[800px]">
          <thead className="bg-gray-300 text-gray-800">
            <tr>
              <th className="p-3 whitespace-nowrap">Project</th>
              <th className="p-3 whitespace-nowrap">Role</th>
              <th className="p-3 whitespace-nowrap">Activity</th>
              <th className="p-3 text-center whitespace-nowrap">15 / Mon</th>
              <th className="p-3 text-center whitespace-nowrap">16 / Tue</th>
              <th className="p-3 text-center whitespace-nowrap">17 / Wed</th>
              <th className="p-3 text-center whitespace-nowrap">18 / Thu</th>
              <th className="p-3 text-center whitespace-nowrap">19 / Fri</th>
              <th className="p-3 text-center whitespace-nowrap">20 / Sat</th>
              <th className="p-3 text-center whitespace-nowrap">21 / Sun</th>
            </tr>
          </thead>

          <tbody>
            {["Cleaning home", "Clean Wearhouse"].map((project, i) => (
              <tr key={project} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="p-3">
                  <div className="bg-gray-100 rounded px-3 py-2">{project}</div>
                </td>
                <td className="p-3">
                  <div className="bg-gray-100 rounded px-3 py-2">
                    <select className="bg-gray-100 outline-none w-full">
                      <option>Manager</option>
                    </select>
                  </div>
                </td>
                <td className="p-3">
                  <div className="bg-gray-100 rounded px-3 py-2">
                    <select className="bg-gray-100 outline-none w-full">
                      <option>Alpha</option>
                    </select>
                  </div>
                </td>
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <td key={day} className="p-3 text-center">
                    <input
                      type="text"
                      value="4.00"
                      className={`text-center text-sm font-medium border ${
                        day === 4
                          ? "bg-green-500 text-white"
                          : "bg-blue-500 text-white"
                      } px-2 py-1 rounded w-16 outline-none`}
                      readOnly
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center flex-wrap gap-4 px-6 pb-6">
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50">
          + Add row
        </button>
        <button className="bg-[#F2994A] text-white px-4 py-2 rounded-full text-sm hover:opacity-90">
          + Add overtime
        </button>

        <div className="flex-grow" />

        <button className="bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-300">
          Save
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:opacity-90">
          Reject
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 hover:bg-gray-300">
          Submit
        </button>
      </div>

      <div className="text-right text-sm font-medium px-6 pb-6">
        Total <span className="font-semibold">32.00 / 32.00</span>
      </div>
    </div>
  );
};

export default TimesheetTable;
