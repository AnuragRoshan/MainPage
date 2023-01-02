import React from "react";
import AddBranch from "./AddBranch";
import BranchList from "./BranchList";
import SearchBar from "./SearchBar";
// var isAdmin = true;
const Branch = () => {
  return (
    <div style={{ marginInline: "40px", marginBlockStart: "110px" }}>
      <AddBranch />
      {/* <SearchBar /> */}
      <BranchList />
    </div>
  );
};

export default Branch;
