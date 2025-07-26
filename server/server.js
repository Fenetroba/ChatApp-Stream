import AuthRoutes from './routers/Auth.router.js';
import userRoutes from './routers/User.router.js';
import ChatRoutes from './routers/Chat.router.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import ConnectDb from './lib/DB.js';
import "dotenv/config";
const PORT = process.env.PORT || 5000;

 
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', AuthRoutes);
app.use('/api/user', userRoutes);
app.use('/api/chat', ChatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  ConnectDb();  
});