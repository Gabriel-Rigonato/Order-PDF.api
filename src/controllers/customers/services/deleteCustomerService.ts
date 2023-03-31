import { PrismaClient, customers } from "@prisma/client";

const prisma = new PrismaClient();

interface IRequest{
    uuid: string;
}

export default class DeleteCustomerService {

    public async delete({uuid}: IRequest): Promise<customers> {

        const customer = await prisma.customers.findFirst({
            where:{
                uuid: uuid
            }
        });

        const deletedCustomer = await prisma.customers.update({
            where:{
                id: customer?.id
            },
            data: {
                active: false
            }
        });

        return deletedCustomer;
    }
}