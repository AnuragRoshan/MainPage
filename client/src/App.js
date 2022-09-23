import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import './App.css';

function App() {
  const useStyles = makeStyles(() => ({


  }))
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Navbar />

        <Routes>



        </Routes>
        {/* <Footer className={classes.footer} user={user} /> */}


      </div>

    </BrowserRouter>
  );
}

export default App;
