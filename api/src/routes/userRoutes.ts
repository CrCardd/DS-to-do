import express, { Router } from 'express';
import UserController from '../controllers/userController';

const router: Router = express.Router();

router
    .post('/', UserController.create)
    .get('/', UserController.get)
    .get('/:id', UserController.getById)
    .put('/:id', UserController.updateById)
    .delete('/:id', UserController.deleteById);

export default router;

