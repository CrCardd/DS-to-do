import express, { Router } from 'express';
import TaskController from '../controllers/taskController';


const router: Router = express.Router();

router
    .post('/', TaskController.create)
    .get('/', TaskController.search)
    .delete('/:id', TaskController.delete)

export default router;