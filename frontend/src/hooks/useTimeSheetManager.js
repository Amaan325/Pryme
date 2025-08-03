import { useState, useEffect, useCallback } from "react";
import { useTimesheetActions } from "./useTimesheetActions";

export const useTimesheetManager = () => {
  const [timesheets, setTimesheets] = useState([]);
  const { fetchTimesheets, addTimesheet, deleteTimesheet } =
    useTimesheetActions();

  const fetchData = useCallback(
    async (params = {}) => {
      try {
        const data = await fetchTimesheets(params);
        setTimesheets(data);
        return data;
      } catch (error) {
        console.error("Error fetching timesheets:", error);
        throw error;
      }
    },
    [fetchTimesheets]
  );

  const add = useCallback(
  async (entries) => {
    try {
      await addTimesheet(entries); // send all at once
      await fetchData();
    } catch (error) {
      console.error("Error adding timesheet:", error);
      throw error;
    }
  },
  [addTimesheet, fetchData]
);


  const remove = useCallback(
    async (id) => {
      try {
        await deleteTimesheet(id);
        setTimesheets((prev) => prev.filter((e) => e._id !== id));
      } catch (error) {
        console.error("Error deleting timesheet:", error);
        throw error;
      }
    },
    [deleteTimesheet]
  );

  return {
    timesheets,
    fetchData,
    add,
    remove,
    setTimesheets,
  };
};
