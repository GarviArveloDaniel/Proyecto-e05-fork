import express, { Request, Response } from 'express';
import { User } from '../models/userModel';

import { register, login } from '../controllers/userController';



export const userRouter = express.Router();

/**
 * @swagger
 */
// Route to log user
userRouter.get('/login', login);

/**
 * @swagger
 */
// Route to create a new user
userRouter.post('/register', register);

export default userRouter;