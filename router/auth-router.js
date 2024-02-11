const express = require("express");
const router= express.Router()
const {home,register,login,getUser} = require("../controllers/auth-controller")
const signupSchema = require("../validators/auth-validator")
const validate = require("../middlewares/validate-middleware")
const authMiddleware = require("../middlewares/auth-middleware")

router.route("/").get(home)
router.route("/register").post(validate(signupSchema),register)
router.route("/login").post(login)
router.route("/user").get(authMiddleware,getUser);

// router.get("/",(req,res)=>{
//     res.status(200).send("Welcome")
// })
module.exports = router;