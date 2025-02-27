import { Request, Response } from 'express';
import Task from '../model/User';
import User from '../model/User';

export default class TaskController {
    static async create(req : Request, res : Response) {
        const { name, age } = req.body
        try{
            const user = new User({name, age})
            await user.save()
            res.status(200).send({message : `Pessoa recebida com sucesso!`});
        }
        catch(e)
        {
            res.status(200).send(`Erro ${e}`);
        }
    }

    static async get(req : Request, res : Response) {
        try
        {
            const user = await User.find()
            res.status(200).json(user)
        }
        catch(e)
        {
            res.status(200).send(`Erro ${e}`);
        }
    }
    
    static async getById(req : Request, res : Response) {
        const { id } = req.params;
        try
        {
            const user = await User.findById(id)
            if(!user)
                res.status(400).json({message: "Usuário nao encontrado"})
            res.status(200).json(user)
        }
        catch(e)
        {
            res.status(200).send(`Erro ${e}`);
        }
    }

    static async updateById(req : Request, res : Response) {
        const { id } = req.params;
        const { name, age } = req.body;    
        try
        {
            const user = await User.findByIdAndUpdate(id, {name, age}, {new : true})
            if(!user)
                res.status(400).json({message: "Usuário nao encontrado"})
            res.status(200).json(user)
        }
        catch(e)
        {
            res.status(200).send(`Erro ${e}`);
        }
    }

    static async deleteById(req : Request, res : Response) {
        const { id } = req.params;
        try
        {
            const user = await User.findByIdAndDelete(id)
            if(!user)
                res.status(400).json({message: "Usuário nao encontrado"})
            res.status(200).send(`Deletado com sucesso`)
        }
        catch(e)
        {
            res.status(200).send(`Erro ${e}`);
        }

    }
}