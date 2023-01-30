import React from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { padding } from "@mui/system";
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
    borderRadius: "10px",
    fontSize: "15px",
  },
  dropDown: {
    fontSize: "15px",
  },
});
const AddQuestion = () => {
  const classes = useStyles();
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
            <input type="text" className={classes.input}></input>
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
                <input type="text" className={classes.input}></input>
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
                <input type="text" className={classes.input}></input>
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
                <input type="text" className={classes.input}></input>
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
                <input type="text" className={classes.input}></input>
              </Box>
            </Box>
            <Box style={{ flex: "1", marginBlockStart: "1rem" }}>
              <label
                className={classes.cap}
                style={{ fontSize: "1.3rem" }}
                for="options-dropdown"
              >
                Choose Correct Option
              </label>
              <select className={classes.select} name="options-dropdown" id="">
                <option className={classes.dropDown} value="a">
                  a
                </option>
                <option className={classes.dropDown} value="b">
                  b
                </option>
                <option className={classes.dropDown} value="c">
                  c
                </option>
                <option className={classes.dropDown} value="d">
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
                for="options-dropdown"
              >
                Choose Subject
              </label>
              <select
                className={classes.select}
                name="options-dropdown"
                id=""
              ></select>
            </Box>
            <Box style={{ flex: "1", marginBlockStart: "1rem" }}>
              <label
                className={classes.cap}
                style={{ fontSize: "1.3rem" }}
                for="options-dropdown"
              >
                Topic
              </label>
              <select
                className={classes.select}
                name="options-dropdown"
                id=""
              ></select>
            </Box>
            <Box style={{ flex: "1", marginBlockStart: "1rem" }}>
              <label
                className={classes.cap}
                style={{ fontSize: "1.3rem" }}
                for="options-dropdown"
              >
                Subtopic
              </label>
              <select
                className={classes.select}
                name="options-dropdown"
                id=""
              ></select>
            </Box>
            <Box style={{ flex: "1", marginBlockStart: "1rem" }}>
              <label
                className={classes.cap}
                style={{ fontSize: "1.3rem" }}
                for="options-dropdown"
              >
                DetailedSubTopic
              </label>
              <select
                className={classes.select}
                name="options-dropdown"
                id=""
              ></select>
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
                for="options-dropdown"
              >
                Difficulty
              </label>
            </Box>
            <Box>
              <select
                className={classes.select}
                style={{ width: "20%", height: "30px" }}
                name="options-dropdown"
                id=""
              ></select>
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
