import "dotenv/config";
import { Sequelize } from 'sequelize';

// Conexión inicial sin especificar la base de datos para verificar y crear la base de datos
const sequelize = new Sequelize(process.env.DATABASE_URI_CREATE as string, {dialect: 'mysql',});

async function databaseExists(databaseName: string): Promise<boolean> {
  try {
    const [results] = await sequelize.query(`SHOW DATABASES LIKE '${databaseName}';`);
    return results.length > 0;
  } catch (error) {
    console.error('Error checking database existence:', error);
    return false;
  }
}

async function createDatabase(databaseName: string): Promise<void> {
  try {
    const exists = await databaseExists(databaseName);
    if (!exists) {
      await sequelize.query(`CREATE DATABASE ${databaseName};`);
      console.log(`Database ${databaseName} created successfully.`);
    } else {
      console.log(`Database ${databaseName} already exists.`);
    }
  } catch (error) {
    console.error('Unable to create the database:', error);
  }
}

async function authenticateDatabase(): Promise<void> {
  const databaseName = 'contact_book_DB';
  
  // Create the database if it does not exist
  await createDatabase(databaseName);

  // Close the initial connection and open a new one to the specific database
  await sequelize.close();

  const sequelizeWithDatabase = new Sequelize(databaseName, 'root', 'Admin12345', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

  try {
    await sequelizeWithDatabase.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

authenticateDatabase();