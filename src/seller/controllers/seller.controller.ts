import { Request, Response } from "express";

import ListSellerService from "../services/fetch-seller.service";
import ICreateSeller from "../interfaces/icreate-seller.interface";
import CreateSellerService from "../services/create-seller.service";
import IUpdateSeller from "../interfaces/iupdate-seller.interface";
import UpdateSellerService from "../services/update-seller.service";
import DeleteSellerService from "../services/delete-seller.service";

export default class SellerController {

    static async create(req: Request, res: Response): Promise<Response> {

        const iCreateSeller: ICreateSeller = req.body;

        const newSeller = await CreateSellerService.create(iCreateSeller);

        return res.json(newSeller);
    }

    static async list(req: Request, res: Response): Promise<Response> {

        const listSeller = await ListSellerService.list();

        return res.json(listSeller);
    }

    static async detail(req: Request, res: Response): Promise<Response> {

        const { uuid } = req.params;

        const seller = await ListSellerService.getByUuid(uuid);

        return res.json(seller);
    }

    static async update(req: Request, res: Response): Promise<Response> {

        const updateSeller: IUpdateSeller = req.body;

        const { uuid } = req.params;

        const updatedSeller = await UpdateSellerService.update(uuid, updateSeller);

        return res.json(updatedSeller);
    }

    static async delete(req: Request, res: Response): Promise<Response> {

        const { uuid } = req.params;

        const deletedSeller = await DeleteSellerService.delete(uuid);

        return res.json(`O usuário foi deletado. ${deletedSeller.name}`)
    }
}