import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './init';
import Reservations from './reservations';

interface ParkingAttributes{
  parking_id: number;
  parking_name: string;
  parking_type: string;
  parking_city: string;
};


interface ParkingCreationAttributes 
  extends Optional<ParkingAttributes, 'parking_id'> {}

interface ParkingInstance
  extends Model<ParkingAttributes, ParkingCreationAttributes>,
    ParkingAttributes {
      createdAt?: Date;
      updatedAt?: Date;
     }








    const Parkings = sequelize.define<ParkingInstance>(
  'Parkings',
  {
    parking_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    parking_name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    parking_type: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    parking_city: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }
);

Reservations.belongsTo(Parkings, {
  foreignKey: 'parking_id',
  as: 'parkings'
});




Parkings.hasMany(Reservations, {
  sourceKey: 'parking_id',
  foreignKey: 'parking_id',
  as: 'reservations'
});




export default Parkings;