import dotenv from 'dotenv';

dotenv.config();

export const jwtConfig = {
  secretKey: process.env.JWT_SECRET_KEY || 'default_secret_key', 
};