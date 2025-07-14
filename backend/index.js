
import express from 'express';
import User from './db.js';
import CORS from 'cors';
import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';
import verifyRouter from './routes/verify.js'; // Import the verify router


const app = express();
app.use(express.json());
app.use(CORS());

app.use('/api' ,signupRouter);
app.use('/api', loginRouter);
app.use('/api', verifyRouter); // Use the verify router



app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
