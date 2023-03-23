import { PrismaClient, shopkeeper } from "@prisma/client";

const prisma = new PrismaClient();

export default class listShopService {
    
    public async index() : Promise<shopkeeper[]> {
        const shopkeepers = await prisma.shopkeeper.findMany({
            where: {
                active: true
            }
        });

        return shopkeepers;
    }
}