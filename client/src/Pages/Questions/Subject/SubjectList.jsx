import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BranchList = () => {
  const { subjectParams, branchParams } = useParams();
  const [branchList, setbranchList] = useState([]);
  useEffect(() => {
    const getBranchList = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/getBranch/${branchParams}/${subjectParams}`
      );
      setbranchList(data);
    };
    getBranchList();
  }, []);
  // console.log(id);
  return (
    <Box>
      <Box>{branchParams}</Box>
      <Box>{subjectParams}</Box>
    </Box>
  );
};

export default BranchList;
