const express = require('express');
const router = express.Router();
const users = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ msg: 'User not found' });

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(401).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
