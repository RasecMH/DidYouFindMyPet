import { Model, INTEGER, STRING, DATEONLY } from 'sequelize';
import City from './City';
import Contact from './Contact';
import db from './index';
import Pet from './Pet';

export default class LocationHistory extends Model {
  id: number;
  petId: number;
  locationLink: string;
  address: string;
  cityId: number;
  contactId: number;
  message?: string;
  phone?: string;
}

LocationHistory.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER,
  },
  petId: {
    allowNull: false,
    type: INTEGER,
  },
  location: {
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
  contactId: {
    allowNull: false,
    type: INTEGER,
  },
  createdDate: {
    allowNull: false,
    type: DATEONLY,
  },
}, {
  sequelize: db,
  modelName: 'LocationHistory',
  tableName: 'location_history',
  underscored: true,
  timestamps: true,
});

LocationHistory.belongsTo(Pet, { foreignKey: 'petId', as: 'pet' });
LocationHistory.belongsTo(City, { foreignKey: 'cityId', as: 'city' });
LocationHistory.belongsTo(Contact, { foreignKey: 'contactId', as: 'contact' });
