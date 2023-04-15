import { Request, Response } from "express";
import AuthService from "../services/auth-login.service";
import AppError from "../../../errors/AppError";

export default class AuthController {
    static async login(req: Request, res: Response): Promise<Response> {
      try{  
        
        const { email, password } = req.body;

        const loginService = new AuthService();

        const login = await loginService.login({email, password});

       return res.json(`Authorized login ${login.email}`);
       
      } catch (error){
         throw new AppError('Login error.')
      }
      
    }
}