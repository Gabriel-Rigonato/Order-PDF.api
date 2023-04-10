import { Router } from "express";
import customerController from "../controllers/customerController";

const customerRouter = Router();

customerRouter.get('/', customerController.index);
customerRouter.post('/create/:uuid', customerController.create);
customerRouter.put('/update/:uuid', customerController.update);
customerRouter.delete('/:uuid', customerController.delete);

export default customerRouter;