import { Router }  from 'express';
const ParkingController = require('./controllers/ParkingController');
const ReservationsController = require('./controllers/ReservationsController');
const route = Router();

// Parkings Routes
route.get(
    '/parkings',
    ParkingController.getParkings
    );

route.get(
    '/parkings/:id',
    ParkingController.getParkingById
    );

route.post(
    '/parkings',
    ParkingController.addParking
    );

route.delete(
    '/parkings/:id',
    ParkingController.removeParkingById
);


route.patch(
    '/parkings/:id',
    ParkingController.updateParkingById
);

// Reservations Routes

route.get(
    '/parkings/:id/reservations',
    ReservationsController.getReservations
);

module.exports = route;


