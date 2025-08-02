import React from "react";

const TimesheetHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-4 rounded-lg shadow-sm mb-4">
      <div className="flex flex-col items-start space-y-2">
        <h1 className="text-xl font-bold">My timesheet</h1>
        <label htmlFor="year" className="text-sm font-semibold text-gray-700">
          Select the date
        </label>
        <div className="flex items-center space-x-2">
          <input
            id="year"
            type="text"
            placeholder="2019"
            className="border border-gray-300 px-4 py-2 rounded-md w-24"
          />
          <button className="border border-gray-300 px-2 py-2 rounded-md">
            🔄
          </button>
        </div>
      </div>

      <button className="mt-4 md:mt-0 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
        My timesheet's report
      </button>
    </div>
  );
};

export default TimesheetHeader;
