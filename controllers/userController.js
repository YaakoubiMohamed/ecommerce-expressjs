const User = require("../models/user");
const bcrypt = require('bcrypt');

// Controller methods
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const userID = req.params.userID;
  try {
    const user = await User.findByPk(userID);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body)
  try {
    
    // Generate a salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user with the hashed password
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserById = async (req, res) => {
  const userID = req.params.userID;
  const { username, email, password } = req.body;
  try {
    const user = await User.findByPk(userID);
    if (user) {
      await user.update({ username, email, password });
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUserById = async (req, res) => {
  const userID = req.params.userID;
  try {
    const user = await User.findByPk(userID);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
