import { Sequelize } from 'sequelize';

// Conexión con la base de datos
const sequelize = new Sequelize('mysql://root:Admin12345@localhost:3306/contact_book_DB');


export { sequelize };