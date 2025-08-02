import React from "react";
import TimesheetHeader from "../components/TimeSheetComponents/TimesheetHeader";
import TimesheetTable from "../components/TimeSheetComponents/TimesheetTable";
import TimesheetComments from "../components/TimeSheetComponents/TimesheetComments";

const TimeSheet = () => {
  return (
    <div>
      <TimesheetHeader />
      <TimesheetTable />
      <TimesheetComments />
    </div>
  );
};

export default TimeSheet;
