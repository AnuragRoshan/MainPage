import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddSubTopic from "./AddSubTopic";

const TopicList = () => {
  const { subjectParams, branchParams } = useParams();
  const [branchList, setbranchList] = useState([]);
  useEffect(() => {
    const getBranchList = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/getBranch/${branchParams}/${subjectParams}`
      );
      setbranchList(data);
      // console.log(data);
    };
    getBranchList();
  }, []);
  return (
    <Box>
      {branchList.map((u) => (
        <Box style={{ margin: "2rem" }}>
          {/* <a href=""> */}
          {u.subject.map((k) => {
            return (
              <Box>
                {k.topics.map((l) => {
                  return (
                    <Box style={{ marginBlockEnd: "1rem" }}>
                      <Box>{l.topicName}</Box>
                      <Box>
                        <AddSubTopic
                          branch={branchParams}
                          subject={subjectParams}
                          topic={l.topicName}
                        />
                      </Box>
                      <Box>
                        {l.subTopics.map((m) => {
                          return <Box>{m.SubTopicName}</Box>;
                        })}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            );
          })}
          {/* </a> */}
        </Box>
      ))}
    </Box>
  );
};

export default TopicList;
