const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy
const connection = require("../db/conn")
const validPassword  = require("../lib/passwordUtils").validPassword
const User = require("../model/user")

const verifyCallback = (username, password, done) => {
    User.findOne({ username: username })
    .then((user) => {
        if (!user) { return done(null, false) }

        const isValid = validPassword(password, user.hash, user.salt);
        if (isValid) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    })
    .catch((error) => {
        done(error);
    });
}

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser((userId,done)=>{
    User.findById(userId)
    .then((user)=>{
        done(null,user);
    })
    .catch(err=>done(err))
})

