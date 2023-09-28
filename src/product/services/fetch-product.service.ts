import { product } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import ProductRepository from "../repositories/product.repository";
import AppError from "../../core/errors/AppError";

const prisma = new PrismaClient();

export default class FetchProductService {

   static async list(): Promise<product[]> {

      const listProducts = await prisma.product.findMany({});

      return listProducts;
   }

   static async getByUuid(uuid: string): Promise<product> {

      try {
         const productDetails = await ProductRepository.findByUuid(uuid);

         if (!productDetails) {
            throw new AppError('Cannot show more informations about product.', 500)
         }

         return productDetails;
      } catch (err) {
         throw new AppError("Cannot find a product.", 500)
      }

   }
}