module.exports.isAuth = (req, res, next) => {

    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ msg: "You Are Not Authorized to view this resource" })
    }

}


module.exports.isAdmin = (req, res, next) => {

    if (req.isAuthenticated()&&req.user.admin) {
        next();
    } else {
        res.status(401).json({ msg: "Only Admins Can Access this port" })
    }

    console.log(req.user.admin);

}