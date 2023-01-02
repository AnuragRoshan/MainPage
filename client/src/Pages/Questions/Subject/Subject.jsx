import React from "react";
import { useParams } from "react-router-dom";
import AddTopic from "../Topic/AddTopic";
import SubjectList from "./SubjectList";
const Subject = () => {
  const { subjectParams, branchParams } = useParams();
  return (
    <div style={{ marginInline: "40px", marginBlockStart: "110px" }}>
      <AddTopic branch={branchParams} subject={subjectParams} />
      <SubjectList />
    </div>
  );
};

export default Subject;
