import { PrismaClient } from "@prisma/client";

import { Request, Response } from "express";

import CreateProductService from "../services/create-product.service";
import UpdateProductService from "../services/update-product.service";
import deleteProductService from "../services/deleteProductService";
import FetchProductService from "../services/fetch-product.service";

import ICreateProduct from "../interfaces/icreate-product.interface";
import IUpdateProduct from "../interfaces/iupdate-product.interface";
import DeleteProductService from "../services/deleteProductService";

const prisma = new PrismaClient();


export default class ProductController {

    static async create(req: Request, res: Response): Promise<Response> {

        const icreateProduct: ICreateProduct = req.body;
        const { uuid } = req.params;

        const newProduct = await CreateProductService.create(uuid, icreateProduct);

        return res.json(newProduct);
    }

    static async list(req: Request, res: Response): Promise<Response> {

        const list = await FetchProductService.list();

        return res.json(list);
    }


    static async detail(req: Request, res: Response): Promise<Response> {

        const { uuid } = req.params;

        const showProduct = await FetchProductService.getByUuid(uuid);

        return res.json(showProduct);
    }

    static async update(req: Request, res: Response): Promise<Response> {

        const { uuid } = req.params;
        const iUpdateProduct: IUpdateProduct = req.body;

        const updateProduct = await UpdateProductService.update(uuid, iUpdateProduct);

        return res.json(updateProduct);
    }

    static async delete(req: Request, res: Response): Promise<Response | any> {

        const { uuid } = req.params;

        const deletedProduct = await DeleteProductService.execute(uuid);

        return res.json(`Seu produto ${deletedProduct?.name} foi deletado.`)

    }

}