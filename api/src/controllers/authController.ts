import { Request, Response } from 'express';
import bcrypt from 'bcrypt'

import User from "../model/User";

import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

dotenv.config();

export default class AuthController {
    static async register(req : Request, res : Response) {
        const { email, username, password } = req.body
        try{
            const user = new User({email,username,password})
            user.save()
            console.log("Usuário registrado.")
            res.status(200).send({message : 'Pessoa recebida com sucesso!'});
        }
        catch(e)
        {
            res.status(500).send({ message : `Erro ${e}`});
        }
    }

    static async auth(req : Request, res : Response) {
        const { login, password } = req.body;
        try
        {
            const user = await User.findOne( { $or: [{ email : login }, { username : login }]} ).exec()
            if(!user){
                console.log("Usuário não encontrado.")
                res.status(401).send({ message : "Usuário não encontrado"})
                return;
            }
            if(!bcrypt.compareSync(password, user.password))
                {
                    console.log("Senha incorreta");
                    res.status(401).send({ message : "Senha incorreta"});
                    return;
                }
                
            const secret = process.env.SECRET;
                const token = jwt.sign(
                    { id: user.id }, 
                    secret as string,
                    {expiresIn: '2 days',}
                );
                
            console.log("Usuário logado com sucesso");
            res.status(200).send({token : token});
        }
        catch(e)
        {
            console.log(e)
            res.status(500).send({message : `Erro ${e}`});
        }
    }
}