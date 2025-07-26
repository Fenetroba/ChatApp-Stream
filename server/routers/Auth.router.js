import express from 'express';
const router=express.Router();
import { CreateUser, LoginUser,LogOut, Onboarding } from '../controllers/Auth.controller.js';
import { Protect_router } from '../Middleware/Protect_Route.js';

router.post('/register', CreateUser);
router.post('/login', LoginUser);
router.post('/logout', LogOut);
router.post('/Onboarding', Protect_router, Onboarding);
router.get('/me', Protect_router, (req, res) => {
  return res.status(200).json({ success: true, user: req.UserOne });
});

export default router;
