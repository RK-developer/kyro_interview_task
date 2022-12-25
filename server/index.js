const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const initializeMongoServer = require("./src/db");
const router = require("./src/config/router");
const path= require("path");

initializeMongoServer();

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));

app.get("/",(req, res) => {
    res.send("Hello")
});

app.use("/api/v1", router);
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
app.listen(port, () => {
    console.log(`The Application listen on the port ${port}`);
});

module.exports = app;
