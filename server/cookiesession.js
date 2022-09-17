// const express = require("express")
// const dotenv = require("dotenv")

// const Connection = require("./db/conn")

// const session = require("express-session");

// const MongoStore = require('connect-mongo');

// const app = express();

// dotenv.config();

// const port = process.env.PORT || 5000;

// //data base connection
// const DB_URL = process.env.DB_URL

// Connection(DB_URL);

// //data base connection end

// /// Storing Cookie For Session  ///

// //session store in mongoDB
// let store = MongoStore.create({
//     mongoUrl: DB_URL,
//     collectionName: "sessions2"
// });

// //session Config
// const secret = process.env.SESSION_SECRET
// app.use(session({
//     secret: secret,
//     resave: false,
//     saveUninitialized: true,
//     store: store,
//     cookie: {
//         maxAge: 1000*60*60*24  //equals 1 day
//     }

// }))

// /// Storing Cookie For Session End  ///


// app.get("/", (req, res, next) => {
//     console.log(req.session);
//     if(req.session.viewCount){
//         req.session.viewCount++;
//     }
//     else req.session.viewCount=1;
//     res.send(`<h1>Hello Guys ViewCount = ${req.session.viewCount}</h1>`)
// })


// app.listen(port, () => {
//     console.log(`Server is Running on Port ${port}`);
// });