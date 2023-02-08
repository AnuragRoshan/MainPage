import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { padding } from "@mui/system";
import axios from "axios";

//STYLING PART--------------------------------------------------------------------------
const bgColor = "#FFB200";
const useStyles = makeStyles({
  cap: {
    padding: "0.5rem",
    color: "black",
    fontSize: "1.5rem",
    fontWeight: "800",
    fontFamily: "Montserrat",
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
    color: "black",
    fontFamily: "Montserrat",
    // boxShadow: " rgb(58 53 65 / 10%) 0px 2px 90px 0px;",
  },
  select: {
    outline: "none  ",
    // border: "0",
    background: "black",
    height: "40px",
    width: "80%",
    fontFamily: "Montserrat",
    // color: "black",
    backgroundColor: bgColor,
    color: "black",
    marginBlockStart: "1rem",
    // padding: "1.35rem",
    textAlign: "center",
    borderRadius: "10px",
    fontSize: "15px",
  },
  dropDown: {
    fontSize: "15px",
  },
  formBox: {
    marginInline: "10rem",
    padding: "1rem",
    borderRadius: "10px",
    backgroundColor: "white",
    // boxShadow: "-webkit-box-shadow: -1px 4px 66px -6px rgba(240,185,65,1);
    // -moz-box-shadow:
    // box-shadow: -1px 4px 66px -6px rgba(240,185,65,1);",
    // WebkitBoxShadow: "-1px 4px 66px -6px rgba(240,185,65,1)",
    // MozBoxShadow: "-1px 4px 66px -6px rgba(240,185,65,1)",
    boxShadow: " rgb(58 53 65 / 10%) 0px 2px 90px 0px;",
  },
});
// STYLING PART END ----------------------------------------------------------------------

