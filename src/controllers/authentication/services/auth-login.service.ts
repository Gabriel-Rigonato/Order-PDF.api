import { PrismaClient, users } from '@prisma/client';
import { uuid } from 'uuidv4';
import'bcrypt';
import AppError from '../../../errors/AppError';
import { compareSync } from 'bcrypt';

const prisma = new PrismaClient();

interface IRequest {
    email: string;
    password: string;
}

export default class AuthService {
    public async login ({email, password}: IRequest): Promise<users> {

        const userExists = await prisma.users.findFirst({
            where: {
                email: email
            }
        });

        if(!userExists) {
            throw new AppError(`Not found your email.`)
        }

        const compareHashedPassword = await compareSync(password, userExists.password);

        if(!compareHashedPassword){
            throw new AppError("Incorrect email or password.")
        }
        
        return userExists;
    }
}