import { Router, Request, Response, NextFunction } from 'express';

const v1HomeRouter = Router();

v1HomeRouter
    .route('/')
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send('Home v1');
    });

export { v1HomeRouter };