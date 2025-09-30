const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Define your User schema
const { generateToken } = require('../config/jwt');

// Register route example
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPass });
  await newUser.save();
  res.json({ message: 'User registered' });
});

// Login route example
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'User not found' });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

  const token = generateToken(user);
  res.json({ token });
});

module.exports = router;
