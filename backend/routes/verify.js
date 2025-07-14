import jwt from 'jsonwebtoken';
import { jwtSecret } from '../jwt.js'; // Import the JWT secret
import express from 'express';

const router = express.Router();
router.post('/verify' , (req , res)=>{
    try{
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(400).json({ error: 'Token is required' });
    }
    const decoded = jwt.verify(token, jwtSecret, );
    if (!decoded || !decoded.email || !decoded.id) {
        return res.status(400).json({ error: 'Invalid token structure' });
    }
    res.status(200).json({ message: 'Token verified successfully and matched with email', id:decoded.id  });
    }
    catch(e){
        res.status(400).json({ error: e.message });
    }
})

export default router;
// app.listen(3001, () => {
//     console.log('JWT verification server is running on port 3000');
// })