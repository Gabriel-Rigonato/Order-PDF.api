import { PrismaClient, seller } from "@prisma/client";
import SellerRepository from "../repositories/seller.repository";
import AppError from "../../core/errors/AppError";

export default class FetchSellerService {

    static async list(): Promise<seller[]> {
        try {
            const sellers = await SellerRepository.findMany();
            return sellers;
        } catch (err) {
            throw new AppError("Cannot list sellers.", 500)
        }
    }

    static async getByUuid(uuid: string): Promise<seller | null> {
        try {
            const seller = await SellerRepository.findByUuid(uuid);

            return seller;
        } catch (err) {
            throw new AppError("Cannot find seller.", 500)
        }
    }
}