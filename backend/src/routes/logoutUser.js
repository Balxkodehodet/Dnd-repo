import express from 'express';
import logoutUser from '../controllers/logoutUserController.js';
const router = express.Router();

// Define your logout route
router.get('/logout', logoutUser);

export default router;