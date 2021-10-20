import { Router }  from 'express';
import { 
    getParkings,
    getParkingById,
    addParking,
    removeParkingById,
    updateParkingById
} from './controllers/ParkingController';
import { getReservations } from './controllers/ReservationsController';
const route = Router();

// Parkings Routes
route.get(
    '/parkings',
    getParkings
    );

route.get(
    '/parkings/:id',
    getParkingById
    );

route.post(
    '/parkings',
    addParking
    );

route.delete(
    '/parkings/:id',
    removeParkingById
);


route.patch(
    '/parkings/:id',
    updateParkingById
);

// Reservations Routes

route.get(
    '/parkings/:id/reservations',
    getReservations
);

module.exports = route;


