import { Router, Request, Response, NextFunction } from 'express';

const v2PingRouter = Router();

v2PingRouter
    .route('/')
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send('Ping v2');
    });

export { v2PingRouter };