import React from "react";
import TrainingTabs from "../components/Feedback/TrainingTabs";
import PassedTrainingsTable from "../components/Feedback/PassedTrainingsTable";

const Feedback = () => {
  return (
    <div className="p-6">
      <TrainingTabs />
      <PassedTrainingsTable />
    </div>
  );
};

export default Feedback;
