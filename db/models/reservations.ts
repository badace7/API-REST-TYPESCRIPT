import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';
import Parking from './parkings';

interface ReservationAttributes{
  id: number;
  parking: string;
  parkingId: number;
  city: string;
  clientName: string;
  vehicle: string;
  licensePlate: string;
  checkin: string;
  checkout: string;
};


interface ReservationCreationAttributes 
  extends Optional<ReservationAttributes, 'id'> {}

interface ReservationInstance
  extends Model<ReservationAttributes, ReservationCreationAttributes>,
    ReservationAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }



    const Reservation = sequelize.define<ReservationInstance>(
  'Reservation',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    parking: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    parkingId: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    city: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    clientName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    vehicle: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    licensePlate: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    checkin: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    checkout: {
      allowNull: false,
      type: DataTypes.TEXT,
    }
  }
);

export default Reservation;