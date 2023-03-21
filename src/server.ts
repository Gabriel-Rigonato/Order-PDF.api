import express from "express";
import routes from './routes/index';
import cors from 'cors';
import { Request, Response, NextFunction } from "express";
import { error } from "console";
import AppError from "./errors/AppError";
import 'express-async-errors';

const app = express();
const PORT = 6600;

app.use(express.json());
app.use(cors());
app.use('/server', routes);

app.use((req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: 'error',
            message: error.message,
        });
    }

    throw new Error('Bad Request.');
});

app.listen(PORT, ()=>{ console.log(`Server is Running on PORT ${PORT}`)});
