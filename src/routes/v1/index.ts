import { Router } from 'express';

import { v1PingRouter } from './ping';
import { v1HomeRouter } from './home';

const v1Router = Router();

v1Router.use('/ping', v1PingRouter);
v1Router.use('/home', v1HomeRouter);

export { v1Router };