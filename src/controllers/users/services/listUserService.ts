import { PrismaClient, users } from "@prisma/client";

const prisma = new PrismaClient();

export default class listUserService{

    public async list(): Promise<users[]>{

        const users = await prisma.users.findMany({
            where:{
                active: true
            }
        })

        return users;
    }
}