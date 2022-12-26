import React from "react";
import { Box, Button, TextField } from "@material-ui/core";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
const AddBranch = () => {
  return (
    <Box
      style={{
        width: "40%",
        // border:"2px solid black",
        
        boxShadow: "-3px 0px 17px 4px rgba(216 ,216,216,0.75)",
        padding: "1rem",
        marginRight: "1rem",
        marginLeft:"auto",
        marginRight:"auto"
      }}
    >
      <Box>
        <TextField
          // onChange={(e) => handleInputs(e)}
          label={"Branch Name"}
          type={"text"}
          style={{
            width: "100%",
          }}
          name="name"
          autoComplete="off"
        ></TextField>
      </Box>
      <Box>
        <TextField
          // onChange={(e) => handleInputs(e)}
          label={"Branch Code"}
          type={"text"}
          style={{
            width: "100%",
            marginBlockStart: "1rem",
          }}
          name="name"
          autoComplete="off"
        ></TextField>
      </Box>
      <Box style={{
            width: "100%",
            marginBlockStart: "1rem",
          }} >
      <a ><AddBoxRoundedIcon fontSize="large" style={{color:"black"}} /></a>
      </Box>
    </Box>
  );
};

export default AddBranch;
