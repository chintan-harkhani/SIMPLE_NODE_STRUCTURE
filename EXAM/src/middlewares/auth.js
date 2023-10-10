const jwt = require("jsonwebtoken");
const {user} = require("../models");
const config = require("../config/config");

const auth = () => async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return next(res.status(401).json({
                success: false,
                message: "Plesase Authentication...."
            }));
        }
        const decoded = jwt.verify(
            token.replace("Bearer ", ""),
            config.jwt.secret_key
        )
        if (!decoded) {
            return next(new Error("Please Enter Valid Token !"));
        }
        const users = await user.findOne({ _id: decoded.user });
        if (!users) {
            return next(new Error("Please Authenticate ..."));
        }
        req.user = users;
        next();
    }catch(error){
        return next(new Error(error));
    }
}

module.exports = auth;