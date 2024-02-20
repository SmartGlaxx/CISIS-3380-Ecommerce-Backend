const express = require("express")
const router  = express.Router()
const {createUser, signInUser, signOutUser} = require("../controllers/authenticationController")

router.post("/create-user", createUser )
router.post("/sign-in", signInUser )
router.get("/sign-out", signOutUser )

module.exports = router

