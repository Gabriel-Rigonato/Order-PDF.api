import { PrismaClient, shopkeeper } from "@prisma/client";

const prisma = new PrismaClient();

interface IRequest {
    uuid: string;
    name: string;
    cnpj: number;  
}

export default class updateShopService {

    public async update ({uuid, name, cnpj} : IRequest ) : Promise <shopkeeper> {


        const cnpjExists = await prisma.shopkeeper.findFirst({
            where:{
                cnpj: cnpj
            }
        })

        if(cnpjExists){
            throw new Error('This cnpj already exists.')
        }

        const shopkeeper = await prisma.shopkeeper.findFirst({
            where:{
                uuid: uuid
            }
        })
        
          const updateShopkeeper = await prisma.shopkeeper.update({
            where:{
                id: shopkeeper?.id
            },
            data: {
                name: name,
                cnpj: cnpj,
                updated_at: new Date
            }
        });

        return updateShopkeeper;
    }
}