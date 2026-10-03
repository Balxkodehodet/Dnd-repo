import express from 'express';
import  createUser  from '../controllers/createUserController.js';
import  editUser  from '../controllers/editUserController.js';
import deleteUser from '../controllers/deleteUserController.js';
import getUser from '../controllers/getUserController.js';
const router = express.Router();

// CRUD Create Read Update Delete
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.patch('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

export default router;