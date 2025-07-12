
import express from 'express';
import User from './db.js';
import CORS from 'cors';
import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';



const app = express();
app.use(express.json());
app.use(CORS());

app.use('/', signupRouter);
app.use('/', loginRouter);



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
