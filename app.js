const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

app.use(express.json());

app.use('/login', authRoutes);
app.use('/products', productRoutes);

module.exports = app;
