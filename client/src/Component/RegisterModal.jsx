import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import KeySharpIcon from "@mui/icons-material/KeySharp";
import MarkunreadSharpIcon from "@mui/icons-material/MarkunreadSharp";

const useStyles = makeStyles({
  authBtn: {
    "&:hover": {
      backgroundColor: "#FFCB42",
      color: "black",
    },
  },
});

const RegisterModal = () => {
  const classes = useStyles();

  return (
    <Box
      style={{ fontFamily: "Montserrat", margin: "1.1rem", height: "19.8rem" }}
    >
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <PersonRoundedIcon
          style={{
            paddingTop: "1.3rem",
            paddingRight: "0.5rem",
            fontSize: "2rem",
            color: "#277BC0",
          }}
        />
        <TextField
          //   onChange={(e) => handleInputs(e)}
          label={"Name"}
          type={"text"}
          style={{
            width: "100%",
          }}
          name="name"
          autoComplete="on"
        ></TextField>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBlockStart: "0.5rem",
        }}
      >
        <MarkunreadSharpIcon
          style={{
            paddingTop: "1.3rem",
            paddingRight: "0.5rem",
            fontSize: "2rem",
            color: "#277BC0",
          }}
        />
        <TextField
          //   onChange={(e) => handleInputs(e)}
          label={"Email"}
          type={"email"}
          style={{
            width: "100%",
          }}
          name="name"
          autoComplete="on"
        ></TextField>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBlockStart: "0.5rem",
        }}
      >
        <KeySharpIcon
          style={{
            paddingTop: "1.3rem",
            paddingRight: "0.5rem",
            fontSize: "2rem",
            color: "#277BC0",
          }}
        />
        <TextField
          //   onChange={(e) => handleInputs(e)}
          label={"Password"}
          type={"password"}
          style={{
            width: "100%",
          }}
          name="name"
          autoComplete="on"
        ></TextField>
      </Box>
      <Box
        style={{
          paddingBlockStart: "0.5rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <Button
          className={classes.authBtn}
          style={{
            padding: "0.3rem",
            width: "140px",
            fontWeight: "bolder",
            backgroundColor: "#277BC0",
            color: "inherit",
            fontFamily: "Montserrat",
          }}
        >
          Register
        </Button>
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBlockStart: "1.5rem",
        }}
      >
        <Box style={{ paddingBlockStart: "1.5rem", fontSize: "0.95rem" }}>
          Already a member ?{" "}
          <a
            style={{
              cursor: "pointer",
              textDecoration: "none",
              pointerEvents: "",
              color: "#277BC0",
            }}
          >
            Login
          </a>
        </Box>
        <Box style={{ color: "white" }}>
          <Button
            className={classes.authBtn}
            style={{
              backgroundColor: "#277BC0",
              color: "inherit",
              fontFamily: "Montserrat",
              marginLeft: "9rem",
              marginTop: "0.33rem",
              width: "100px",
              fontWeight: "bolder",
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterModal;
