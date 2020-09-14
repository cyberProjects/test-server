import { Router } from 'express';

import { v2PingRouter } from './ping';
import { v2HomeRouter } from './home';

const v2Router = Router();

v2Router.use('/ping', v2PingRouter);
v2Router.use('/home', v2HomeRouter);

export { v2Router };