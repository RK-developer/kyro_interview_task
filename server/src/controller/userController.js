
const { validationResult} = require("express-validator");
const UserModel = require('../model/userModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {firstName, lastName, email, password} = req.body;

    try {
        let user = await UserModel.findOne({
            email
        });
        if(user) {
            return res.status(400).json({
                errors:[{
                    msg: "Email have already taken, please use different one."
                }]
            })
        }
        const displayName = `${firstName} ${lastName}`;

        user = new UserModel ({
            firstName,
            lastName,
            displayName,
            email,
            password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            "randomString", {
                expiresIn: 10000
            },
            (err, token) => {
                if(err) throw err;
                res.status(200).json({
                    token
                })
            }
        )
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send("Error in User Creation")
    }
}

const userSignIn = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const {email, password} = req.body;
    function emailOrPwdErrorMessage() {
        return res.status(400).json({
            message: "Email or password not correct"
        })
    }

    try {
        let user = await UserModel.findOne({
            email
        });
        if(!user) {
            return emailOrPwdErrorMessage();
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch) {
            return emailOrPwdErrorMessage();
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            "randomString",
            {
                expiresIn: 3600
            },
            (err, token) => {
                if(err) throw err;
                res.status(200).json({
                    token
                });
            }
        )

    }
    catch(err) {
        console.log(err);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const authVerifyController = async (req, res) => {
    if(!req.user)
        return res.status(400).json({
            isAuthCheck: false,
            message: "Not Authorized, Please login"
        })
    return res.status(200).json({
        isAuthCheck: true,
        message: "Authentication verified"
    })
}

module.exports = {
    userSignUp,
    userSignIn,
    authVerifyController
};