import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from './user.model';

interface ContactAttributes {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  cellPhone?: number;
  address?: string;
  photo?: string;
}

interface ContactCreationAttributes extends Optional<ContactAttributes, 'id'> {}

class Contact extends Model<ContactAttributes, ContactCreationAttributes> implements ContactAttributes {
  public id!: number;
  public userId!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public phone?: string;
  public cellPhone?: number;
  public address?: string;
  public photo?: string;

  // Campos de timestamps (createdAt y updatedAt) provistos por Sequelize
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Relación belongsTo un Contacto pertenece a un Usuario
  public readonly user?: User;

  // Función estática para inicializar el modelo
  public static initialize(sequelize: Sequelize): void {
    Contact.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        cellPhone: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Contact',
      }
    );

    // Configuración de relaciones
    Contact.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user_FK',
    });
  }


}


export { Contact, ContactAttributes };