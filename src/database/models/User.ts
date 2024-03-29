import { Model, INTEGER, STRING } from 'sequelize';
import { IPet } from '../../interfaces/PetInterface';
import City from './City';
import db from './index';

export default class User extends Model {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
  cityId: number;
  phone: string;
  code: string;
  pets?: IPet[] | [];
}

User.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  },
  name: {
    allowNull: false,
    type: STRING,
  },
  email: {
    allowNull: false,
    type: STRING,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
  phone: {
    allowNull: false,
    type: STRING,
  },
  code: {
    allowNull: false,
    type: STRING,
  },
  address: {
    allowNull: false,
    type: STRING,
  },
  cityId: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'User',
  tableName: 'users',
  underscored: true,
  timestamps: false,
});

User.belongsTo(City, { foreignKey: 'cityId', as: 'city' });
