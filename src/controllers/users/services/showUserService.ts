import { PrismaClient, users } from "@prisma/client";

const prisma = new PrismaClient();

interface IRequest {
    uuid: string;
}

export default class showUserService {
    public async show({uuid}: IRequest): Promise<users> {
        const user = await prisma.users.findFirst({
            where:{
                uuid: uuid
            }
        })

        if(user == null || undefined){
            throw new Error('I can´t find this User.')
        }

        return user;
    }
}