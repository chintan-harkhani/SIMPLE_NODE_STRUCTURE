const express = require("express");
const UserRouter  = require("./user.route");
const TokenRouter = require("./token.route");

const router = express.Router();

router.use("/user" , UserRouter);
router.use("/token" , TokenRouter);

module.exports = router;