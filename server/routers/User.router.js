import express from 'express';
import { Protect_router } from '../Middleware/Protect_Route';
import { RequestFriend } from '../controllers/User.controller';
const router = express.Router();

router.use(Protect_router);

router.get('/recommended-users',RecommendedUsers)
router.get('/friends-list',FriendsList)
router.post('/friends-request/:id',RequestFriend)
router.put('/friends-request/:id/accept',RequestFriend_accept)
router.get('/friends-request',FriendsRequest)


export default router;