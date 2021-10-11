import express, {Response, Request} from 'express';
const app = express();
const parkings: Parkings = require('../parkings.json');
const port: number = 8080;


// app.use(express.json());

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

    } catch (err) {

        console.log(err);
        throw err;
        
    }
});
app.listen(port, () => {
       console.log('serveur à l\'écoute');
});