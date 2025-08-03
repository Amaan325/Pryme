import { useState } from "react";
import axios from "../utils/axiosInstance";

export const useTimesheetManager = () => {
  const [timesheets, setTimesheets] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ New loading state

  const fetchData = async (week = null) => {
    setLoading(true); // ✅ Begin loading
    try {
      const url = week ? `/timesheets?week=${week}` : "/timesheets";
      const res = await axios.get(url);
      setTimesheets(res.data);
    } catch (err) {
      console.error("Error fetching timesheets", err);
    } finally {
      setLoading(false); // ✅ End loading
    }
  };

  const add = async (data) => {
const res = await axios.post("/timesheets", { timesheets: data });
    const newEntries = Array.isArray(res.data) ? res.data : [res.data];
    setTimesheets((prev) => [...prev, ...newEntries]);
    return res.data;
  };

  const update = async (id, data) => {
    const res = await axios.put(`/timesheets/${id}`, data);
    setTimesheets((prev) => prev.map((t) => (t._id === id ? res.data : t)));
    return res.data;
  };

  const remove = async (id) => {
    await axios.delete(`/timesheets/${id}`);
    setTimesheets((prev) => prev.filter((t) => t._id !== id));
  };

  return { timesheets, fetchData, add, update, remove, loading }; // ✅ Return loading
};
