const dotenv = require("dotenv");
const joi = require("joi");
dotenv.config({ path: './.env' });

const EnvVarsSchema = joi.object({
    PORT: joi.number().default(3080),
    MONOGODB_URL: joi.string().trim().description("mongodb url"),
    JWT_SECRET_KEY: joi.string().description("JWT Secret Key....").default("This is a JWT secrete_key"),
    BASE_URL: joi.string().trim().description("Base URL"),
    SMTP_HOST: joi.string().description("Server that will send the emails"),
    SMTP_PORT: joi.number().description("port to connect to the email server"),
    SMTP_USERNAME: joi.string().description("username for email server"),
    SMTP_PASSWORD: joi.string().description("password for email server"),
    EMAIL_FORM : joi.string().description("the from field in the emails sent by the app"),
}).unknown();

const { value: EnvVars, Error } = EnvVarsSchema.prefs({
    errors: { label: "key" }
}).validate(process.env);

if (Error) {
    console.log("Config File Error :- ", Error);
}

module.exports = {
    port: EnvVars.PORT,
    mongodb: {
        url: EnvVars.MONOGODB_URL,
        options: {
            useNewUrlParser: true,
            useunifiedTopology: true,
        },
    },
    jwt: {
        secret_key: EnvVars.JWT_SECRET_KEY,
    },
    email:{
         smtp :{
            host :EnvVars.SMTP_HOST,
            port : EnvVars.SMTP_PORT,
               auth :{
                   user : EnvVars.SMTP_USERNAME,
                   password : EnvVars.SMTP_PASSWORD
               }
         },
         form : EnvVars.EMAIL_FORM,
    }
};