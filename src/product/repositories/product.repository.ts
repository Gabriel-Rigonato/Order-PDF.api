import { product } from "@prisma/client";
import { prisma } from "../../core/prisma/connection-prisma";
import ICreateProduct from "../interfaces/icreate-product.interface";
import { uuid } from "uuidv4";
import IUpdateProduct from "../interfaces/iupdate-product.interface";

export default class ProductRepository {

   static async create(iCreateProduct: ICreateProduct): Promise<product> {
      const product = await prisma.product.create({
         data: {
            uuid: uuid(),
            ...iCreateProduct,
            status: 'ACTIVE'
         }
      });

      return product;
   }

   static async findByUuid(uuid: string): Promise<product | null> {
      console.log(uuid)
      const product = await prisma.product.findFirst({
         where: {
            uuid: uuid
         }
      });
      console.log(product)
      return product;
   }

   static async update(id: number, iUpdateProduct: IUpdateProduct): Promise<product> {
      const product = await prisma.product.update({
         where: {
            id: id
         },
         data: {
            ...iUpdateProduct
         }
      });
      return product;
   }

   static async delete(id: number): Promise<product> {
      const deleteProduct = await prisma.product.update({
         where: {
            id: id
         },
         data: {
            status: 'INACTIVE'
         }
      });

      return deleteProduct;
   }
}