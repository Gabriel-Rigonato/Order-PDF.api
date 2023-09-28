import { product } from "@prisma/client";

import AppError from "../../core/errors/AppError";

import ICreateProduct from "../interfaces/icreate-product.interface";
import ProductRepository from "../repositories/product.repository";
import FetchSellerService from "../../seller/services/fetch-seller.service";

export default class CreateProductService extends FetchSellerService {

    static async create(uuid: string, icreateProduct: ICreateProduct): Promise<product> {

        const findUser = await FetchSellerService.getByUuid(uuid);

        if (!findUser) {
            throw new AppError("Cannot found a user to create a product.", 400)
        }

        try {
            const newProduct = await ProductRepository.create(icreateProduct);
            return newProduct;

        } catch (err) {
            throw new AppError("Cannot create a product now.", 500)
        }

    }

}