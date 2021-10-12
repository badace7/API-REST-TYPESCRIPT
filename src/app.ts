import {Response, Request} from 'express';
const express = require('express');
const app = express();
const parkings: Parkings = require('../parkings.json');
const port: number = 8080;


app.use(express.json());

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
   
        const id: number = parseInt(req.params.id);
        const parking: Parking | undefined = await parkings.find(parking => parking.id === id);

        if (parking) { 

            parking.name = req.body.name,
            parking.city = req.body.city,
            parking.type = req.body.type,
            res.status(200).json(parking);

        }

});

app.listen(port, () => {
       console.log('serveur à l\'écoute');
});