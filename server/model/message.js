const mongoose = require("mongoose");

const MassageSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone_number: String,
    message: String
}, { timestamps: true });

const MassageModel = mongoose.model("massage", MassageSchema);

module.exports = MassageModel;