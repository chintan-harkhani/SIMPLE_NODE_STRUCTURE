const mongoose = require("mongoose");
const config = require("../config/config");

const connectDB = async () =>{
    mongoose.connect(config.mongodb.url, config.mongodb.options).then((data)=>{
        console.log("DataBase SuccessFully Connected .....! ");

    }).catch((Error)=>{
         console.log("DataBase Connection Error !!....",Error);
    });
};
module.exports = {connectDB}