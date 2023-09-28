import { seller } from "@prisma/client";

import ICreateSeller from "../interfaces/icreate-seller.interface";

import SellerRepository from "../repositories/seller.repository";

import AppError from "../../core/errors/AppError";
import { hashPassword } from "../../core/utils/utils";

export default class CreateSellerService {

    static async create(iCreateSeller: ICreateSeller): Promise<seller> {
        try {
            const cpnjExists = await SellerRepository.findByCnpj(iCreateSeller.cnpj);

            if (cpnjExists) {
                throw new AppError("This CNPJ already exists.", 400);
            }


            const sellerData: ICreateSeller = {
                name: iCreateSeller.name,
                password: await hashPassword(iCreateSeller.password),
                cnpj: iCreateSeller.cnpj,
                email: iCreateSeller.email
            }

            const newSeller = await SellerRepository.create(sellerData);
            return newSeller;

        } catch (err) {
            console.log(err)
            throw new AppError("Cannot create a seller.", 500)
        }
    }
}