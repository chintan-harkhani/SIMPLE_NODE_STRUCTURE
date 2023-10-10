const  {user} = require("../models");

//create user
const CreateUser = async (reqBody)=>{
       return user.create(reqBody)
};

//user list
const UserList  =async (req ,res) =>{
       return user.find()
};

// user id
const UserId = async ( userId)=>{
     return user.findById(userId)
};

//upadte user
const UpdateUser = async (userId , updateBody)=>{
    return user.findByIdAndUpdate(userId ,{ $set  : updateBody})
};

//delete user
const DeleteUser =async (userId) =>{
     return user.findByIdAndDelete (userId)
};

//find user
const FindEmail =async (email) =>{
      return user.findOne({email});
}
// const number =async (moblie_no) =>{
//     return user.findOne({moblie_no })
// }

//delete email
const deleteUserEmail = async (email) => {
    return user.findOneAndDelete({ email: email });
  };

//module export
module.exports ={
    CreateUser,
    UserList,
    UserId,
    DeleteUser,
    UpdateUser,
    FindEmail,
    deleteUserEmail,
    // number
}