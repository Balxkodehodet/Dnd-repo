import express from 'express';
import logoutUser from '../controllers/logoutUserController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Define your logout route
router.get('/logout', authMiddleware, logoutUser);

export default router;