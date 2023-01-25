import { Response, NextFunction, Request } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';

export interface IDecode extends Request {
  user: {
    id: number,
    role: string
  }
}

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('authorization');

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const SECRET_KEY = process.env.JWT_SECRET as string;

    const { data: { id, role } } = verify(token, SECRET_KEY) as JwtPayload;

    (req as IDecode).user = { id, role };
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateToken;
