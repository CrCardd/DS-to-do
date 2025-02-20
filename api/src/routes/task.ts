import express, { Request, Response, Router } from 'express';
import Task from '../model/Task';


const router: Router = express.Router();

router
.post('/task', async (req: Request, res: Response) => {
    const { title, description, complete } = req.body
    try{
        const task = new Task({title, description, complete})
        await task.save()
        res.status(200).send({message : `Tarefa recebida com sucesso!`});
    }
    catch(e)
    {
        res.status(200).send(`Erro ${e}`);
    }
})
.get('/task', async (req: Request, res: Response) => {
    const { query, page, limit } = req.body
    try{
        const tasks = await Task.find()
        res.status(200).send({tasks : tasks, total : tasks.length});
    }
    catch(e)
    {
        res.status(200).send(`Erro ${e}`);
    }
})

export default router;