const AddQuestion = () => {
  const classes = useStyles();

  // Send Data To Node JS Server Start-------------------------------------------------------------

  const [questionState, setQuestionState] = useState({});

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

  const handlOtherInputs = (e) => {
    // setQuestionState({ ...questionState, [e.target.name]: "" });
    // // setQuestionState({ ...questionState, [e.target.name]: e.target.value });
    // console.log(temp.subject);
    // console.log(questionState);
    // var s = temp.suject;
    // // var k = "okkkkkk";
    // setQuestionState({ ...questionState, [e.target.name]: s });
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(questionState);
    // -----------------------------------------------------------------------------------------
    // questionState.e.target.name = temp.e.target.name;
  };

  //GET LIST OF ALL SUJECTS
  const getSubjectList = async () => {
    const { data } = await axios.get(`http://localhost:5000/getAllSubjects`);
    setSubjectList(data);
  };
  // console.log(subjectList);
  // console.log(topicList);

  useEffect(() => {
    console.log("ok");
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
  };

  // Submit Post Request Start -----------------------------

  const submitForm = async () => {
    // alert("Submitted")
    await axios
      .post(`http://localhost:5000/addQuestion`, questionState)
      .then((response) => {
        var message = response.data.msg;
        console.log(message);
      });
  }; // Submit Post Request End-----------------------------

  // Send Data To Node JS Server End-------------------------------------------------------------
  return (
    <Box
      sx={{
        height: "50rem",
        // width: { xs: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" },
        bgcolor: "#d7dce0",
        width: "100%",
      }}
    >
      <Box
        style={{
          textAlign: "center",
          padding: "1.5rem",
          fontSize: "2rem",
          color: "black",
          fontWeight: "800",
          fontFamily: "Montserrat",
        }}
      >
        Admin ? Add Question Here !
      </Box>
      <Box>
        <Box className={classes.formBox}>
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
              <Box>
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
                  <option value="" disabled selected style={{ color: "black" }}>
                    Choose an option
                  </option>
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
              <Box style={{ padding: "1rem" }}>
                {/* ------------------------   */}
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box style={{ flex: "1", marginBlockStart: "1rem" }}>
              <Box>
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
                  {/* <option value="" disabled selected style={{ color: "black" }}>
                    Choose an option
                  </option> */}
                  {
                    subjectList.map((c, i) => {
                      if (i === 0)
                        return (
                          <>
                            <option
                              value=""
                              disabled={i !== 0}
                              selected={i === 0}
                              style={{ color: "black" }}
                            >
                              Choose an option
                            </option>
                            <option key={c} value={c}>
                              {c}
                            </option>
                          </>
                        );
                      else {
                        return (
                          <>
                            <option key={c} value={c}>
                              {c}
                            </option>
                          </>
                        );
                      }
                    })
                    // console.log(topicList)
                  }
                </select>
              </Box>
              <Box
                style={{
                  marginBlockStart: "0.8rem",
                  color: "black",
                }}
              >
                <Box>OR add new Subject</Box>
                <Box
                  style={{
                    flex: "2",
                    paddingBlock: "0px",
                  }}
                >
                  <input
                    className={classes.input}
                    id="inputID"
                    name="subject"
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    style={{
                      width: "75%",
                      marginInline: "0px",
                      marginBlockStart: "1rem",
                      paddingInline: "5px",
                    }}
                    type="text"
                  ></input>
                </Box>
              </Box>
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
                  topicList.map((c, i) => {
                    if (i === 0)
                      return (
                        <>
                          <option
                            value=""
                            disabled={i !== 0}
                            selected={i === 0}
                            style={{ color: "black" }}
                          >
                            Choose an option
                          </option>
                          <option key={c} value={c}>
                            {c}
                          </option>
                        </>
                      );
                    else {
                      return (
                        <>
                          <option key={c} value={c}>
                            {c}
                          </option>
                        </>
                      );
                    }
                  })
                  // console.log(topicList)
                }
              </select>
              <Box
                style={{
                  marginBlockStart: "0.8rem",
                  color: "black",
                }}
              >
                <Box>OR add new Topic</Box>
                <Box
                  style={{
                    flex: "2",
                    paddingBlock: "0px",
                  }}
                >
                  <input
                    className={classes.input}
                    id="inputID"
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    name="topic"
                    style={{
                      width: "75%",
                      marginInline: "0px",
                      marginBlockStart: "1rem",
                      paddingInline: "5px",
                    }}
                    type="text"
                  ></input>
                </Box>
              </Box>
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
                  subTopicList.map((c, i) => {
                    if (i === 0)
                      return (
                        <>
                          <option
                            value=""
                            disabled={i !== 0}
                            selected={i === 0}
                            style={{ color: "black" }}
                          >
                            Choose an option
                          </option>
                          <option key={c} value={c}>
                            {c}
                          </option>
                        </>
                      );
                    else {
                      return (
                        <>
                          <option key={c} value={c}>
                            {c}
                          </option>
                        </>
                      );
                    }
                  })
                  // console.log(topicList)
                }
              </select>
              <Box
                style={{
                  marginBlockStart: "0.8rem",
                  color: "black",
                }}
              >
                <Box>OR add new Subtopic</Box>
                <Box
                  style={{
                    flex: "2",
                    paddingBlock: "0px",
                  }}
                >
                  <input
                    className={classes.input}
                    id="inputID"
                    name="subTopic"
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    style={{
                      width: "75%",
                      marginInline: "0px",
                      marginBlockStart: "1rem",
                      paddingInline: "5px",
                    }}
                    type="text"
                  ></input>
                </Box>
              </Box>
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
                  detailedSubTopicList.map((c, i) => {
                    if (i === 0)
                      return (
                        <>
                          <option
                            value=""
                            disabled={i !== 0}
                            selected={i !== 0}
                            style={{ color: "black" }}
                          >
                            Choose an option
                          </option>
                          <option key={c} value={c}>
                            {c}
                          </option>
                        </>
                      );
                    else {
                      return (
                        <>
                          <option key={c} value={c}>
                            {c}
                          </option>
                        </>
                      );
                    }
                  })
                  // console.log(topicList)
                }
              </select>
              <Box
                style={{
                  marginBlockStart: "0.8rem",
                  color: "black",
                }}
              >
                <Box>OR add new </Box>
                <Box
                  style={{
                    flex: "2",
                    paddingBlock: "0px",
                  }}
                >
                  <input
                    className={classes.input}
                    id="inputID"
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    name="detailedSubTopic"
                    style={{
                      width: "75%",
                      marginInline: "0px",
                      marginBlockStart: "1rem",
                      paddingInline: "5px",
                    }}
                    type="text"
                  ></input>
                </Box>
              </Box>
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
                <option value="" disabled selected style={{ color: "black" }}>
                  Choose an option
                </option>
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
          <Button
            onClick={() => submitForm()}
            style={{
              backgroundColor: bgColor,
              color: "black",
              fontSize: "1.1rem",
            }}
          >
            Add Question
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddQuestion;
