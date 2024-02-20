const express = require("express")
const router  = express.Router()
const {getUsers, getAUser, getCurrentUser, updateUser} = require("../controllers/userController")

router.get("/get-users", getUsers )
router.get("/get-user", getCurrentUser )
router.patch("/update-user", updateUser )
// router.patch("/change-password", changePassword )
router.get("/get-user/:id", getAUser )


module.exports = router





