// require('dotenv').config()
// const jwt = require("jsonwebtoken")

// const generateJWT = ({payload})=>{
//     const token = jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: process.env.TOKEN_TIME})
//     return token
// }

// const verifyJWT = ({token})=>{
//     jwt.verify(token, process.env.TOKEN_SECRET)   
// }

// const attachToResponse = ({res, user}) =>{
//     const token = generateJWT({payload: user})

//     const expireTime = 86400000

//     res.cookie('token', token, {
//       httpOnly: true,
//       expires: new Date(Date.now() + expireTime)
//     })

    
// }

// module.exports = { generateJWT, verifyJWT, attachToResponse}
