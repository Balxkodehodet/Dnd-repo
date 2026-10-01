import express from 'express';
import  createUser  from '../controllers/createUserController.js';
import  editUser  from '../controllers/editUserController.js';

const router = express.Router();

// CRUD Create Read Update Delete
router.post('/create-user', createUser);
router.put('/edit-user/:id', editUser)

export default router;