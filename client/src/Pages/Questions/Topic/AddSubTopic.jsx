import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { useParams } from "react-router-dom";

import axios from "axios";
const AddSubTopic = (props) => {
  // const { branchParams } = useParams();
  const initialValues = {
    SubTopicName: "",
    SubTopicCode: "",
    article: "",
    branch: `${props.branch}`,
    subject: `${props.subject}`,
    topic: `${props.topic}`,
  };
  const [subTopic, setSubTopic] = useState({ initialValues });

  const handleInputs = (e) => {
    setSubTopic({ ...subTopic, [e.target.name]: e.target.value });
    // console.log(subTopic);
  };

  const submitForm = async () => {
    // alert("Submitted")
    await axios.post(`http://localhost:5000/addSubTopic`, subTopic);

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
          label={"Subtopic Name"}
          type={"text"}
          style={{
            width: "100%",
          }}
          name="SubTopicName"
          autoComplete="off"
        ></TextField>
      </Box>
      <Box>
        <TextField
          onChange={(e) => handleInputs(e)}
          label={"Subtopic Code"}
          type={"text"}
          style={{
            width: "100%",
            marginBlockStart: "1rem",
          }}
          name="SubTopicCode"
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

export default AddSubTopic;
