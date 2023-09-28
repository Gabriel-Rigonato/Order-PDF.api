import { product } from "@prisma/client";

import IUpdateProduct from "../interfaces/iupdate-product.interface";
import FetchSellerService from "../../seller/services/fetch-seller.service";
import AppError from "../../core/errors/AppError";
import FetchProductService from "./fetch-product.service";
import ProductRepository from "../repositories/product.repository";

export default class UpdateProductService extends FetchProductService {

    static async update(seller_uuid: string, iUpdateProduct: IUpdateProduct): Promise<product> {
        try {

            /*before implements middleware */
            // const seller = await FetchSellerService.getByUuid(seller_uuid);

            // if (!seller) {
            //     throw new AppError("Cannot find a seller to update product.", 400)
            // }

            const findProduct = await FetchProductService.getByUuid(iUpdateProduct.uuid);

            if (!findProduct) {
                throw new AppError('Not found the product.', 400)
            }


            const updatedProduct = await ProductRepository.update(findProduct.id, iUpdateProduct);
            return updatedProduct;

        } catch (err) {
            throw new AppError("Cannot update a product now.", 500)
        }

    }

}