const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        user: { type: String, required: true,},
        id: { type: String, required: true, default: ""},
        name:{ type: String, required: true, default: ""},
        summary: { type: String, require: true,default: "" },
        date: {
            type: String,
            default: Date.now,
            require: true
        },
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("registered-event", UserSchema);
