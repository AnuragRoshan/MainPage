const express = require("express");
const cors = require("cors");
const passport = require("passport");
const routes = require("./routes/index")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./model/user");
//----------------------------------------- END OF IMPORTS---------------------------------------------------

dotenv.config();


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);

//database connection
require("./db/conn.js");

//data base connection end

// Must first load the models
require('./model/user');


app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes

app.use(routes);


//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNIG ON PORT ${PORT}`);
});
