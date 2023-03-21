import { Router } from "express";
import { Request, Response } from "express";

import productsRouter from "../controllers/products/routes/productsRouter";

const routes = Router();

routes.use('/products', productsRouter);

export default routes;