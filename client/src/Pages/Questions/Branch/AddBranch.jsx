import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import ReplayCircleFilledRoundedIcon from "@mui/icons-material/ReplayCircleFilledRounded";
import axios from "axios";
const AddBranch = () => {
  const initialValues = {
    branch: "",
    branchCode: "",
  };
  const [branch, setBranch] = useState({ initialValues });

  const handleInputs = (e) => {
    setBranch({ ...branch, [e.target.name]: e.target.value });
    console.log(branch);
  };

  const submitForm = async () => {
    // alert("Submitted")
    await axios.post(`http://localhost:5000/addBranch`, branch);

    window.location.reload(false);
  };
  return (
    <Box
      style={{
        width: "40%",
        // border:"2px solid black",

        boxShadow: "-3px 0px 17px 4px rgba(216 ,216,216,0.75)",
        padding: "1rem",
        marginRight: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box>
        <TextField
          onChange={(e) => handleInputs(e)}
          label={"Branch Name"}
          type={"text"}
          style={{
            width: "100%",
          }}
          name="branch"
          autoComplete="off"
        ></TextField>
      </Box>
      <Box>
        <TextField
          onChange={(e) => handleInputs(e)}
          label={"Branch Code"}
          type={"text"}
          style={{
            width: "100%",
            marginBlockStart: "1rem",
          }}
          name="branchCode"
          autoComplete="off"
        ></TextField>
      </Box>
      <Box
        style={{
          width: "100%",
          marginBlockStart: "1rem",
        }}
      >
        <a onClick={() => submitForm()}>
          <AddBoxRoundedIcon
            fontSize="large"
            style={{ color: "black", cursor: "pointer" }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default AddBranch;
