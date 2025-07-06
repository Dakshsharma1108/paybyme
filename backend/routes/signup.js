import express from 'express';
import User from '../db.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { email, password} = req.body;
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
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
