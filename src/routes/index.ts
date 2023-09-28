import { Router } from "express";

import productsRouter from "./product-routes/product.router";
import sellerRouter from "./seller-routes/seller-routes";
import authRouter from "../authentication/routes/auth.router";

const routes = Router();

routes.use('/product', productsRouter);
routes.use('/seller', sellerRouter);
routes.use('/login', authRouter);

export default routes;