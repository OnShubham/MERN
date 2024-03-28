const User = require("../Models/user-models");


const login = async (req, res) => {
  try {
    res.status(200).send("Welcome Server is Running");
  } catch (error) {
    console.log(error);
  }
};

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
      password
    });

    res.status(200).send({ msg: userCreated });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login, register };
