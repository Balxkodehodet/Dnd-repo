import express from 'express';
import getCurrentUser from '../controllers/meController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Define your dashboard route
router.get('/dashboard', authMiddleware, getCurrentUser);

export default router;