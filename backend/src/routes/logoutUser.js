import express from 'express';
import logoutUser from '../controllers/logoutUserController.js';
import authMiddleware from '../middleware/auth.js';
import authorization from '../middleware/authorization.js';

const router = express.Router();

// Define your logout route
router.post('/logout', authMiddleware, logoutUser);

export default router;