import { product } from "@prisma/client";
import FetchProductService from "./fetch-product.service";
import AppError from "../../core/errors/AppError";
import ProductRepository from "../repositories/product.repository";

export default class DeleteProductService extends FetchProductService {

    static async execute(uuid: string): Promise<product> {

        const findProduct = await FetchProductService.getByUuid(uuid);

        if (!findProduct || findProduct.status == 'INACTIVE') {
            throw new AppError('Product not found or has already been deleted.', 400);
        }

        try {
            const deletedProduct = await ProductRepository.delete(findProduct.id);
            return deletedProduct;
        } catch (err) {
            throw new AppError("Cannot delete a product now.", 500)
        }
    }
}