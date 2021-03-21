import { Router } from 'express';

import fetch from 'node-fetch';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  try {
    return fetch('https://randomuser.me/api/')
      .then(resposta => resposta.json())
      .then(resposta => console.log(resposta.results));
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }

  response.end();
});

export default usersRouter;
