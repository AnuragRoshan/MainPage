import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
const BranchList = () => {
  const [branchList, setbranchList] = useState([]);
  useEffect(() => {
    const getBranchList = async () => {
      const { data } = await axios.get("http://localhost:5000/getBranch");
      setbranchList(data);
    };
    getBranchList();
  }, []);

  return (
    <Box>
      {branchList.map((u) => (
        <Box style={{ margin: "2rem" }}>
          <Box>{u.branch}</Box>
          <a href="">
            {u.subject.map((k) => {
              return <Box>{k.subjectName}</Box>;
            })}
          </a>
        </Box>
      ))}
    </Box>
  );
};

export default BranchList;
