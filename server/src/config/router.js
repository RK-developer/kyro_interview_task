const express = require("express");
const router = express.Router();
const { check} = require("express-validator");
const authCheck = require("../middleware/auth");
const {userSignUp, userSignIn} = require("../controller/userController");
const {getProfileByUserId, updateProfileByUserId} = require("../controller/profileController");

/**
 * User Router
 */

router.post("/user/signup",[
    check("firstName", "Please Enter a Valid Firstname")
    .not()
    .isEmpty(),
    check("lastName", "Please Enter a Valid Lastname")
    .not()
    .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please should contain min 6 charactrers").isLength({
        min: 6
    })
],userSignUp);

router.post("/user/signin",[
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please should contain min 6 charactrers").isLength({
        min: 6
    })
],userSignIn);

router.get('/user/profile',authCheck,getProfileByUserId);

router.put('/user/profile',[
    check("firstName", "Please enter a valid First Name").not().isEmpty(),
    check("lastName", "Please enter a valid Last name").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("displayName","Please enter a valid Display Name").not().isEmpty()
],authCheck,updateProfileByUserId);

module.exports = router;