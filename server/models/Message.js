const mongoose = require("mongoose");

const messgaeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
    },
});

module.exports = mongoose.model("Message", messgaeSchema);
