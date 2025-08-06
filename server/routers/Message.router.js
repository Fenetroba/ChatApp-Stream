import express from 'express';
import { Protect_router } from '../Middleware/Protect_Route.js';
import { GetMessage,GetStreamToken, SendMessage } from '../controllers/message.controller.js';
const router = express.Router();

router.use(Protect_router);
router.get('/token', GetStreamToken);
router.get('/:id',GetMessage)
router.post('/send/:id',SendMessage)

export default router;