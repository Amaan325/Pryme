import React from "react";

const AdminGraphsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
      {/* Company Facts */}
      <div className="bg-white rounded-lg  p-6">
        <h2 className="text-lg font-bold mb-4">Company Facts</h2>
        <p className="text-sm text-gray-500 mb-4">Employees</p>
        {/* Replace this div with your chart */}
        <div className="h-64 bg-gray-100 flex items-center justify-center rounded-md">
          Stacked Area Chart Placeholder
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-lg  p-6">
        <h2 className="text-lg font-bold mb-4">Statistics</h2>
        <p className="text-sm text-gray-500 mb-4">Projects by account</p>
        {/* Replace this div with your donut chart */}
        <div className="h-64 bg-gray-100 flex items-center justify-center rounded-md">
          Donut Chart Placeholder
        </div>
      </div>
    </div>
  );
};

export default AdminGraphsSection;
