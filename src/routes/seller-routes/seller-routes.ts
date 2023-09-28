import { Router } from "express";
import sellerController from "../../seller/controllers/seller.controller";

const sellerRouter = Router();

sellerRouter.get('/', sellerController.list);
sellerRouter.get('/:uuid', sellerController.detail);
sellerRouter.post('/', sellerController.create);
sellerRouter.put('/:uuid', sellerController.update);
sellerRouter.delete('/:uuid', sellerController.delete);

export default sellerRouter;