import { Request, Response } from "express";
import createProductService from "../services/createProductService";
import AppError from "../../../errors/AppError";
import listProductsService from "../services/listProductsService";
import showProductService from "../services/showProductService";
import updateProductService from "../services/updateProductService";
import deleteProductService from "../services/deleteProductService";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default class productsController {

    static async create(req: Request, res: Response): Promise<Response> {

        const { name, price, quantity } = req.body;

        const createProduct = new createProductService();

        const newProduct = await createProduct.create({
            name,
            price,
            quantity
        });

        return res.json(newProduct);
    }

    static async index(req: Request, res: Response): Promise<Response> {

        const products = new listProductsService();

        const listProducts = await products.index();

        return res.json(listProducts);
    }


    static async show(req: Request, res: Response): Promise<Response> {
     
        const { uuid } = req.params;

        const product = new showProductService();
       const showProduct = await product.show( {uuid} );


       return res.json(showProduct);
    }

    static async update(req: Request, res: Response): Promise<Response> {

        const { uuid } = req.params;
        const { name, price, quantity } = req.body;

        const product = new updateProductService();

        const updateProduct = await product.update({uuid, name, price, quantity});

        return res.json(updateProduct);
    }

    static async delete(req: Request, res: Response) : Promise<Response | any> {

        const { uuid } = req.params;

        const product = await prisma.products.findFirst({
            where: {
                uuid: uuid
            }
        })

        const deleteProduct = new deleteProductService();

        const softDelete = await deleteProduct.delete({uuid});

            return res.json(`Seu produto ${product?.name} foi deletado.`)
 
    }

}