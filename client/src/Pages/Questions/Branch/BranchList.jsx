import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddSubject from "./AddSubject";

const BranchList = () => {
  const [branchList, setbranchList] = useState([]);
  useEffect(() => {
    const getBranchList = async () => {
      const { data } = await axios.get("http://localhost:5000/getBranch");
      setbranchList(data);
      console.log(data);
    };
    // console.log(branchList);
    getBranchList();
  }, []);

  const navigate = useNavigate();
  return (
    <Box>
      {branchList.map((u) => (
        <Box style={{ margin: "2rem" }}>
          <Box>
            <Box>{u.branch}</Box>
            <Box>
              <AddSubject data={u.branch} />
            </Box>
          </Box>

          <a href="">
            {u.subject.map((k) => {
              return (
                <Box
                  onClick={() =>
                    navigate(`/questions/${u.branch}/${k.subjectName}/`)
                  }
                >
                  {k.subjectName}
                </Box>
              );
            })}
          </a>
        </Box>
      ))}
    </Box>
  );
};

export default BranchList;
