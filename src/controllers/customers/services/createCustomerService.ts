import { customers, PrismaClient } from "@prisma/client";
import { uuid as uuidv4 } from "uuidv4";

const prisma = new PrismaClient();

interface IRequest {
    uuid: string;
    name: string;
    cpf: string;
    address: string;
    address_number: string;
}

export default class createCustomerService {
 
    public async create({name, cpf, address, address_number, uuid} : IRequest) : Promise<customers> {

        const user = await prisma.users.findFirst({
            where: {
                uuid: uuid
            }
        });

        const newCustomer = await prisma.customers.create({
            data: {
                uuid: uuidv4(),
                name: name,
                cpf: cpf,
                user_id: user?.id,
                address: address,
                address_number: address_number
            }
        })

        return newCustomer;

    }
}