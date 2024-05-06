const User = require("../models/user.model.js");

const signUp = async (req, res) => {
    try{
    const regUser = await User.create(req.body);
    res.status(201).json(regUser)
    } catch(error){
        res.status(500).json({message:error.message})
    }
}


module.exports = {signUp}