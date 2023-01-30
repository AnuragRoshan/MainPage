// import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import './App.css';
import AddQuestion from "./Pages/AddQuestion";
// import Branch from "./Pages/Questions/Branch/Branch";
// import Topic from "./Pages/Questions/Topic/Topic";


function App() {
  // const useStyles = makeStyles(() => ({

  // }))
  // const classes = useStyles();
  return (
    <BrowserRouter >
      <Navbar />
      <div style={{ marginTop: "65px", paddingLeft: "0px" }}>

        <Routes>
          < Route exact path="/addQuestions" element={<AddQuestion />} />
          {/* <Route exact path="/questions/:branchParams/:subjectParams" element={<Topic />} /> */}

        </Routes>
        {/* <Footer className={classes.footer} user={user} /> */}


      </div>

    </BrowserRouter>
  );
}

export default App;
