import {Contact} from './contact.model';
import {User} from './user.model';
import {sequelize} from '../config/database';

// Inicialización de los modelos
User.initialize(sequelize);
Contact.initialize(sequelize);

// Exporta los modelos y la instancia de Sequelize
export { sequelize, User, Contact };