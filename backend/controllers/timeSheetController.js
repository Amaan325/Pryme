const TimeSheet = require("../models/TimeSheet");

const createTimesheet = async (req, res) => {
    console.log("Creating timesheet with data:", req.body);
  try {
    const { timesheets } = req.body;

    if (!Array.isArray(timesheets) || timesheets.length === 0) {
      return res.status(400).json({ message: "timesheets array is required" });
    }

    const newEntries = await TimeSheet.insertMany(timesheets);
    res.status(201).json(newEntries);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTimesheets = async (req, res) => {
    // console.log("Fetching timesheets with params:");
  try {
    const entries = await TimeSheet.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTimesheet = async (req, res) => {
  try {
    const updated = await TimeSheet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTimesheet = async (req, res) => {
  try {
    await TimeSheet.findByIdAndDelete(req.params.id);
    res.json({ message: "Timesheet deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTimesheet,
  getTimesheets,
  updateTimesheet,
  deleteTimesheet,
};
