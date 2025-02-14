import express, { Request, Response, Router } from 'express';
import * as mock from '../../mock';
import Person from '../model/Person';


const router: Router = express.Router();
const people: object[] = [];

//....
router
.post('/user', async (req: Request, res: Response) => {
    const { name, age } = req.body
    try{
        const person = new Person({name, age})
        await person.save()
        res.status(200).send(`Pessoa recebida com sucesso!`);
    }
    catch(e)
    {
        res.status(200).send(`Erro ${e}`);
    }
})
.get(
    '/user', 
    async (req: Request, res: Response) => {
        try
        {
            const person = await Person.find()
            res.status(200).json(person)
        }
        catch(e)
        {
            res.status(200).send(`Erro ${e}`);
        }

    }
)
.get(
    '/user/:id', 
    async (req: Request, res: Response) => {
        const { id } = req.params;
        try
        {
            const person = await Person.findById(id)
            if(!person)
                res.status(400).json({message: "Usuário nao encontrado"})
            res.status(200).json(person)
        }
        catch(e)
        {
            res.status(200).send(`Erro ${e}`);
        }

    }
)
.put(
    '/user/:id', 
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, age } = req.body;    
        try
        {
            const person = await Person.findByIdAndUpdate(id, {name, age}, {new : true})
            if(!person)
                res.status(400).json({message: "Usuário nao encontrado"})
            res.status(200).json(person)
        }
        catch(e)
        {
            res.status(200).send(`Erro ${e}`);
        }

    }
)
.delete(
    '/user/:id', 
    async (req: Request, res: Response) => {
        const { id } = req.params;
        try
        {
            const person = await Person.findByIdAndDelete(id)
            if(!person)
                res.status(400).json({message: "Usuário nao encontrado"})
            res.status(200).send(`Deletado com sucesso`)
        }
        catch(e)
        {
            res.status(200).send(`Erro ${e}`);
        }

    }
);


export default router;