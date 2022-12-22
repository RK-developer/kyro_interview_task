const jwt = require("jsonwebtoken");

const authCheck = (req, res, next) => {
    const token = req.header("token");
    if(!token) 
        return res.status(401).json({
            message: "Auth Failed"
        })
    try {
        const decoded = jwt.verify(token, "randomString");
        req.user = decoded.user;
        next();
    }
    catch(err) {
        console.log(err);
        res.status(500).send({
            message: "Invalid Token"
        });
    }
}

module.exports = authCheck;