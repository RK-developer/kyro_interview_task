const mongoose = require("mongoose");
require('dotenv').config();

const mongodbUrl = process.env.DB_URL

const initializeMongoServer = async () => {
    try {
        await mongoose.connect(mongodbUrl,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB");
    } catch(e) {
        console.log(e);
        throw e;
    }
}

module.exports = initializeMongoServer;