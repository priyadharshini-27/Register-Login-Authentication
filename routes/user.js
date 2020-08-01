const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
//user model
const user = require("../models/User");
const User = require("../models/User");

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
  if (password != password2) {
    err.push({ msg: "Passwords do not match" });
  }

  //check password length
  if (password.length < 6) {
    err.push({ msg: "Password should have minimum six characters" });
  }

  if (err.length > 0) {
    res.render("register", {
      err,
      name,
      email,
      password,
      password2,
    });
  } else {
    //validation if the email already exists or not if not add to db
    user.findOne({ email: email }).then((data) => {
      if (data) {
        err.push({ msg: "Email Id already exists" });
        res.render("register", {
          err,
          name,
          email,
          password,
          password2,
        });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        //console.log(newUser)
        //res.send('hello');

        //bcrypt password
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            // Now we can store the password hash in db.
            if (err) throw err;
            //set password to hased
            newUser.password = hash;

            newUser.save()
            .then(user=>res.redirect('/user/login'))
            .catch(err=>console.log(err));
          });
        });
      }
    });
  }
});

module.exports = router;
