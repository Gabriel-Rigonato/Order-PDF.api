import express from "express";
import { Request, Response, NextFunction } from "express";

import cors from 'cors';

import routes from './routes/index';

import 'express-async-errors';

const app: any = express();
const PORT: number = 6600;

app.use(express.json());
app.use(cors());
app.use('/v1', routes);

app.use((req: Request, res: Response, next: NextFunction) => {
    // if (error instanceof AppError) {
    //     return res.status(error.statusCode).json({
    //         status: 'error',
    //         message: error.message,
    //     });
    // }

    // throw new AppError('Bad Request.');
});

app.listen(PORT, () => { console.log(`Server is Running on PORT ${PORT}`) });
