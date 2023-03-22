import {  products } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class listProductsService {

   public async index (): Promise <products[]> {

    const listProducts = await prisma.products.findMany({
      where:{
         active: true
      }
    });

    return listProducts;
   }
}