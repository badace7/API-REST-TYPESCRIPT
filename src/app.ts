// import type of Response & Request
import {Response, Request} from 'express';

// import express
const express = require('express');
const app = express();

// import data in JSON
const parkings: Parkings = require('../parkings.json');
const reservations: Reservations = require('../reservations.json');

// port runtime
const port: number = 8080;

// middleware JSON
app.use(express.json());

// ORM for mysql
const { Sequelize } = require('sequelize');

// mySQL connection with Sequelize ORM
const sequelize = new Sequelize("parkingReservation", "root", "Root?P5w?", {
    dialect: "mysql",
    host: "localhost"
});

// Authentification and insertion of JSON DATA
try {
    sequelize.authenticate();
    // reservations.forEach( reservation => {
    //    sequelize.query(`insert INTO RESERVATIONS (parking_id, reservation_parking, reservation_city, reservation_client, reservation_vehicle, reservation_plate, reservation_checkin, reservation_checkout) values ('${reservation.parkingId}', '${reservation.parking}', '${reservation.city}', '${reservation.clientName}', '${reservation.vehicle}', '${reservation.licensePlate}', '${reservation.checkin}', '${reservation.checkout}');`); 
    // });
    console.log('Connecté à la base de données MySQL !');
} catch (err) {
    console.error('Impossible de se connecter, erreur suivante: ', err);
}

/**
 * Parkings request GET/POST/PUT/PATCH/DELETE
 */
app.get('/parkings', (req: Request, res: Response) => {
      res.status(200).json(parkings); 
});

app.get('/parkings/:id', async (req: Request, res: Response) => {
    try {

        const id: number = parseInt(req.params.id);
        const docs: Parking | undefined = await parkings.find(parking => parking.id === id);
        res.status(200).json(docs);

    } catch (err) {

        console.log(err);
        throw err;

    }
})

app.post('/parkings', async (req: Request, res: Response) => {
    try {

        const body: Parking = await req.body;    
        parkings.push(body);
        res.status(200).json(parkings);
        
    } catch (err) {
        
        console.log(err);
        throw err;
    }   
});


app.put('/parkings/:id', async (req: Request, res: Response) => {
   
    
    try {

        const id: number = parseInt(req.params.id);
        const parking: Parking | undefined = await parkings.find(parking => parking.id === id);

        if (parking) {

            parking.name = req.body.name,
            parking.city = req.body.city,
            parking.type = req.body.type,
            res.status(200).json(parking);
        }

    } catch (err) {

        console.log(err);
        throw err;

    }
        
});

app.patch('parkings/:id', async (req: Request, res: Response) => {

    try {

       const id: number = parseInt(req.params.id); 
       const parking: Parking | undefined = await parkings.find(parking => parking.id === id); 
        
       if (parking) {

           parking.name = req.body.name,
           parking.city= req.body.city,
           parking.type = req.body.type,
           res.status(200).json(parking);

       }

    } catch (err) {
        console.log(err);
        throw err;
    }

});


app.delete('/parkings/:id', async (req: Request, res: Response) => {

    try {

        const id: number = parseInt(req.params.id);
        const parking: Parking | undefined = await parkings.find(parking => parking.id === id);    

        if (parking) { 

            parkings.splice(parkings.indexOf(parking), 1);
            res.status(200).json(parking);

        }

    } catch (err) {

        console.log(err);
        throw err;

    }


});

/**
 * Reservations request GET/POST/PUT/PATCH/DELETE
 */

app.get('/parkings/:id/reservations', async (req: Request, res: Response) => {
    try {

        const id: number = parseInt(req.params.id);
        const docs: Reservations = await reservations.filter(reservations => reservations.parkingId === id);
        res.status(200).json(docs);

    } catch (err) {

        console.log(err);
        throw err;

    }
})

app.get('/parkings/:id/reservations/:resId', async (req: Request, res: Response) => {
    try {

        const id: number = parseInt(req.params.id);
        const resId: number = parseInt(req.params.resId);
        const docs: Reservations = await reservations.filter(reservations => reservations.parkingId === id);
        const reservation: Reservation | undefined = docs.find(reservation => reservation.id === resId);
        res.status(200).json(reservation);

    } catch (err) {

        console.log(err);
        throw err;

    }
})

app.put('/parkings/:id/reservations/:resId', async (req: Request, res: Response) => {
    try {

        const id: number = parseInt(req.params.id);
        const resId: number = parseInt(req.params.resId);
        const docs: Reservations = await reservations.filter(reservations => reservations.parkingId === id);
        const reservation: Reservation | undefined = docs.find(reservation => reservation.id === resId);
            
        if (reservation) {

            reservation.parking = req.body.parking,
            reservation.parkingId = req.body.parkingId,
            reservation.city= req.body.city,
            reservation.clientName= req.body.clientName,
            reservation.vehicle= req.body.vehicle,
            reservation.licensePlate= req.body.licensePlate,
            reservation.checkin = req.body.checkin,
            reservation.checkout= req.body.checkout

            res.status(200).json(reservation);
            
        }

    } catch (err) {

        console.log(err);
        throw err;

    }
});

app.patch('/parkings/:id/reservations/:resId', async (req: Request, res: Response) => {
    try {

        const id: number = parseInt(req.params.id);
        const resId: number = parseInt(req.params.resId);
        const docs: Reservations = await reservations.filter(reservations => reservations.parkingId === id);
        const reservation: Reservation | undefined = docs.find(reservation => reservation.id === resId);
            
        if (reservation) {

            reservation.parking = req.body.parking,
            reservation.parkingId = req.body.parkingId,
            reservation.city= req.body.city,
            reservation.clientName= req.body.clientName,
            reservation.vehicle= req.body.vehicle,
            reservation.licensePlate= req.body.licensePlate,
            reservation.checkin = req.body.checkin,
            reservation.checkout= req.body.checkout

            res.status(200).json(reservation);
            
        }

    } catch (err) {

        console.log(err);
        throw err;

    }
});

app.post('/parkings/:id/reservations', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const body: Reservation = await req.body;    
        reservations.push(body);
        res.status(200).json(reservations);
        
    } catch (err) {
        
        console.log(err);
        throw err;
    }   
});


app.listen(port, () => {
       console.log('serveur à l\'écoute');
});