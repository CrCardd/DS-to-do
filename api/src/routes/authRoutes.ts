import express, { Request, Response, Router } from 'express';
import Person, { IUser } from '../model/User';
import AuthController from '../controllers/authController';
import bcrypt from 'bcrypt'

const router: Router = express.Router();

router
    .post('/register', AuthController.register)
    .post('/', AuthController.auth)


export default router;