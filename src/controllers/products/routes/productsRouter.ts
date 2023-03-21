import { Router } from "express";
import productsController from "../controllers/productsControllers";

const productsRouter = Router();

productsRouter.get('/', productsController.index);
productsRouter.post('/create', productsController.create);
productsRouter.get('/:uuid', productsController.show);
productsRouter.put('/:uuid/update', productsController.update);
productsRouter.delete('/:uuid', productsController.delete);

export default productsRouter;