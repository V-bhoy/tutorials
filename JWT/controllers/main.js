const jwt = require('jsonwebtoken');
const {User} = require('../db');

const SECRET_KEY = "jwttest";

const loginUser = async(req,res)=>{
    const {username, password} = req.body;
    if(!username || !password){
        res.status(400).json({message: "Please provide required information"});
    }
    try{
          const user = new User({...req.body});
          user.save();
          const id = user._id;
          const token = jwt.sign({id, username}, SECRET_KEY, {expiresIn:'2h'});
          console.log(token);
          res.status(201).json({message:"User is created", token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"})
    }
}



const greetUser = async(req,res)=>{
    try{
        res.status(200).json({message:`Hello ${req.user.username}`});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Something went wrong!"})
    }
}


module.exports = {loginUser,greetUser};