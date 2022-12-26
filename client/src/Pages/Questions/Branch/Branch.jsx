import React from "react";
import AddBranch from "./AddBranch";
import BranchList from "./BranchList";
import SearchBar from "./SearchBar";

const Branch = () => {
  return (
    <div style={{ marginInline: "40px", marginBlockStart: "110px" }}>
      <AddBranch />
      <SearchBar />
      <BranchList />
    </div>
  );
};

export default Branch;
