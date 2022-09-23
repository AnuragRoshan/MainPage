import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
// import authModal from "./Authmodal"
import { Modal } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "grey",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  link: {
    color: "black",
    "&:hover": {
      color: "grey",
    },
  },
});
const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
          backgroundColor: "#fffffff0",
          position: "fixed",
          padding: "0.5rem",
        }}
      >
        <Toolbar style={{ marginInline: "4rem" }}>
          <Grid item xs={11}>
            <Typography
              variant="h5"
              style={{
                color: "black",
                fontFamily: "Montserrat",
                fontSize: "30px",
                fontWeight: "bolder",
              }}
            >
              AHW
            </Typography>
          </Grid>
          <Grid>
            <a href="" style={{ textDecoration: "none" }}>
              <Typography
                className={classes.link}
                style={{
                  width: "130px",
                  paddingLeft: "1rem",
                  fontFamily: "Montserrat",
                  fontWeight: "bolder",
                }}
              >
                Our Services{" "}
              </Typography>{" "}
            </a>
          </Grid>
          <Grid>
            <Button
              style={{ padding: "0", marginLeft: "1px", textTransform: "none" }}
              onClick={handleOpen}
            >
              {" "}
              <Typography
                className={classes.btn}
                style={{
                  borderRadius: "4px",
                  width: "110px",
                  padding: "0.4rem",
                  fontFamily: "Montserrat",
                  fontWeight: "bolder",
                }}
              >
                Login
              </Typography>
            </Button>
            <Modal
              open={open}
            //   onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Button onClick={handleClose}>ok</Button>
            </Modal>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
