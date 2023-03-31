import { Request, Response } from "express";
import listCustomerService from "../services/listCustomerService";
import updateCustomerService from "../services/updateCustomerService";
import createCustomerService from "../services/createCustomerService";
import DeleteCustomerService from "../services/deleteCustomerService";

export default class customerController {

    static async index(req: Request, res: Response): Promise<Response> {

        const execute = new listCustomerService();

        const listCustomers = await execute.index();

        return res.json(listCustomers);
    }

    static async create(req: Request, res: Response): Promise<Response> {

        const { name, cpf, address, address_number, uuid } = req.body;

        const execute = new createCustomerService();

        const createdCustomer = await execute.create({ name, cpf, address, address_number, uuid });

        return res.json(createdCustomer);

    }

    static async update (req: Request, res: Response): Promise<Response> {

        const { uuid, name, cpf, address, address_number } = req.body;

        const execute = new updateCustomerService();

        const updatedCustomer = await execute.update({uuid, name, cpf, address, address_number});

        return res.json(updatedCustomer);
    }


    static async delete (req: Request, res: Response ): Promise<any> {

        const { uuid } = req.body;

        const execute = new DeleteCustomerService();

        const deleteCustomer = await execute.delete({uuid});

        return res.json(`O cliente foi deletado.`)
    }
}