import { products } from "@prisma/client";
import { Request, Response } from "express";
import AppError from "../../../errors/AppError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IRequest {
    uuid: string;
}

export default class showProductService {
    public async show ({ uuid } : IRequest): Promise <products> {
        
        const showProduct = await prisma.products.findFirst({
            where:{
                uuid: uuid
            }
        })

        if(showProduct == null){
            throw new Error('i can´t find this product.')
        }

        return showProduct;
    }
}