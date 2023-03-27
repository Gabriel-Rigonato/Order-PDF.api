import { Router } from "express";
import shopkeeperController from "../controllers/shopkepeerController";

const shopkeeperRouter = Router ();

shopkeeperRouter.get('/', shopkeeperController.index);
shopkeeperRouter.post('/create', shopkeeperController.create);
shopkeeperRouter.put('/:uuid', shopkeeperController.update);
shopkeeperRouter.delete('/:uuid', shopkeeperController.delete);