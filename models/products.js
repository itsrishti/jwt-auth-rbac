const { v4: uuidv4 } = require('uuid');

let products = [
  {
    id: uuidv4(),
    name: 'Public Product',
    price: 100,
    isPublic: true,
    createdBy: 'seller@example.com'
  },
  {
    id: uuidv4(),
    name: 'Private Product',
    price: 200,
    isPublic: false,
    createdBy: 'seller@example.com'
  }
];

module.exports = products;
