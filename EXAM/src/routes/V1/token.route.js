const {TokenController} =require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
const {TokenValidation} =require("../../validations");

const router = express.Router();

//create Token
router.post("/createtoken",
  validate(TokenValidation.CreateToken),
  TokenController.CreateToken
);

// VerifyToken
router.get("/verifytoken",
TokenController.VerifyToken
);

module.exports = router;