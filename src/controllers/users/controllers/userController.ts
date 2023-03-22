import { Request, Response } from "express";
import createUserService from "../services/createUserService";
import listUserService from "../services/listUserService";
import showUserService from "../services/showUserService";
import deleteUserService from "../services/deleteUserService";

export default class userController {
    static async create(req: Request, res: Response): Promise<Response> {

        const { email, password } = req.body;

        const createUser = new createUserService();

        const newUser = await createUser.create({email, 
            password});

         return res.json(newUser);
    } 

    static async index(req: Request, res: Response): Promise<Response> {

        const listUser = new listUserService();

        const users = await listUser.list();

        return res.json(users);
    }

    static async show(req: Request, res: Response): Promise<Response> {
        const { uuid } = req.params;

        const showUser = new showUserService();

        const user = await showUser.show({uuid});

        return res.json(user)
    }

    static async delete(req: Request, res: Response): Promise<Response> {
        
        const { uuid } = req.params;
        
        const deleteUser = new deleteUserService();

        const user = await deleteUser.delete({uuid});

        return res.json(`O usuário ${user} foi deletado.`)
    }
}