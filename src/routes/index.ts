import { Router } from "express";
import productsRouter from "../controllers/products/routes/productsRouter";
import userRouter from "../controllers/users/routes/userRoutes";
import customerRouter from "../controllers/customers/routes/customerRouter";
import shopkeeperRouter from "../controllers/shopkeepers/routes/shopkeeperRoutes";

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', userRouter);
routes.use('/customers', customerRouter);
routes.use('/shopkeeper', shopkeeperRouter);

export default routes;