import AuthRoutes from './routers/Auth.router.js';
import userRoutes from './routers/User.router.js';
import MessageRoutes from './routers/Message.router.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import ConnectDb from './lib/DB.js';
import "dotenv/config";
const PORT = process.env.PORT || 5000;
import cors from 'cors';

const app = express();
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(cookieParser());

app.use(cookieParser());

// Configure CORS options if needed
app.use(cors({
  origin: 'https://chatapp-stream.onrender.com/', // Replace with your client's origin
  credentials: true,
}));
app.use('/api/auth', AuthRoutes);
app.use('/api/user', userRoutes);
app.use('/api/chat', MessageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  ConnectDb();  
});
