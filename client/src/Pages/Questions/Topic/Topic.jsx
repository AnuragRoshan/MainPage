import React from "react";
import { useParams } from "react-router-dom";
import AddTopic from "./AddTopic";
import TopicList from "./TopicList";
const Topic = () => {
  const { subjectParams, branchParams } = useParams();
  return (
    <div style={{ marginInline: "40px", marginBlockStart: "110px" }}>
      <AddTopic branch={branchParams} subject={subjectParams} />
      <TopicList />
    </div>
  );
};

export default Topic;
