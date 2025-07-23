
import express from 'express';
import User from './db.js';
import CORS from 'cors';
import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';
import dashboardRouter from './routes/dashboard.js'; // Import the dashboard 



const app = express();
app.use(express.json());
app.use(CORS());

app.use('/api' ,signupRouter);
app.use('/api', loginRouter);
app.use('/api', dashboardRouter); // Use the verify router
// app.use('/api', dashboardRouter); // Use the dashboard router





app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
