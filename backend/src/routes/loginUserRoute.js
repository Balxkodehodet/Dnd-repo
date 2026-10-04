import express from 'express';
import loginUser from '../controllers/loginUserController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Define your login route
router.post('/login', authMiddleware, loginUser);

export default router;