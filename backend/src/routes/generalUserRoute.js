import express from 'express';
import  createUser  from '../controllers/createUserController.js';
import  editUser  from '../controllers/editUserController.js';
import deleteUser from '../controllers/deleteUserController.js';
import getUser from '../controllers/getUserController.js';
const router = express.Router();

// CRUD Create Read Update Delete
router.post('/users', createUser);
router.patch('/users/:id', editUser);
router.delete('/users/:id', deleteUser);
router.get('/users/:id', getUser);

export default router;