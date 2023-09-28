import { Router } from "express";
import ProductController from "../../product/controllers/product.controller";

const productRouter = Router();

productRouter.get('/', ProductController.list);
productRouter.post('/', ProductController.create);
productRouter.get('/:uuid', ProductController.detail);
productRouter.put('/:uuid', ProductController.update);
productRouter.delete('/:uuid', ProductController.delete);

export default productRouter;