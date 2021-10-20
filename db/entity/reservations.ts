import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './init';
import Parkings from './parkings';

interface ReservationAttributes{
  reservation_id: number;
  reservation_parking: string;
  parking_id: number;
  reservation_city: string;
  reservation_client: string;
  reservation_vehicle: string;
  reservation_plate: string;
  reservation_checkin: string;
  reservation_checkout: string;
};


interface ReservationCreationAttributes 
  extends Optional<ReservationAttributes, 'reservation_id'> {}

interface ReservationInstance
  extends Model<ReservationAttributes, ReservationCreationAttributes>,
    ReservationAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }



    const Reservations = sequelize.define<ReservationInstance>(
  'Reservations',
  {
    reservation_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID,
      unique: true,
    },
    reservation_parking: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    parking_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    reservation_city: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    reservation_client: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    reservation_vehicle: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    reservation_plate: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    reservation_checkin: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    reservation_checkout: {
      allowNull: false,
      type: DataTypes.TEXT,
    }
  }
);

// Reservation.belongsTo(Parking, {
//   foreignKey: 'parkingId',
//   as: 'parking'
// });

export default Reservations;