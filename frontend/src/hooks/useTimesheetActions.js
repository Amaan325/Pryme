import axiosInstance from "../utils/axiosInstance";

export const useTimesheetActions = () => {
  const fetchTimesheets = async (params = {}) => {
    console.log("Fetching timesheets with params:", params);
    const queryString = new URLSearchParams(params).toString();
    const res = await axiosInstance.get(`/timesheets/get?${queryString}`);
    return res.data;
  };

 const addTimesheet = async (payloadArray) => {
  const res = await axiosInstance.post("/timesheets/save", {
    timesheets: payloadArray,
  });
  return res.data;
};


  const deleteTimesheet = async (id) => {
    await axiosInstance.delete(`/timesheets/${id}/delete`);
  };

  const updateTimesheet = async (payload) => {
    const res = await axiosInstance.put("/timesheets/update", payload);
    return res.data;
  };

  return {
    addTimesheet,
    deleteTimesheet,
    fetchTimesheets,
    updateTimesheet
  };
};