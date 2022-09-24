import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import KeySharpIcon from "@mui/icons-material/KeySharp";
import MarkunreadSharpIcon from '@mui/icons-material/MarkunreadSharp';

const useStyles = makeStyles({
  authBtn: {
    backgroundColor: "#277BC0",
    color: "inherit",
    fontFamily: "Montserrat",
    "&:hover": {
      backgroundColor: "#FFCB42",
      color: "black",
    },
  },
});

const LoginModal = () => {
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
          paddingBlockStart: "1rem",
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
          paddingBlockStart: "1.5rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <Button
          className={classes.authBtn}
          style={{ padding: "0.3rem", width: "140px", fontWeight: "bolder",
          backgroundColor: "#277BC0",
          color: "inherit",
          fontFamily: "Montserrat", }}
        >
          Log in    
          
        </Button>
      </Box>
      <Box style={{ paddingBlockStart: "1.5rem", fontSize: "0.95rem" }}>
        Not a member ?{" "}
        <a
          style={{
            cursor: "pointer",
            textDecoration: "none",
            pointerEvents: "",
            color: "#277BC0",
          }}
        >
          Register
        </a>
      </Box>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box style={{ paddingBlockStart: "1.5rem", fontSize: "0.95rem" }}>
          Troubble Logging In ?{" "}
          <a
            style={{
              cursor: "pointer",
              textDecoration: "none",
              pointerEvents: "",
              color: "#277BC0",
            }}
          >
            Forgot Password
          </a>
        </Box>
        <Box style={{ color: "white" }}>
          <Button
            className={classes.authBtn}
            style={{
              marginLeft: "3rem",
              marginTop: "0.33rem",
              width: "100px",
              fontWeight: "bolder",
              backgroundColor: "#277BC0",
              color: "inherit",
              fontFamily: "Montserrat",
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginModal;
