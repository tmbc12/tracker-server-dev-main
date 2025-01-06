const express = require('express');
const cors = require('cors');
const connectDB = require("./connectDB");
const { registerUser, updateUser } = require("./controller.js");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Server is running</h1>");
});

app.post("/register", registerUser);
app.post("/update", updateUser);

module.exports = app;