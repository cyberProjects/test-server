import { Router, Request, Response, NextFunction } from 'express';

const v2HomeRouter = Router();

v2HomeRouter
    .route('/')
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send('Home v2');
    });

export { v2HomeRouter };