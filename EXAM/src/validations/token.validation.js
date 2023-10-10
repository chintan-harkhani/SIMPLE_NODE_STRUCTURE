const joi = require("joi");

//create token
const CreateToken = {
    body:joi.object({
        user : joi.string().trim().required(),
    }),
};

//module export
module.exports = {
    CreateToken
}