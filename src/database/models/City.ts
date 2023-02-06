import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';
import State from './State';

export default class City extends Model {
  id: number;
  name: string;
  stateId: number;
}

City.init({
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
  stateId: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'City',
  tableName: 'cities',
  underscored: true,
  timestamps: false,
});

City.belongsTo(State, { foreignKey: 'stateId', as: 'state' });
