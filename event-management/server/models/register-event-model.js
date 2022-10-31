const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        user: { type: String, required: true,},
        id: { type: String, required: true, default: ""},
        name:{ type: String, required: true, default: ""}
    },
    { timestamps: true }
);

module.exports = mongoose.model("registered-event", UserSchema);
