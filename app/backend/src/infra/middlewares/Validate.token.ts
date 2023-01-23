import { Response, NextFunction, Request } from 'express';
import { verify } from 'jsonwebtoken';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('authorization');

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const SECRET_KEY = process.env.JWT_SECRET as string;

    const decoded = verify(token, SECRET_KEY);

    req.body.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;
