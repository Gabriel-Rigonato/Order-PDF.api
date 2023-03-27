import { Request, Response } from "express";
import deleteShopService from "../services/deleteShopService";
import updateShopService from "../services/updateShopService";
import listShopService from "../services/listShopService";
import createShopService from "../services/createShopService";

export default class shopkeeperController {

    static async create (req: Request, res: Response ) : Promise<Response> {

        const { name, cnpj } = req.body;

        const { uuid } = req.params;

        const createShop = new createShopService();

        const newShop = await createShop.create({name, uuid, cnpj})

        return res.json(newShop);
    }

    static async index(req: Request, res: Response) : Promise <Response> {

        const indexShop = new listShopService();

        const listShop = await indexShop.index();

        return res.json(listShop);
    }

    static async update(req: Request, res: Response ): Promise <Response> {

        const { name, cnpj } = req.body;
        const { uuid } = req.params;

        const shopkeeper = new updateShopService();

        const updateShopkeeper = shopkeeper.update({ uuid, name, cnpj });

        return res.json(updateShopkeeper);
    }

    static async delete (req: Request, res: Response ): Promise <Response> {

        const { uuid } = req.params;

        const deleteShop = new deleteShopService();

        const shopkeeper = deleteShop.delete({ uuid });

        return res.json(`O usuário foi deletado. ${(await shopkeeper).name}`)
    }
}