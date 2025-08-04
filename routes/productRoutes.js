const express = require('express');
const router = express.Router();
let products = require('../models/products');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');
const { v4: uuidv4 } = require('uuid');

router.get('/', verifyToken, (req, res) => {
  const { role, email } = req.user;
  let filtered;

  if (role === 'admin') {
    filtered = products;
  } else if (role === 'seller') {
    filtered = products.filter(p => p.createdBy === email);
  } else {
    filtered = products.filter(p => p.isPublic === true);
  }

  res.json(filtered);
});

router.post('/', verifyToken, authorizeRoles('admin', 'seller'), (req, res) => {
  const { name, price, isPublic } = req.body;
  const newProduct = {
    id: uuidv4(),
    name,
    price,
    isPublic,
    createdBy: req.user.email
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
