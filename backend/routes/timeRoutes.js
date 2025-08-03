const express = require("express");
const {
  createTimesheet,
  getTimesheets,
  updateTimesheet,
  deleteTimesheet,
} = require("../controllers/timeSheetController");

const router = express.Router();

router.post("/save", createTimesheet);
router.get("/get", getTimesheets);
router.put("/:id", updateTimesheet);
router.delete("/:id/delete", deleteTimesheet);

module.exports = router;
