import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IRequest {
    uuid: string;
}

export default class deleteUserService {
    public async delete({ uuid }: IRequest): Promise<void> {
        const user = await prisma.users.findFirst({
            where: {
                uuid: uuid
            }
        })

        if(user == null || undefined) {
            throw new Error('This User already was deleted.')
        }

        //Soft Delete
        const deleteUser = await prisma.users.update({
            where:{
                id: user.id
            },
            data: {
                active: false
            }
        });
    }
}