import { Router } from 'express';
import usersRouter from './users.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'REST Back-end Challenge 20201209 Running' });
});
routes.use('/users', usersRouter);

export default routes;
