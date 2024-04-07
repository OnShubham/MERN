const User = require("../Models/user-models");
const bcrypt = require("bcryptjs");
// Register
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExists = await User.findOne({ email });

    // Chek email
    if (userExists) {
      return res.status(400).json({ msg: "email already exists" });
    }

    // phone number

    // hash the pass  Secuare the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    // Done Register Acoount
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).send({
      msg: "Register Succes",
      token: await userCreated.generateToken(),
      userID: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

// Login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    // console.log(userExists);

    if (!userExists) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const user = await bcrypt.compare(password, userExists.password);

    if (user) {
      res.status(200).send({
        msg: "Login Succes",
        token: await userExists.generateToken(),
        userID: userExists._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or pass" });
    }
  } catch (error) {
    console.log(error);
  }
};

// User

const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ msg: userData });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};

module.exports = { login, register, user };
