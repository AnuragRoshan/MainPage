import { Box, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import Typewriter from "typewriter-effect";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = () => {
  return (
    <Box style={{ marginBlock: "1rem", padding: "1rem" }}>
      <Box
        style={{
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <Typography
          style={{ fontFamily: "Montserrat", fontWeight: "bolder" }}
          variant="h4"
        >
          kjwhd wodjoqwd oiwjd wqidjqw dj
        </Typography>
      </Box>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        {/* <div className="App">
          <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
            onInit={(typewriter) => {
                typewriter
              .changeDelay(50)
              .changeDeleteSpeed(100)
                .typeString("Data Structures And Algorithms")

                .pauseFor(400)
                .deleteAll()
                .typeString("MongoDB")
                .start();
            }}
            
          />
        </div> */}

        <Box
          style={{
            width: "40%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextField
            // onChange={(e) => handleInputs(e)}
            variant="standard"
            label={"Search Here"}
            type={"text"}
            style={{
              width: "100%",
            }}
            name="name"
            defaultValue={""}
            autoComplete="off"
            InputProps={{
              shrink: true,
            }}
          ></TextField>

          <Button style={{ marginBottom: 15, height: "50px" }}>
            <SearchRoundedIcon
              fontSize="large"
              style={{
                color: "black",
              }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
