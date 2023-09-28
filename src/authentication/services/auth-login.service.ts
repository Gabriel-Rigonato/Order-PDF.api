import { PrismaClient, seller } from '@prisma/client';

import 'bcrypt';

import AppError from '../../core/errors/AppError';

import { compareSync } from 'bcrypt';

const prisma = new PrismaClient();

interface IRequest {
    email: string;
    password: string;
}

export default class AuthService {

    public async login({ email, password }: IRequest): Promise<seller> {

        const userExists = await prisma.seller.findFirst({
            where: {
                email: email
            }
        });

        if (!userExists) {
            throw new AppError(`Invalid Credentials.`)
        }

        const compareHashedPassword = await compareSync(password, userExists.password);

        if (!compareHashedPassword) {
            throw new AppError("Invalid Credentials.")
        }

        return userExists;
    }
}