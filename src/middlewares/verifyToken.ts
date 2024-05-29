import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/jwtConfig';

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {

    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      res.status(403).send('Token no proporcionado');
      return;
    }
  
    jwt.verify(token, jwtConfig.secretKey, (err, decoded) => {
      if (err) {
        res.status(401).send('Token no válido o ha expirado');
        return
      }
  
      // asignar decoded
      next();
    });
  };
  
  export default verifyToken;