const router = require('express').Router();
const passport = require('passport')
const passwordUtils = require('../lib/passwordUtils')
const connection = require('../db/conn')
const user = require('../model/user')



///POST ROUTES///
// TODO
router.post('/login', (req, res, next) => { });

// TODO
router.post('/register', (req, res, next) => { });


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

    // const form = '<h1>Register Page</h1><form method="post" action="register">\
    //                 Enter Username:<br><input type="text" name="username">\
    //                 <br>Enter Password:<br><input type="password" name="password">\
    //                 <br><br><input type="submit" value="Submit"></form>';

    res.send("ok");

});


module.exports = router;