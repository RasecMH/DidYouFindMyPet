import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

export default class Country extends Model {
  id: number;
  name: string;
}

Country.init({
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
}, {
  sequelize: db,
  modelName: 'Country',
  tableName: 'countries',
  underscored: true,
  timestamps: false,
});
