import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IRequest{
    uuid: string;
}

export default class deleteShopService {

    public async delete ({uuid}: IRequest) : Promise <void> {
        const user = await prisma.shopkeeper.findFirst({
            where:{
                uuid: uuid
            }
        });

        const deleteShop = await prisma.shopkeeper.update({
            where:{
                id: user?.id
            },
            data:{
                active: false
            }
        });
    }
}