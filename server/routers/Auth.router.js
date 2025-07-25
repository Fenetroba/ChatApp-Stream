import express from 'express';
const router=express.Router();
import { CreateUser, LoginUser,LogOut } from '../controllers/User.controller.js';

router.post('/register', CreateUser);
router.post('/login', LoginUser);
router.post('/logout', LogOut);

export default router;
