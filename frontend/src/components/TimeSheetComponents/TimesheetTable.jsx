import React, { useState, useEffect } from "react";
import { useTimesheetManager } from "../../hooks/useTimeSheetManager";
import { useSnackbar } from "notistack";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TimesheetTable = () => {
  const [week] = useState("2025-W32");
  const { timesheets, fetchData, add, remove } = useTimesheetManager();
  const { enqueueSnackbar } = useSnackbar();

  const [localTimesheets, setLocalTimesheets] = useState([]);

  // Initialize data
  useEffect(() => {
    fetchData();
  }, []);

  // Sync local state with fetched timesheets
  useEffect(() => {
    setLocalTimesheets([...timesheets]);
  }, [timesheets]);

  const handleInputChange = (index, dayIndex, value) => {
    if (value === "" || !isNaN(value)) {
      const updated = [...localTimesheets];
      updated[index].dailyHours[dayIndex] = value;
      setLocalTimesheets(updated);
    }
  };

  const handleAddRow = () => {
    const newRow = {
      project: "",
      role: "",
      activity: "",
      week,
      dailyHours: Array(7).fill(""),
    };
    setLocalTimesheets((prev) => [...prev, newRow]);
    enqueueSnackbar("New row added", { variant: "info" });
  };

  const handleSave = async () => {
    const newEntries = localTimesheets.filter((entry) => !entry._id);

    const validTimesheets = newEntries.map((t) => ({
      ...t,
      dailyHours: t.dailyHours.map((h) => parseFloat(h) || 0),
      week,
    }));

    if (validTimesheets.length === 0) {
      enqueueSnackbar("No new entries to save", { variant: "info" });
      return;
    }

    try {
      await add(validTimesheets); // this now gets ALL new rows
      enqueueSnackbar("Timesheets saved successfully!", { variant: "success" });
      fetchData(); // refresh table
    } catch (err) {
      console.error("Save failed", err);
      enqueueSnackbar("Failed to save timesheets", { variant: "error" });
    }
  };

  const handleDelete = async (index, id) => {
    try {
      if (id) {
        await remove(id);
        enqueueSnackbar("Timesheet deleted successfully", {
          variant: "success",
        });
      } else {
        const updated = [...localTimesheets];
        updated.splice(index, 1);
        setLocalTimesheets(updated);
        enqueueSnackbar("Unsaved row removed", { variant: "info" });
      }
    } catch (err) {
      console.error("Delete failed", err);
      enqueueSnackbar("Failed to delete timesheet", { variant: "error" });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md space-y-6 overflow-hidden mb-2">
      <h2 className="text-xl font-semibold p-6 border-b border-gray-100">
        Timesheet
      </h2>

      <div className="rounded-md border border-gray-200 mx-6 mb-6 overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[800px]">
          <thead className="bg-gray-300 text-gray-800">
            <tr>
              <th className="p-3">Project</th>
              <th className="p-3">Role</th>
              <th className="p-3">Activity</th>
              {daysOfWeek.map((day, idx) => (
                <th key={idx} className="p-3 text-center">
                  {day}
                </th>
              ))}
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {localTimesheets.map((item, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="p-3">
                  <input
                    type="text"
                    value={item.project}
                    onChange={(e) => {
                      const updated = [...localTimesheets];
                      updated[i].project = e.target.value;
                      setLocalTimesheets(updated);
                    }}
                    className="bg-yellow-100 rounded px-3 py-1 w-full outline-none"
                  />
                </td>
                <td className="p-3">
                  <input
                    type="text"
                    value={item.role}
                    onChange={(e) => {
                      const updated = [...localTimesheets];
                      updated[i].role = e.target.value;
                      setLocalTimesheets(updated);
                    }}
                    className="bg-yellow-100 rounded px-3 py-1 w-full outline-none"
                  />
                </td>
                <td className="p-3">
                  <input
                    type="text"
                    value={item.activity}
                    onChange={(e) => {
                      const updated = [...localTimesheets];
                      updated[i].activity = e.target.value;
                      setLocalTimesheets(updated);
                    }}
                    className="bg-yellow-100 rounded px-3 py-1 w-full outline-none"
                  />
                </td>
                {item.dailyHours.map((hour, dayIndex) => (
                  <td key={dayIndex} className="p-3 text-center">
                    <input
                      type="text"
                      value={hour}
                      onChange={(e) =>
                        handleInputChange(i, dayIndex, e.target.value)
                      }
                      className="bg-blue-100 text-sm px-2 py-1 rounded w-16 text-center outline-none"
                    />
                  </td>
                ))}
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDelete(i, item._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center flex-wrap gap-4 px-6 pb-6">
        <button
          onClick={handleAddRow}
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50"
        >
          + Add row
        </button>

        <div className="flex-grow" />

        <button
          onClick={handleSave}
          className="bg-green-500 px-4 py-2 rounded-full text-sm text-white font-medium hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TimesheetTable;
