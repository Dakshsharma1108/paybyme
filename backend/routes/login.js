import express from 'express';
import User from '../db.js';
// login using email and password but first verify the user exists in the database
// using  username create jwt
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { jwtSecret } from '../jwt.js'; // Import the JWT secret from jwt.js
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        // Compare password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        // Create JWT token with email
        const token = jwt.sign({ email: user.email },jwtSecret, { expiresIn: '1h' });
        console.log('JWT Token:', token);
        res.status(200).json({ message: 'User logged in successfully', user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

export default router;


