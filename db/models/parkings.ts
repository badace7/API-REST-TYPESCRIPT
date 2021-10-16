import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './init';
import Reservations from './reservations';

interface ParkingAttributes{
  id: number;
  name: string;
  type: string;
  city: string;
};


interface ParkingCreationAttributes 
  extends Optional<ParkingAttributes, 'id'> {}

interface ParkingInstance
  extends Model<ParkingAttributes, ParkingCreationAttributes>,
    ParkingAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }



    const Parking = sequelize.define<ParkingInstance>(
  'Parking',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    type: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    city: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }
);

Reservations.belongsTo(Parking, {
  foreignKey: 'parkingId',
  as: 'parking'
});




Parking.hasMany(Reservations, {
  sourceKey: 'id',
  foreignKey: 'parkingId',
  as: 'reservations'
});




export default Parking;