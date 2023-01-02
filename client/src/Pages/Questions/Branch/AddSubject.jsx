import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { useParams } from "react-router-dom";

import axios from "axios";
const AddBranch = (props) => {
  // const { branchParams } = useParams();
  const initialValues = {
    subjectName: "",
    subjectCode: "",
    article: "",
  };
  const [subject, setSubject] = useState({ initialValues });

  const handleInputs = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
    console.log(subject);
  };

  const submitForm = async () => {
    // alert("Submitted")
    await axios.post(`http://localhost:5000/addSubject/${props.data}`, subject);

    window.location.reload(false);
  };
  return (
    <Box
      style={{
        width: "40%",
        // border:"2px solid black",

        boxShadow: "-3px 0px 17px 4px rgba(216 ,216,216,0.75)",
        padding: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box>
        <TextField
          onChange={(e) => handleInputs(e)}
          label={"Subject Name"}
          type={"text"}
          style={{
            width: "100%",
          }}
          name="subjectName"
          autoComplete="off"
        ></TextField>
      </Box>
      <Box>
        <TextField
          onChange={(e) => handleInputs(e)}
          label={"Subject Code"}
          type={"text"}
          style={{
            width: "100%",
            marginBlockStart: "1rem",
          }}
          name="subjectCode"
          autoComplete="off"
        ></TextField>
      </Box>
      <Box>
        <TextField
          onChange={(e) => handleInputs(e)}
          label={"Article"}
          type={"text"}
          style={{
            width: "100%",
            marginBlockStart: "1rem",
          }}
          name="article"
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
