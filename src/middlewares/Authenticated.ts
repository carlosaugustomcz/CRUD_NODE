import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function Authenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('JWT token não encontrado');
  }

  const [, token] = authHeader.split(' ');

  const decoded = verify(token, authConfig.jwt.secret);

  const { sub } = decoded as TokenPayload;

  request.user = {
    login_uuid: sub,
  };

  return next();
}
