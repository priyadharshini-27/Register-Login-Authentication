const express = require("express");
const router = express.Router();

//login page
router.get('/login',(req,res)=>res.send("Login Page"))

//register page
router.get('/register',(req,res)=>res.send("Rsgister Page"))

module.exports = router;