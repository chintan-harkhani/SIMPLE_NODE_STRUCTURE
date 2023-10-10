const { UserController } = require("../../controllers");
const express = require("express");
const validate = require("../../middlewares/validate");
// const auth = require("../../middlewares/auth")
const { UserValidation } = require("../../validations");
const router = express.Router();

//create User
router.post("/createuser",
    validate(UserValidation.CreateUser),
    // auth(),
    UserController.CreateUser
);

//user list
router.get("/userlist",
    UserController.UserList
);

//user id
router.get("/userlist/:userId",
    UserController.UserId
);

//delete user
router.delete("/deleteuser/:userId",
    UserController.DeleteUser
);

//update user
router.put("/updateuser/:userId",
    UserController.UpdateUser
);

router.post("/send-mail",
 validate(UserValidation.SendMail),
 UserController.sendMail
)
module.exports = router;