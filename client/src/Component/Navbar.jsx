import React  from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { Modal } from "@material-ui/core";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store/navbarState";
const useStyles = makeStyles({
  btn: {
    backgroundColor: "#FFB200",
    transition:"200ms",
    color: "black",
    "&:hover": {
      backgroundColor: "#FFF4CF",
      color: "#277BC0",
    },
  },
  link: {
    color: "black",
    "&:hover": {
      color: "#277BC0",
    },
  },
  outerBox:{
    position:"fixed",
    margin:"auto",
    left:0,right:0,top:0,bottom:0,
    backgroundColor:"#FFF4CF",
    height:"65vh",
    width:"38vw",
    boxShadow:"2px 0px 22px 2px rgba(74,68,74,1)",
    borderRadius:"0.3rem"
  }
  ,InnerTop:{
    display:"flex",
    marginTop:"1rem",
    marginInline:"1rem",
    backgroundColor:"#277BC0",
    borderRadius:"0.3rem",
  },
  authBtn:{
    color:"#FFF4CF",
    "&:hover": {
      backgroundColor: "#FFCB42",
      color:"black"
    },
  },
  authIco:{
    paddingInline:"0.4rem",color:"inherit"
  }
});
const Navbar = ({user}) => {
  const classes = useStyles();
  const dispatch=useDispatch();
  const open=useSelector((state)=>state.open);

  const handleOpen=()=>{
    dispatch(actions.handleOpen(true));
  }


  const isLogin=useSelector((state)=>state.isLogin);

  const LoginTrue=()=>{
    dispatch(actions.LoginTrue(true));
  }
  const LoginFalse=()=>{
    dispatch(actions.LoginFalse(false));
  }





  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
          backgroundColor: "#FFF4CF",
          position: "fixed",
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
            {/* <Button
              style={{ padding: "0", marginLeft: "1px", textTransform: "none" }}
              onClick={handleOpen}
            >
              {" "}
              <Typography
                className={classes.btn}
                style={{
                  borderRadius: "4px",
                  width: "130px",
                  padding: "0.4rem",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
              >
                Login/Register
              </Typography>
            </Button> */}
            {user?(<>
              <Button
              style={{ padding: "0", marginLeft: "1px", textTransform: "none" }}
              onClick={handleOpen}
            >
              {" "}
              <Typography
                className={classes.btn}
                style={{
                  borderRadius: "4px",
                  width: "130px",
                  padding: "0.4rem",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
              >
                Logout
              </Typography>
            </Button>
            
            </>):(<>
              <Button
              style={{ padding: "0", marginLeft: "1px", textTransform: "none" }}
              onClick={handleOpen}
            >
              {" "}
              <Typography
                className={classes.btn}
                style={{
                  borderRadius: "4px",
                  width: "130px",
                  padding: "0.4rem",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
              >
                Login/Register
              </Typography>
            </Button>
            </>)}
            <Modal
              open={open}
                // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div>
                <Box className={classes.outerBox}>
                  <Box className={classes.InnerTop}>
                    <Button className={classes.authBtn} onClick={LoginTrue}  style={{flex:"1",height:"2.5rem",margin:"0.3rem"}}>
                  <PersonRoundedIcon className={classes.authIco}  /> <Typography  style={{fontWeight:"bold",fontFamily: "Montserrat",}} >Login</Typography> 
                  </Button>
                    <Button className={classes.authBtn} onClick={LoginFalse}  style={{flex:"1",height:"2.5rem",margin:"0.3rem"}}>
                      
                  <PersonAddRoundedIcon className={classes.authIco}  /> <Typography  style={{fontWeight:"bold",fontFamily: "Montserrat",}} >Register</Typography> 
                  </Button>
                  
                  </Box>
                  {isLogin===true?<LoginModal/>:<RegisterModal/>}
                  {/* <RegisterModal/> */}
                </Box>
              </div>
            </Modal>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
