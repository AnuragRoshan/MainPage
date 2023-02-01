import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { padding } from "@mui/system";
import axios from "axios";

//STYLING PART--------------------------------------------------------------------------
const bgColor = "#5f727c";
const useStyles = makeStyles({
  cap: {
    padding: "0.5rem",
    color: "whitesmoke",
    fontSize: "1.5rem",
  },
  input: {
    outline: "none",
    border: "0px solid white",
    backgroundColor: bgColor,
    marginInline: "2rem",
    borderRadius: "10px",
    width: "100%",
    // height: "100%",
    padding: "0.5rem",
    fontSize: "1.25rem",
    color: "whitesmoke",
    fontFamily: "Montserrat",
  },
  select: {
    outline: "none  ",
    // border: "0",
    background: "whitesmoke",
    height: "40px",
    width: "80%",
    fontFamily: "Montserrat",
    // color: "black",
    backgroundColor: bgColor,
    color: "whitesmoke",
    marginBlockStart: "1rem",
    // padding: "1.35rem",
    textAlign: "center",
    borderRadius: "10px",
    fontSize: "15px",
  },
  dropDown: {
    fontSize: "15px",
  },
});
// STYLING PART END ----------------------------------------------------------------------

const AddQuestion = () => {
  const classes = useStyles();

  // Send Data To Node JS Server Start-------------------------------------------------------------
  const initialValues = {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    subject: "",
    topic: "",
    subTopic: "",
    detailedSubTopic: "",
    difficulty: "",
  };

  const [questionState, setQuestionState] = useState({ initialValues });

  const handleInputs = (e) => {
    setQuestionState({ ...questionState, [e.target.name]: e.target.value });
    // setSelectedDetailedSubTopic({...selectedDetailedSubTopic,e.target.value})
    // setQuestionState({ ...questionState, ["option1"]: "ANURAG" });
    console.log(questionState);
  };

  let [subjectList, setSubjectList] = useState([]);

  let [topicList, setTopicList] = useState([]);

  let [subTopicList, setSubTopicList] = useState([]);

  let [detailedSubTopicList, setDetailedSubTopicList] = useState([]);

  //GET LIST OF ALL SUJECTS
  const getSubjectList = async () => {
    const { data } = await axios.get(`http://localhost:5000/getAllSubjects`);
    setSubjectList(data);
  };
  // console.log(subjectList);
  // console.log(topicList);

  useEffect(() => {
    const storedData = localStorage.getItem("questionState");
    if (storedData) {
      setQuestionState(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("questionState2", JSON.stringify(questionState));
  }, [questionState]);

  useEffect(() => {
    getSubjectList();
    getTopicList();
    setSubTopicList([]);
    setDetailedSubTopicList([]);
  }, [questionState.subject]);
  useEffect(() => {
    getSubTopicList();
    setDetailedSubTopicList([]);
  }, [questionState.topic]);
  useEffect(() => {
    getDetailedSubTopicList();
  }, [questionState.subTopic]);

  const getTopicList = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/getTopics/` + questionState.subject
    );
    setTopicList(data);
    // console.log(topicList);
  };

  const getSubTopicList = async () => {
    // if (questionState.topic === "") subTopicList = [];
    const { data } = await axios.get(
      `http://localhost:5000/getSubTopics/` +
        questionState.subject +
        `/` +
        questionState.topic
    );
    // console.log(data);
    setSubTopicList(data);
    // console.log(subTopicList);
  };

  const getDetailedSubTopicList = async () => {
    // console.log(questionState.subTopic);
    const { data } = await axios.get(
      `http://localhost:5000/getDetailedSubTopics/` +
        questionState.subject +
        `/` +
        questionState.topic +
        `/` +
        questionState.subTopic
    );
    setDetailedSubTopicList(data);
    // console.log(detailedSubTopicList);
    // // console.log(data);
  };
  // console.log(detailedSubTopicList);
  // var mp = ["anurag", "anurag2", "anurag3"];
  // Send Data To Node JS Server End-------------------------------------------------------------
  return (
    <Box
      sx={{
        height: "inherit",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
        bgcolor: "#374953",

        fontFamily: "Montserrat",
      }}
    >
      <Box
        style={{
          textAlign: "center",
          padding: "1.5rem",
          fontSize: "2rem",
          color: "whitesmoke",
        }}
      >
        Admin ? Add Question Here !
      </Box>
      <form>
        <Box style={{ paddingInline: "10rem" }}>
          <Box
            style={{ display: "flex", flexDirection: "row", padding: "1rem" }}
          >
            <Box className={classes.cap}>Question</Box>
            <input
              type="text"
              onChange={(e) => handleInputs(e)}
              name="questions"
              className={classes.input}
            ></input>
          </Box>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Box style={{ flex: "2" }}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBlockStart: "1rem",
                }}
              >
                <Box className={classes.cap}>a)</Box>
                <Box></Box>
                <input
                  type="text"
                  className={classes.input}
                  onChange={(e) => handleInputs(e)}
                  name="option1"
                ></input>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBlockStart: "1rem",
                }}
              >
                <Box className={classes.cap}>b)</Box>
                <Box></Box>
                <input
                  type="text"
                  className={classes.input}
                  onChange={(e) => handleInputs(e)}
                  name="option2"
                ></input>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBlockStart: "1rem",
                }}
              >
                <Box className={classes.cap}>c)</Box>
                <Box></Box>
                <input
                  type="text"
                  className={classes.input}
                  onChange={(e) => handleInputs(e)}
                  name="option3"
                ></input>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBlockStart: "1rem",
                }}
              >
                <Box className={classes.cap}>d)</Box>
                <Box></Box>
                <input
                  type="text"
                  className={classes.input}
                  onChange={(e) => handleInputs(e)}
                  name="option4"
                ></input>
              </Box>
            </Box>
            <Box style={{ flex: "1", marginBlockStart: "1rem" }}>
              <label
                className={classes.cap}
                style={{ fontSize: "1.3rem" }}
                htmlFor="options-dropdown"
              >
                Choose Correct Option
              </label>
              <select
                className={classes.select}
                style={{ width: "30" }}
                onChange={(e) => handleInputs(e)}
                name="answer"
              >
                <option className={classes.dropDown} value="0">
                  a
                </option>
                <option className={classes.dropDown} value="1">
                  b
                </option>
                <option className={classes.dropDown} value="2">
                  c
                </option>
                <option className={classes.dropDown} value="3">
                  d
                </option>
              </select>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box style={{ flex: "1", marginBlockStart: "1rem" }}>
              <label
                className={classes.cap}
                style={{ fontSize: "1.3rem" }}
                htmlFor="options-dropdown"
              >
                Choose Subject
              </label>
              <select
                className={classes.select}
                name="subject"
                id=""
                onChange={(e) => handleInputs(e)}
              >
                {subjectList.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Box>
            <Box style={{ flex: "1", marginBlockStart: "1rem" }}>
              <label
                className={classes.cap}
                style={{ fontSize: "1.3rem" }}
                htmlFor="options-dropdown"
              >
                Topic
              </label>
              <select
                className={classes.select}
                name="topic"
                id=""
                onChange={(e) => handleInputs(e)}
              >
                {
                  topicList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))
                  // console.log(topicList)
                }
              </select>
            </Box>
            <Box style={{ flex: "1", marginBlockStart: "1rem" }}>
              <label
                className={classes.cap}
                style={{ fontSize: "1.3rem" }}
                htmlFor="options-dropdown"
              >
                Subtopic
              </label>
              <select
                className={classes.select}
                name="subTopic"
                onChange={(e) => handleInputs(e)}
                id=""
              >
                {/* TODO --------------------------------- */}
                {
                  subTopicList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))
                  // console.log(topicList)
                }
              </select>
            </Box>
            <Box style={{ flex: "1", marginBlockStart: "1rem" }}>
              <label
                className={classes.cap}
                style={{ fontSize: "1.3rem" }}
                htmlFor="options-dropdown"
              >
                DetailedSubTopic
              </label>
              <select
                className={classes.select}
                name="detailedSubTopic"
                onChange={(e) => handleInputs(e)}
                id=""
              >
                {
                  detailedSubTopicList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))
                  // console.log(topicList)
                }
              </select>
            </Box>
          </Box>
          <Box
            style={{
              flex: "1",
              marginBlockStart: "1rem",
              textAlign: "center",
            }}
          >
            <Box>
              <label
                className={classes.cap}
                style={{ fontSize: "1.1rem" }}
                htmlFor="options-dropdown"
              >
                Difficulty
              </label>
            </Box>
            <Box>
              <select
                className={classes.select}
                style={{ width: "20%", height: "30px" }}
                name="difficulty"
                onChange={(e) => handleInputs(e)}
                id=""
              >
                <option className={classes.dropDown} value="Easy">
                  Easy
                </option>
                <option className={classes.dropDown} value="Medium">
                  Medium
                </option>
                <option className={classes.dropDown} value="Hard">
                  Hard
                </option>
              </select>
            </Box>
          </Box>
          <Button style={{ backgroundColor: "whitesmoke", color: "#374953" }}>
            Add Question
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddQuestion;
