import { Router } from "express";
import { Request, Response } from "express";

const productsRouter = Router();

productsRouter.use('/controllers',  (req: Request, res: Response)=>{
    res.json('alo')
});

export default productsRouter;