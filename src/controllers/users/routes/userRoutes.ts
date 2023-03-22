import { Router } from "express";
import userController from "../controllers/userController";

const userRouter = Router();

userRouter.post('/create', userController.create);
userRouter.get('/', userController.index);
userRouter.get('/:uuid', userController.show);
userRouter.delete('/:uuid', userController.delete);

export default userRouter;
