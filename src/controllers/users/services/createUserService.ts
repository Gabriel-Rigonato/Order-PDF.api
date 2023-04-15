import { Request, Response } from 'express';
import { PrismaClient, users } from '@prisma/client';
import { uuid } from 'uuidv4';
import { hash, hashSync } from 'bcrypt';

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

        const hashedPassword = await hashSync(password, 10);

        const user = await prisma.users.create({
            data:{
                //uuidv4
                uuid: uuid(),
                email: email,
                password: hashedPassword,
                created_at: new Date,
            }
        })

        return user;
    }
}
