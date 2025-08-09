const express = require('express');
const router = express.Router();

// Dummy data (in-memory array)
let users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Zara' }
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
});

// POST a new user
router.post('/', (req, res) => {
  const { name } = req.body;
  const newUser = {
    id: users.length + 1,
    name: name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE a user
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;
