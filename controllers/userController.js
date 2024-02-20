const { response } = require("express")
const User = require("../models/UserModel")

const getUsers = async(req, res)=>{
    const users = await User.find({role: "user"}).select('-password')
    res.status(200).json({response: "Success", users})
}

const getAUser = async(req, res)=>{
    const user = await User.findOne({_id: req.params.id}).select("-password")
    if(!user){
        return res.send(404).json({response: "Fail", message:"User not found"})
    }
    res.status(200).send({response: "Success", user})
}

const getCurrentUser = (req, res)=>{
    res.send("Current user")
}

const updateUser = async(req, res)=>{
    const {id, firstname, lastname, email} = req.body
    if(!firstname || !lastname || !email){
        return res.status(400).json({response: "Fail", message: "Plesae provide name and email"})
    }
    const user = await User.findOneAndUpdate({_id : id},{
        email, firstname, lastname
    }, {new : true, runValidators: true})
    if(!user){
        return res.status(404).json({response: "Fail", message: "User not found"})
    }else{
        return res.status(200).json({response: "Success", message: "User updated"})    
    }
    
}

// const changePassword = async(req, res)=>{
//     const {oldPassword, newPassword} = req.body
//     const userId = req.body.id
//     if(!oldPassword || !newPassword){
//        return res.status(400).json({response: "Fail", message:"Please provide both old and new password"})
//     }

//     const user = await User.findOne({_id: userId})
//     if(!user){
//         return res.status(404).json({response: "Fail", message: "User not found"})
//     }
//     const passwordsMatch = user.checkPassword(oldPassword)
//     if(!passwordsMatch){
//         return res.status(400).json({response: "Fail", messaeg:"Incorrect old password"})
//     }

//     const updatedUser = await user.save()

//       if(updatedUser){
//         res.status(200).json({response:"Success", message: "Password changed"})
//       }else{
//         return response.status(400).json({response: "Fail", messaeg:"Error changing password"})
//       }
// }

module.exports = {getUsers, getAUser, getCurrentUser, updateUser}