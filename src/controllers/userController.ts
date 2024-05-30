import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import verifyToken from '../middlewares/verifyToken';
import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { jwtConfig } from '../config/jwtConfig';

// Verificar credenciales de usuario
export const verifyUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      res.status(404).send('Usuario no encontrado');
      return;
    }

    // Comparar la contraseña proporcionada con la contraseña cifrada almacenada
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      // Crear el payload del JWT
      const payload = { userId: user.id, username: user.username };
      
      // Firmar el token
      const token = jwt.sign(payload, jwtConfig.secretKey, { expiresIn: '1h' });

      res.status(200).json({ token, id: user.id});
    } else {
      res.status(401).send('Contraseña incorrecta');
    }
  } catch (error) {
    console.error('Error al verificar usuario:', error);
    res.status(500).send('Error al verificar usuario');
  }
};



// Crear un usuario
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {id, username, password } = req.body;

    // Cifrar la contraseña antes de almacenarla
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({username, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).send('Error al crear usuario');
  }
};



export default {
  verifyUser,
  createUser,
};