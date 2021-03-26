import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import CronJob from 'node-cron';

import routes from './routes';
import AppError from './errors/AppError';
import UserService from './services/UserService';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response
        .status(err.statusCode)
        .json({ status: 'error', message: err.message });
    }

    return response
      .status(500)
      .json({ status: 'error', message: 'Autenticação Falhou.' });
  },
);

app.listen(3333, () => {
  console.log('Server Started on port 3333');

  // CronJob.schedule('0 * * * * *', () => {
  //  new UserService().execute();
  // });
});
