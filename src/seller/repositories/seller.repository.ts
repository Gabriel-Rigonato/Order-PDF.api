import * as uuid from "uuid";

import { seller } from "@prisma/client";
import { prisma } from "../../core/prisma/connection-prisma";

import ICreateSeller from "../interfaces/icreate-seller.interface";
import IUpdateSeller from "../interfaces/iupdate-seller.interface";

export default class SellerRepository {

   static async create(iCreateSeller: ICreateSeller): Promise<seller> {
      const seller = await prisma.seller.create({
         data: {
            uuid: uuid.v4(),
            ...iCreateSeller,
            status: 'ACTIVE'
         }
      });
      return seller;
   }

   static async findByCnpj(cnpj: string): Promise<seller | null> {
      const findCnpj = await prisma.seller.findFirst({
         where: {
            cnpj: cnpj
         }
      });
      return findCnpj;
   }


   static async findByUuid(uuid: string): Promise<seller | null> {
      const findSeller = await prisma.seller.findFirst({
         where: {
            uuid: uuid
         }
      });
      return findSeller;
   }

   static async findMany(): Promise<seller[]> {
      const sellers = await prisma.seller.findMany({
         where: {
            status: 'ACTIVE'
         }
      });

      return sellers;
   }

   static async update(id: number, iUpdateSeller: IUpdateSeller): Promise<seller> {
      const seller = await prisma.seller.update({
         where: {
            id: id
         },
         data: {
            ...iUpdateSeller
         }
      });
      return seller;
   }

   static async delete(id: number): Promise<seller> {
      const seller = await prisma.seller.update({
         where: {
            id: id
         },
         data: {
            status: 'INACTIVE'
         }
      });
      return seller;
   }
}