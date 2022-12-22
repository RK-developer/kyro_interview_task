const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const initializeMongoServer = require("./src/db");
const router = require("./src/config/router");

initializeMongoServer();

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/",(req, res) => {
    res.send("Hello World")
});

app.use("/api/v1", router);

app.listen(port, () => {
    console.log(`The Application listen on the port ${port}`);
})
