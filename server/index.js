const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./config/database");
const contactUsRoute = require("./routes/Contact");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;
dotenv.config();

database.connect();

app.use(express.json());
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

// Setting up routes
app.use("/api/v1", contactUsRoute);

// Testing the server
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running ...",
    });
});

// Listening to the server
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
});