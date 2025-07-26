import express from 'express';
import { Protect_router } from '../Middleware/Protect_Route.js';
import { GetStreamToken } from '../controllers/Chat.controller.js';
const router = express.Router();

router.use(Protect_router);

router.get('/token', GetStreamToken);

export default router;