const express = require("express");
const router = express.Router();

//Login Page
router.get("/login", (req, res) => res.render("login"));

//Register Page
router.get("/register", (req, res) => res.render("register"));

//register handler
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  //console.log(name)
  //console.log(req.body)
  //res.send('hello!')
  let err = [];

  //check required fields
  if (!name || !email || !password || !password2) {
    err.push({ msg: "Please fill the details" });
  }

  //check password match
  if (password1 != password2) {
    err.push({ msg: "Passwords do not match" });
  }

  //check password length
  if(password.length<6){
    err.push({msg:'Password should have minimum six characters'})
  }

  if(err.length>0){
      res.render('register',{
          errors
      })
  }
});

module.exports = router;
