import express from 'express';
import  createUser  from '../controllers/createUserController.js';
import  editUser  from '../controllers/editUserController.js';
import deleteUser from '../controllers/deleteUserController.js';
import getUser from '../controllers/getUserController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// CRUD Create Read Update Delete
router.post('/users', createUser);
router.get('/users/:id', authMiddleware, getUser);
router.patch('/users/:id', authMiddleware, editUser);
router.delete('/users/:id', authMiddleware, deleteUser);

export default router;