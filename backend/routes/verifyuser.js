// middleawre to verify user
import express from 'express';
import User from '../db.js';

const router = express.Router();
router.post('/verifyuser', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'User verified successfully', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;