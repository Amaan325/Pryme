import React from "react";

const TimesheetComments = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm overflow-x-auto">
      <h1 className="text-black mb-3 font-medium"> Comments </h1>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-400 text-black">
            <th className="text-left p-2">Date</th>
            <th className="text-left p-2">Project Task</th>
            <th className="text-left p-2">Role</th>
            <th className="text-left p-2">Activity</th>
            <th className="text-center p-2">Hours</th>
            <th className="text-left p-2">Comments</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              date: "15 Jan",
              project: "Project 1",
              role: "Specialist",
              activity: "Development",
              hours: "8.00",
              comment: "Prepared a presentation for CEO",
            },
            {
              date: "16 Jan",
              project: "Project 2",
              role: "Specialist",
              activity: "Development",
              hours: "8.00",
              comment: "Planned employees vacations",
            },
          ].map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-300"}>
              <td className="p-2">{row.date}</td>
              <td className="p-2">{row.project}</td>
              <td className="p-2">{row.role}</td>
              <td className="p-2">{row.activity}</td>
              <td className="p-2 text-center">{row.hours}</td>
              <td className="p-2">{row.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimesheetComments;
