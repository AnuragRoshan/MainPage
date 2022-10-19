import { Box, Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import KeySharpIcon from "@mui/icons-material/KeySharp";
import MarkunreadSharpIcon from "@mui/icons-material/MarkunreadSharp";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store/navbarState";

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
  const dispatch = useDispatch();
  const open = useSelector((state) => state.open);

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

  const initialValues = {
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
    await axios.post(`http://localhost:5000/login`, user).then((response) => {
      var message = response.data.msg;
      var status = response.status;
      console.log(message);
      console.log(status);
      if (status === 200) {
        toast.success(`${message}`, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
          textAlign: "center",
        });
        // window.location.reload();
      } else if (status === 202) {
        toast.warn(`${message}`, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
          textAlign: "center",
        });
      } else if (status === 500) {
        toast.warn(`${message}`, {
          position: "top-center",
          autoClose: 2000,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: true,
          textAlign: "center",
        });
      }
    });
  };

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
          paddingBlockStart: "1.5rem",
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
          Log in
        </Button>
        
        <ToastContainer
            className={classes.toastifyCss}
          />
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
          onClick={LoginFalse}
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
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginModal;
