import express from 'express';
import { getCars, getUserData, loginUser, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/cars', getCars);
userRouter.get('/data', protect, getUserData); // You might want this route too

export default userRouter;