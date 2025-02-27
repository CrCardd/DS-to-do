import { Request, Response } from 'express';
import Task from '../model/Task';

export default class TaskController {
    static async create(req : Request, res : Response) {
        const { idUser, title, description, complete } = req.body
        try{
            const task = new Task({idUser, title, description, complete})
            await task.save()
            res.status(200).send({message : `Tarefa recebida com sucesso!`});
        }
        catch(e)
        {
            res.status(500).send(`Erro ${e}`);
        }
    }

    static async search(req : Request, res : Response) {
        const { query, page, limit } = req.params
        try{
            const tasks = await Task.find()
            res.status(200).send({tasks : tasks, total : tasks.length});
        }
        catch(e)
        {
            res.status(500).send(`Erro ${e}`);
        }
    }
    static async delete(req : Request, res : Response) {
        const id = req.params.id
        try
        {
            await Task.findByIdAndDelete(id);
            res.status(200).send({message : "tarefa deletada com sucesso!"})
        } catch(e)
        {
            res.status(500).send(`Erro ${e}`);
        }
    }
}