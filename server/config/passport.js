const passport =require("passport")
const LocalStrategy= require('passport-local').Strategy
const connection=require("../db/conn")
const User =require("../model/user")