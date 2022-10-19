    const router = require('express').Router();
const passport = require('passport')
const genPassword = require('../lib/passwordUtils').genPassword
const connection = require('../db/conn')
const User = require('../model/user');
const { isAuth, isAdmin } = require('./authMiddleware');
var validator = require("email-validator");


///POST ROUTES///
// TODO
router.post('/login', passport.authenticate('local', { failureRedirect: "/login-failure", successRedirect: '/login-success' }));


// TODO
router.post('/register', async (req, res, next) => {
    try {
        const saltHash = genPassword(req.body.password);
        const name = req.body.username;
        const salt = saltHash.salt;
        const hash = saltHash.hash;
        const email = req.body.email
        // const User=require("../model/user")

        // is email is Valid or not
        const emailCheck = validator.validate(email);

        if (emailCheck == false) {
            return res.status(202).json({ msg: "Invalid Email Id" })
        }



        // check for duplicate email

        user = await User.findOne({ email: email });

        if (user) {
            
            // if duplicate email found 

            res.status(202).json({ msg: "User With Same Email Already Exist" })

        }
        //if duplicate email id not found create new user
        else {
            const newUser = new User({
                name: name,
                email: email,
                hash: hash,
                salt: salt,
                admin: true
            })

            newUser.save()
                .then((newUser) => {
                    console.log(newUser);
                })

            // res.redirect('http://localhost:3000/');

            return res.status(200).json({ msg: "Registered Succesfully" })
        }
    } catch (error) {
        res.status(500).json({ msg: "Error while Registering" })
    }

});


///GET ROUTES
router.get('/', (req, res, next) => {
    res.send('<h1>Home</h1><p>Please <a href="/register">register</a></p>');
});

// When you visit http://localhost:X000/login, you will see "Login Page"
router.get('/login', (req, res, next) => {

    const form = '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);

});

// When you visit http://localhost:X000/register, you will see "Register Page"
router.get('/register', (req, res, next) => {

    const form = '<h1>Register Page</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter email:<br><input type="text" name="email">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);

});




/**
 * Lookup how to authenticate users on routes with Local Strategy
 * Google Search: "How to use Express Passport Local Strategy"
 * 
 * Also, look up what behaviour express session has without a maxage set
 */
router.get('/protected-route', isAuth, (req, res, next) => {
    res.send("You did it")
});
router.get('/admin-route', isAdmin, (req, res, next) => {
    res.send("You did it Mr Admin")

});

// Visiting this route logs the user out
router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });

});

router.get('/login-success', (req, res, next) => {
    // const name = req.user.username;
    // console.log(name);
    // res.send(`<p>Hey ${name} you are successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>`);
    
    return res.status(200).json({ msg: " Logged In SuccesFully" })
});

router.get('/login-failure', (req, res, next) => {
    
    return res.status(202).json({ msg: "Failed To Login" })
});



module.exports = router;