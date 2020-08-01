const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mogoose');
const bcrypt = require('bcryptjs'); //decrypt the password that has been hased

//users model
const user=require('../models/User')