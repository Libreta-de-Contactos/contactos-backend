import "dotenv/config";
import { Sequelize } from 'sequelize';

// Conexión con la base de datos
const sequelize = new Sequelize(process.env.DATABASE_URI as string);


export { sequelize };