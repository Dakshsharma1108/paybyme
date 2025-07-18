import jwt from 'jsonwebtoken';
import { jwtSecret } from '../jwt.js';

export function verifyToken(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(400).json({ error: 'Token missing' });

        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.id;
        next();
    } catch {
        return res.status(401).json({ error: 'Invalid token' });
    }
}