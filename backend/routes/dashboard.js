import express from 'express';
import User from '../db.js'; // Import the User model
import { verifyToken } from './verifytoken.js'; 
import mongoose from 'mongoose';

const router = express.Router();
router.post('/verify' ,verifyToken,(req , res)=>{
    (async () => {
        try {
            const userId = req.userId; // Get userId from the verified token (now treated as username)
            if (!userId) {
                return res.status(400).json({ error: 'Username not found in token' });
            }
            const user = await User.findOne({ id: userId });
            if (!user) {
                return res.status(404).json({ msg: 'User not found' });
            }
            if(!user.username){
                return res.status(200).json({ msg: 'Username is not set', id: userId });
            }
            res.json({ id: user._id });
        } catch (e) {
            res.status(500).json({ error: 'Database error', details: e.message });
        }
    })();
})

router.post('/set-username', verifyToken, async (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }
    try {
        const userId = req.userId; // Get userId from the verified token
        if (!userId) {
            return res.status(400).json({ error: 'User ID not found in token' });
        }
        // check if username already exists
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        const user = await User.findOneAndUpdate(
            { id: userId },
            { username: username },
            { new: true } // Return the updated document
        );
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ msg: 'Username set successfully', id: user._id });
    } catch (e) {
        res.status(500).json({ error: 'Database error', details: e.message });
    }
});

router.post('/details', verifyToken, async (req, res) => {
    try {
        const userId = req.userId; // Get userId from the verified token
        if (!userId) {
            return res.status(400).json({ error: 'User ID not found in token' });
        }
        const user = await User.findOne({ id: userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            balance: user.balance
        });
    } catch (e) {
        res.status(500).json({ error: 'Database error', details: e.message });
    }
});



export default router;


