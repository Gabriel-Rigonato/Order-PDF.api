import { seller } from "@prisma/client";

import AppError from "../../core/errors/AppError";
import SellerRepository from "../repositories/seller.repository";
import FetchSellerService from "./fetch-seller.service";

export default class DeleteSellerService extends FetchSellerService {


    static async delete(uuid: string): Promise<seller> {
        const seller = await FetchSellerService.getByUuid(uuid);

        if (!seller) {
            throw new AppError("Please send a valid user uuid.", 400)
        }

        try {
            const deletedSeller = await SellerRepository.delete(seller.id);
            return deletedSeller;

        } catch (err) {
            throw new AppError("Cannot delete a seller now.", 500)
        }
    }
}