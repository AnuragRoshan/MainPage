const express = require("express")
const dotenv = require("dotenv")
const session = require("express-session");
const MongoStore = require('connect-mongo');
const routes = require("./routes/index")
const passport = require("passport");
const cors=require("cors")


// ************Genreal Setup**************

//Give Access to .env file via 'process.env.VARIABLE_NAME'
dotenv.config();

// create express application 
const app = express();



// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const port = process.env.PORT || 5000;

// Allows our  application to make HTTP requests to Express application
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
    );


//data base connection
require("./db/conn");

//data base connection end

// Must first load the models
require('./model/user');



// / Storing Cookie For Session  ///

// session store in mongoDB

const DB_URL = process.env.DB_URL
let store = MongoStore.create({
    mongoUrl: DB_URL,
    collectionName: "sessions"
});

// session Config
const secret = process.env.SESSION_SECRET
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24  //equals 1 day
    }

}))

// / Storing Cookie For Session End  ///

///todo
// ***-------- PASSPORT AUTHENTICATION ---------***///
require('./config/passport') 

app.use(passport.initialize());

app.use(passport.session());

app.use((req,res,next)=>{
    console.log(req.session);
    console.log(req.user);
    next();  
})

// Imports all of the routes from ./routes/routes.js
app.use(routes);


//---------------SERVER---------------///

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`);
});