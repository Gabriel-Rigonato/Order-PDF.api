import { Router } from "express";
import productsRouter from "../controllers/products/routes/productsRouter";
import userRouter from "../controllers/users/routes/userRoutes";
import customerRouter from "../controllers/customers/routes/customerRouter";
import shopkeeperRouter from "../controllers/shopkeepers/routes/shopkeeperRoutes";
import authRouter from "../controllers/authentication/routes/auth.router";

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', userRouter);
routes.use('/customers', customerRouter);
routes.use('/shopkeeper', shopkeeperRouter);
routes.use('/login', authRouter);

export default routes;