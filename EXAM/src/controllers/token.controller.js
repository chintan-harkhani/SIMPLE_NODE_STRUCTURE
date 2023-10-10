const {TokenService} =require("../services");

//create token
const CreateToken = async (req, res) => {
    try {
        const reqBody = req.body;
        // reqBody.expire_time = moment().add(10, "minutes");
        const token = await TokenService.CreateToken(reqBody);
        reqBody.token = token;
        //save token
        const SaveToken = await TokenService.SaveToken(reqBody);
        res.status(200).json({
            success: true,
            message: "Token SuccessFully Created....!",
            data: SaveToken,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Something Went Wrong....!",
        });
    };
};

//verify token
const VerifyToken = async (req ,res)=>{
    res.status(200).json({
     success :true,
     message : "Token SuccessFully Verified!",
     data :req.user,
    });
};

//export
module.exports = {
    CreateToken,
    VerifyToken
}
