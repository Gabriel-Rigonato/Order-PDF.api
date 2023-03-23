import { PrismaClient, shopkeeper } from "@prisma/client";
import { uuid as uuidv4 } from "uuidv4";

const prisma = new PrismaClient();

interface IRequest {
    uuid: string;
    name: string;
    cnpj: number;
}

export default class createShopService {

    public async create ({name, cnpj, uuid}: IRequest): Promise<shopkeeper> {
        
        const user = await prisma.users.findFirst({
            where: {
                uuid: uuid,
            }
        });

        const shopkeeper = await prisma.shopkeeper.create({
           data:{
            uuid: uuidv4(),
            name: name,
            cnpj: cnpj,
            user_id: user?.id,
            created_at: new Date
           }
        })

        return shopkeeper;
    }
}