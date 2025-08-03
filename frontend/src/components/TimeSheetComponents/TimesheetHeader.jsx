import React from "react";

const TimesheetHeader = ({ selectedWeek, setSelectedWeek, showAll, setShowAll }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Left Block: Title + Filter */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 whitespace-nowrap">
          My Timesheet
        </h1>

        {/* Filter Section */}
        <div className="flex items-center gap-3">
          <label htmlFor="weekPicker" className="text-sm text-gray-700 font-medium">
            Select Week:
          </label>
          <input
            id="weekPicker"
            type="week"
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            disabled={showAll}
            className="border border-gray-300 px-4 py-2 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />

          <button
            onClick={() => {
              setShowAll((prev) => {
                const newState = !prev;
                if (!newState) setSelectedWeek(""); // Clear week when switching to filter mode
                return newState;
              });
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {showAll ? "🔍 Filter" : "📋 Show All"}
          </button>
        </div>
      </div>

      {/* Right: Report Button */}
      <div>
        <button className="bg-white border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition duration-200">
          📄 Generate Report
        </button>
      </div>
    </div>
  );
};

export default TimesheetHeader;
