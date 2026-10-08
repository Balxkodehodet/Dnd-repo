import express from 'express';
import getCurrentUser from '../controllers/meController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Define your dashboard route
router.use(authMiddleware); // Apply authMiddleware to all routes in this router
router.get('/dashboard', getCurrentUser);

export default router;