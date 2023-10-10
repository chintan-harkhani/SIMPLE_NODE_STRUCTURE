const joi  =require("joi");

//create user
const CreateUser = {
    body :joi.object().keys({
        first_name :joi.string().trim().required(),
        last_name :joi.string().trim().required(),
        email :joi.string().email().trim().required(),
        moblie_no :joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required().messages({
            'number.min': 'Mobile number should be  digit.',
            'number.max': 'Mobile number should be 10 digit'
        }),
        password :joi.string()
        .min(8) // Minimum length of 8 characters
        .max(30) // Maximum length of 30 characters
        .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]+$'))
        .message({
            '.min': 'Mobile number should be  digit.',
            'strnig.max': 'Mobile number should be 10 digit'
        }),
        user_role  :joi.string().trim()
        .valid(
            'Russia',
          'United States of America',
          'Canada',
          'United Kingdom',
          'Brazil',
          'Australia',
          'India',
          'Argentina',
          'Algeria',
        ).required()
    })
};

 //send mail
 const SendMail = {
    body : joi.object({
       email :joi.string().required().trim().email(),
       subject : joi.string().required().trim(),
       text : joi.string().trim(),
    })
}

module.exports = {
     CreateUser,
     SendMail
}