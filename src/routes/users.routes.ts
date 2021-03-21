import { getRepository, getCustomRepository } from 'typeorm';

import { Router } from 'express';
import User from '../models/User';

import UsersRepository from '../repositories/UsersRepository';

// import fetch from 'node-fetch';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const usersRepository = getRepository(User);
  const users = await usersRepository.find();

  return response.json(users);
});

usersRouter.get('/:userId', async (request, response) => {
  const { userId } = request.query;
  const usersRepository = getRepository(User);
  const users = await usersRepository.findOne(userId);

  if (!users) {
    return response.status(400).json({ message: 'Usuário não Existe!' });
  }
  return response.json(users);
});

usersRouter.delete('/', async (request, response) => {
  try {
    const { userId } = request.query;

    const usersRepository = getCustomRepository(UsersRepository);

    await usersRepository.deleteUser(userId);

    return response.status(200).json({ message: 'Usuário Excluído!' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});
export default usersRouter;
