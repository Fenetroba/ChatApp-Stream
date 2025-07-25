import userRoutes from './routers/User.router.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import ConnectDb from './lib/DB.js';
import env from 'dotenv';
env.config();
const PORT = process.env.PORT || 5000;

 
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  ConnectDb();  
});