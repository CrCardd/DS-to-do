import express, { Request, Response, Router } from 'express';
import Person, { IUser } from '../model/Person';
import bcrypt from 'bcrypt'

const router: Router = express.Router();

router
.post('/auth', async (req: Request, res: Response) => {
    const { email, username, password } = req.body
    try{
        const person = new Person({email,username,password})
        person.save()
        res.status(200).send(`Pessoa recebida com sucesso!`);
    }
    catch(e)
    {
        res.status(200).send(`Erro ${e}`);
    }
})
.get(
    '/auth', 
    async (req: Request, res: Response) => {
        const { login, password } = req.body;
        try
        {
            const person = await Person.findOne({ $or: [{ email : login }, { username : login}]}).exec()
            if(!person){
                res.status(401).send("Usuário não encontrado.")
                return;
            }
            if(bcrypt.compareSync(password, person.password))
            {
                res.status(200).send("Usuário logado com sucesso");
                return;
            }
            res.status(401).send("Senha incorreta");
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
    }
)
.delete(
    '/user/:id', 
    async (req: Request, res: Response) => {
    }
);


export default router;