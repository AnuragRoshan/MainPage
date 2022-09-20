const express = require("express")
const dotenv = require("dotenv")
const session = require("express-session");
const MongoStore = require('connect-mongo');
const routes = require("./routes/routes")
const Connection = require("./db/conn");
const passport = require("passport");



//Give Access to .env file via 'process.env.VARIABLE_NAME'
dotenv.config();

// create express application 
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 5000;


//data base connection
const DB_URL = process.env.DB_URL

Connection(DB_URL);

//data base connection end




/// Storing Cookie For Session  ///

//session store in mongoDB
let store = MongoStore.create({
    mongoUrl: DB_URL,
    collectionName: "sessions"
});

//session Config
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

/// Storing Cookie For Session End  ///

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