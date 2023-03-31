import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { access } from "fs";

const prisma = new PrismaClient();

interface IRequest {
    uuid: string;
}

export default class deleteProductService {

    public async delete({uuid}: IRequest) : Promise <void> {
        const product = await prisma.products.findFirst({
            where:{
                uuid: uuid,
                active: true
            }
        })

        if(product == null){
            throw new Error('This product was deleted.');
        }

        const deleteProdut = await prisma.products.delete({
            where:{
                id: product.id
            }
        })
    }
}