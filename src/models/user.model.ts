import { Sequelize, DataTypes, Model } from 'sequelize';

interface UserAttributes {
  id: number;
  username: string;
  password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;

  // Campos de timestamps (createdAt y updatedAt) provistos por Sequelize
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Función para inicializar el modelo
  public static initialize(sequelize: Sequelize): void {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'User',
      }
    );
  }
}

export { User, UserAttributes };