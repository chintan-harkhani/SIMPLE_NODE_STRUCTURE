const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            trim: true,
        },
        //  expire_time: {
        //     type: Date,
        //     default: null,
        // },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Token = mongoose.model("token" , TokenSchema);
module.exports = Token;