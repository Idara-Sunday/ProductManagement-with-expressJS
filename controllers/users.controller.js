const User = require("../models/user.model.js");

const signUp = async (req, res) => {
    try{
    const regUser = await User.create(req.body);
    res.status(201).json(regUser)
    } catch(error){
        res.status(500).json({message:error.message})
    }
};

const loginUser = async (req,res) => {
    try{
    const user = req.body;
    const userEmail = user.email;
    const userPassword = user.password;
    // THERE'S A BUG HERE SO TRY AND FIX IT 
    const checkUser = await User.findOne({email:userEmail, password:userPassword});
    if(!checkUser){
    res.status(404).json({message:"Invalid credentials"})
    }

    res.status(200).json(checkUser)
 
    } catch(error){
        res.status(500).json({message:error.message})
    }
};

module.exports = {signUp,loginUser}