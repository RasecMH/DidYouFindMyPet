import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';
import User from './User';

export default class Pet extends Model {
  id: number;
  name: string;
  description: string;
  health: string;
  userId: number;
}

Pet.init({
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
  description: {
    allowNull: false,
    type: STRING,
  },
  health: {
    allowNull: false,
    type: STRING,
  },
  qrCode: {
    allowNull: false,
    type: STRING,
  },
  userId: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'Pet',
  tableName: 'pets',
  underscored: true,
  timestamps: false,
});

Pet.belongsTo(User, { foreignKey: 'userId', as: 'user' });
