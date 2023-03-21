import { PrismaClient, products } from "@prisma/client";
import { Request, Response } from "express";
import { uuid } from "uuidv4";
import AppError from "../../../errors/AppError";

const prisma = new PrismaClient();

interface IRequest {
    uuid: string;
    name: string;
    price: number;
    quantity: number;
}

export default class updateProductService {
   
    public async update({uuid ,name, price, quantity}: IRequest): Promise <products>{

        const product = await prisma.products.findFirst({
            where:{
                uuid: uuid
            }
        })

        if(!product){
            throw new Error('I can´t find this product.')
        }

        const productExists = await prisma.products.findFirst({
            where:{
                name: name
            }
        })

        if(productExists){
            throw new Error('This name already exists in products.')
        }

        const updateProduct = await prisma.products.update({
            where:{
                id: product.id
            },
            data:{
                name: name,
                price: price,
                quantity: quantity,
                updated_at: new Date
            }
        })

        return updateProduct;
    }

}