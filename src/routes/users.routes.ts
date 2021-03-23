import { getRepository, getCustomRepository } from 'typeorm';

import { Router } from 'express';
import User from '../models/User';

import UsersRepository from '../repositories/UsersRepository';
// import authenticated from '../middlewares/Authenticated';
import UserService from '../services/UserService';

const usersRouter = Router();

// usersRouter.use(authenticated);

usersRouter.get('/execute', async (request, response) => {
  const userServices = new UserService();

  fetch('https://randomuser.me/api/?page=3&results=1')
    .then(resposta => resposta.json())
    .then(resposta => {
      userServices.execute(resposta);
    });

  /*  fetch('https://randomuser.me/api/?page=3&results=1')
    .then(response => {
      return response.json();
    })
    .then(data => {
      userServices.execute(data);
    });
  */
  // return response.json(listUsers);
});

usersRouter.get('/', async (request, response) => {
  const usersRepository = getRepository(User);
  const users = await usersRepository.find();

  return response.json(users);
});

usersRouter.get('/:userId', async (request, response) => {
  const { userId } = request.params;
  const usersRepository = getRepository(User);
  const users = await usersRepository.findOne(userId);

  if (!users) {
    return response.status(400).json({ message: 'Usuário não Existe!' });
  }
  return response.json(users);
});

usersRouter.delete('/:userId', async (request, response) => {
  const { userId } = request.params;

  const usersRepository = getCustomRepository(UsersRepository);

  await usersRepository.deleteUser(userId);

  return response.status(200).json({ message: 'Usuário Excluído!' });
});

usersRouter.put('/:userId', async (request, response) => {
  const user = request.body;
  const { userId } = request.params;

  const usersRepository = getCustomRepository(UsersRepository);

  await usersRepository.updateUser(user, userId);

  return response.status(200).json({ message: 'Usuário Alterado!' });
});
export default usersRouter;
