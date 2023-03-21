import { PrismaClient, products } from "@prisma/client";
import { Request, Response } from "express";
import AppError from "../../../errors/AppError";
import { uuid } from "uuidv4";


const prisma = new PrismaClient();

interface IRequest {
    name: string;
    price: number;
    quantity: number;
}

export default class createProductService {
    
public async create ({name, price, quantity} : IRequest ): Promise<products> {
                
    const productExists = await prisma.products.findFirst({
        where:{
            name: name
        }
    })

    if(productExists){
        throw new Error('Product already exists')
    }

    const product = await prisma.products.create({
        data: {
            uuid: uuid(),
            name: name,
            price: price,
            quantity: quantity,
            created_at: new Date
    }});

    return product;

}

}