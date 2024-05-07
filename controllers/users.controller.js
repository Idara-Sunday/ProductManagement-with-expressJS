const User = require("../models/user.model.js");

const signUp = async (req, res) => {
  try {
    const {email} = req.body;
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
    // const userEmail = user.email;
    // const userPassword = user.password;
    // THERE'S A BUG HERE SO TRY AND FIX IT
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

module.exports = { signUp, loginUser };
