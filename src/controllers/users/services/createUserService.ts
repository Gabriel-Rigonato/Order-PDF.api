import { Request, Response } from 'express';
import { PrismaClient, users } from '@prisma/client';
import { uuid } from 'uuidv4';

const prisma = new PrismaClient();

interface IRequest {
    email: string;
    password: string;
}

export default class createUserService {

    public async create ({email, password}: IRequest): Promise<users> {
        
        const userExists = await prisma.users.findFirst({
            where:{
                email: email
            }
        })

        if(userExists){
            throw new Error('This User Already exists.')
        }

        const user = await prisma.users.create({
            data:{
                uuid: uuid(),
                email: email,
                password: password,
                created_at: new Date,
            }
        })

        return user;
    }
}
