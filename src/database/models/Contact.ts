import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

export default class Contact extends Model {
  id: number;
  message: string;
  phone: string;
}

Contact.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  },
  message: {
    allowNull: false,
    type: STRING,
  },
  phone: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  modelName: 'Contact',
  tableName: 'contacts',
  underscored: true,
  timestamps: false,
});
