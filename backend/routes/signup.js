import express from 'express';
import User from '../db.js';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid'; // For generating unique user IDs

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      id: 'user-' + uuidv4(), // More robust than global variable
      email,
      password: hashedPassword,
      username: "", // Empty at signup; filled later in dashboard
      balance: 5000 // Default balance can be set here
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

