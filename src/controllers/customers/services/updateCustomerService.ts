import { PrismaClient, customers } from "@prisma/client";
import { cp } from "fs";

const prisma = new PrismaClient();

interface IRequest {
    uuid: string;
    name: string;
    cpf: string;
    address: string;
    address_number: string;
}

export default class updateCustomerService {

    public async update ({uuid, cpf, name, address, address_number}: IRequest) : Promise<customers> {

        const customer = await prisma.customers.findFirst({
            where: {
                uuid: uuid
            }
        })

        const cpfExists = await prisma.customers.findFirst({
            where:{
                cpf: cpf
            }
        });

        if(cpfExists){
            throw new Error("This CPF already exists.")
        }

        const updateCustomer = await prisma.customers.update({
            where: {
                id: customer?.id
            },
            data: {
                name: name,
                cpf: cpf,
                address: address,
                address_number: address_number   
            }
        })

        return updateCustomer;
    }
}