import { Router } from "express";
import productsRouter from "../controllers/products/routes/productsRouter";
import userRouter from "../controllers/users/routes/userRoutes";

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', userRouter);

export default routes;