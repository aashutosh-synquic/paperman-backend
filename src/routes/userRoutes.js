import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js'
import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
} from '../controllers/UserController.js';

const router = express.Router();

// Protecting all routes using middleware
router.use(authenticate)

// Create a new user
router.post('/', createUser);

// Get all users
router.get('/', getUsers);

// Get a single user by ID
router.get('/:id', getUserById);

// Update a user by ID
router.put('/:id', updateUser);

// Delete a user by ID
router.delete('/:id', deleteUser);

export default router;
