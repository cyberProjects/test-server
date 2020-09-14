import { Router, Request, Response, NextFunction } from 'express';

const v1PingRouter = Router();

v1PingRouter
    .route('/')
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send('Ping v1');
    });

export { v1PingRouter };