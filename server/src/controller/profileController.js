const { validationResult} = require("express-validator");
const UserModel = require('../model/userModel');
const ObjectId = require("mongoose").Types.ObjectId;

const getProfileByUserId = async (req, res) => {
    if(!req.user)
        return res.status(400).json({
            message: "Auth error"
        })
    
    try {
        let userProfile = await UserModel.findById(ObjectId(req.user));
        if(!userProfile)
            return res.status(400).json({
                message: "Profile not fetch"
            })
        const {firstName, lastName, displayName, email, phoneNumber,alternatePhoneNumber, location} = userProfile;
        res.status(200).json({
            firstName,
            lastName,
            displayName,
            email,
            phoneNumber,
            alternatePhoneNumber,
            location
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

const updateProfileByUserId = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    
    if(!req.user)
        return res.status(400).json({
            message: "Auth error"
        });
    try {
        const {firstName, lastName, displayName, email, phoneNumber,alternatePhoneNumber, location} = req.body;
        let userProfile = await UserModel.findByIdAndUpdate(
            ObjectId(req.user),
            {
                firstName,
                lastName,
                displayName,
                phoneNumber,
                alternatePhoneNumber,
                location
            },
            {
                new:true
            }
        );
        if(!userProfile || userProfile?.length <=0)
            return res.status(400).json({
                message: "Profile not fetch"
            })
        res.status(200).json({
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            displayName: userProfile.displayName,
            email: userProfile.email,
            phoneNumber: userProfile.phoneNumber,
            alternatePhoneNumber: userProfile.alternatePhoneNumber,
            location: userProfile.location
        })
    }
    catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

module.exports = {
    getProfileByUserId,
    updateProfileByUserId
}