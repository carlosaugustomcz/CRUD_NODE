declare namespace Express {
  export interface Request {
    user: {
      login_uuid: string;
    };
  }
}
