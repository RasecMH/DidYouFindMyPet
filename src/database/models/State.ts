import { Model, INTEGER, STRING } from 'sequelize';
import Country from './Country';
import db from './index';

export default class State extends Model {
  id: number;
  name: string;
  countryId: number;
}

State.init({
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
  countryId: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'State',
  tableName: 'states',
  underscored: true,
  timestamps: false,
});

State.belongsTo(Country, { foreignKey: 'countryId', as: 'country' });
