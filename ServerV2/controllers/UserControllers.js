const User = require("../models/UserModel");
const generateToken = require("../utils/generateToken");
const createWeb3Account = require("../utils/createAccount");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  console.log(req.body);
  try {
    let user = await User.findOne({ email });

    console.log(user);

    if (user) {
      throw Error("This email is already exist");
    }

    if (password != confirmPassword) {
      throw Error("the password and the confirmation are not the same");
    }

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);

    let data = await User.create({ name, email, password: hashPassword });

    const token = generateToken({ id: data._id });

    await createWeb3Account(data._id);

    res.status(201).json({ data, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    let user = await User.findOne({ email });

    if (!user) {
      throw Error("This user doesn't exist");
    }

    // Compare passwords
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error("Invalid password");
    }

    // Populate user sessions
    user = await User.findById(user._id).select("-password");

    if (user.sessions.length) {
      user = await User.findById(user._id).populate("sessions");
    }

    // Generate token
    const token = generateToken({ id: user._id });

    // Send response
    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  const users = req.query.search
    ? {
        $or: [{ name: { $regex: req.query.search, $options: "i" } }],
      }
    : {};

  try {
    const data = await User.find(users);

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { signUp, login, getUsers };
