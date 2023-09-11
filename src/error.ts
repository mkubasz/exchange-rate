import { Request, Response, NextFunction} from 'express';

function errorMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

export default errorMiddleware;
