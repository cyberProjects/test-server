// import * as awsServerlessExpress from 'aws-serverless-express';
import * as serverless from 'serverless-http';
import express, { Application, Request, Response, NextFunction } from 'express';
import { v1Router } from './routes/v1';
import { v2Router } from './routes/v2';

const app: Application = express();

app.use('/v1', v1Router);
app.use('/v2', v2Router);
//app.listen(3000, () => console.log('Server running'));
module.exports.handler = serverless.default(app);