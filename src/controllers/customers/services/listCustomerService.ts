import { customers, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class listCustomerService {

    public async index(): Promise<customers[]> {

        const customers = await prisma.customers.findMany({
            where: {
                active: true
            }
        })
        return customers;

    }
}