import express, { Request, Response, Router } from 'express';
import Person, { IUser } from '../model/User';
import bcrypt from 'bcrypt'

const router: Router = express.Router();

router
.post('/register', async (req: Request, res: Response) => {
    const { email, username, password } = req.body
    try{
        const person = new Person({email,username,password})
        person.save()
        res.status(200).send({message : 'Pessoa recebida com sucesso!'});
    }
    catch(e)
    {
        res.status(500).send({ message : `Erro ${e}`});
    }
})
.post(
    '/auth', 
    async (req: Request, res: Response) => {
        const { login, password } = req.body;
        try
        {
            const person = await Person.findOne( { $or: [{ email : login }, { username : login }]} ).exec()
            if(!person){
                console.log("Usuário não encontrado.")
                res.status(401).send({ message : "Usuário não encontrado"})
                return;
            }
            if(!bcrypt.compareSync(password, person.password))
            {
                console.log("Senha incorreta");
                res.status(401).send({ message : "Senha incorreta"});
                return;
            }
            console.log("Usuário logado com sucesso");
            res.status(200).send({ message : "Usuário logado com sucesso"});
        }
        catch(e)
        {
            res.status(500).send(`Erro ${e}`);
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