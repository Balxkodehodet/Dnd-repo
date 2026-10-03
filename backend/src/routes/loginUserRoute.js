import express from 'express';
import loginUser from '../controllers/loginUserController.js';
const router = express.Router();

// Define your login route
router.post('/login', loginUser);

export default router;