import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import KeySharpIcon from "@mui/icons-material/KeySharp";
import MarkunreadSharpIcon from "@mui/icons-material/MarkunreadSharp";
import { actions } from "../Store/navbarState";
import { useDispatch, useSelector } from "react-redux";
import Redirect, { Link } from "react-router-dom";

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
  const dispatch = useDispatch();
  const open = useSelector((state) => state.open);

  const handleOpen = () => {
    dispatch(actions.handleOpen(true));
  };
  const handleClose = () => {
    dispatch(actions.handleOpen(false));
  };

  const isLogin = useSelector((state) => state.isLogin);

  const LoginTrue = () => {
    dispatch(actions.LoginTrue(true));
  };
  const LoginFalse = () => {
    dispatch(actions.LoginFalse(false));
  };

  //Regsitering to Data Base

  const initialValues = {
    name: "",
    username: "",
    password: "",
  };
  const [user, setUser] = useState({ initialValues });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const submitForm = async () => {
    // alert("Submitted")
    axios({
      method: "POST",
      data: {
        user,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then((res) => console.log(res));
  };

  //Regsitering To Data Base end

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
          onChange={(e) => handleInputs(e)}
          label={"Name"}
          type={"text"}
          style={{
            width: "100%",
          }}
          name="username"
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
          onChange={(e) => handleInputs(e)}
          label={"Email"}
          type={"email"}
          style={{
            width: "100%",
          }}
          name="username"
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
          onChange={(e) => handleInputs(e)}
          label={"Password"}
          type={"password"}
          style={{
            width: "100%",
          }}
          name="password"
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
          onClick={() => submitForm()}
        >
          Register
        </Button>
        <ToastContainer className={classes.toastifyCss} />
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
            onClick={LoginTrue}
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
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterModal;
