import { PrismaClient, seller } from "@prisma/client";
import IUpdateSeller from "../interfaces/iupdate-seller.interface";
import SellerRepository from "../repositories/seller.repository";
import AppError from "../../core/errors/AppError";
import FetchSellerService from "./fetch-seller.service";

const prisma = new PrismaClient();

export default class UpdateSellerService extends FetchSellerService {

    static async update(uuid: string, updateSeller: IUpdateSeller): Promise<seller> {

        const seller = await FetchSellerService.getByUuid(uuid);

        if (!seller) {
            throw new AppError("Send a valid user uuid.", 400)
        }

        try {
            const updatedSeller = await SellerRepository.update(seller.id, updateSeller);
            return updatedSeller;

        } catch (err) {
            throw new AppError("Cannot update seller informations.", 500)
        }
    }
}