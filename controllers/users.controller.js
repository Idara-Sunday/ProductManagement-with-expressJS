const User = require("../models/user.model.js");
const {body,validationResult,matchedData,checkSchema} = require("express-validator");
const {createUserValidationSchema} = require('../utils/validationSchemas.js');

const signUp = async (req, res) => {
  try {
    
    const {email} = req.body;
    const result = validationResult(req.body)
    console.log(result)
    const checkEmail = await User.findOne({ email: email });
    if (checkEmail) {
      return res
        .status(400)
        .json({ message: "User with this email already exist" });
    }
    const regUser = await User.create(req.body);
    res.status(201).json(regUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};

const loginUser = async (req, res) => {
  try { 
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email: email });
    if (!checkUser) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (checkUser.password !== password) {
      return res.status(400).json({ message: "Invalid password" }); 
    }

    res.status(200).json(checkUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchForUsers = async (req,res) => {
  // console.log(req.query);
  const {query:{filter,value},} = req;
  const allUsers = await User.find({}) 
  // when filter and value are undefined

  // if(!filter && !value) return res.json(allUsers);
  if(filter && value) return res.send(allUsers.filter((user) => user[filter].includes(value)));
  return res.send(allUsers)
};

module.exports = { signUp, loginUser,searchForUsers };
