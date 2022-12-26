import { Box } from "@material-ui/core";
import React from "react";

const BranchList = () => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
    { id: 3, name: "Jane Doe" },
    { id: 3, name: "Jane Doe" },
    { id: 3, name: "Jane Doe" },
    { id: 3, name: "Jane Doe" },
    { id: 3, name: "Jane Doe" },
  ];
  return (
    <Box>
      {data.map((u) => (
        <Box>
          <Box>{u.name}</Box>
          <Box>{u.id}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default BranchList;
