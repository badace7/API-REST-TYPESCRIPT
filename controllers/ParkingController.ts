const ParkingModel = require('../Models/ParkingModel');
import { Response, Request} from 'express';

class ParkingController {


    public getParkings = async (req: Request, res: Response): Promise<void> => {
            try {
                const docs = await ParkingModel.parkingList(); 
                res.status(200).json(docs);
            } catch (err) {
                console.log(err);
            };
        };

    public getParkingById = async (req: Request, res: Response): Promise<void> => {
                try {
        
                    const id: number = parseInt(req.params.id);
                    const docs: Parkings = await ParkingModel.parkingById(id); 
                    res.status(200).json(docs);
        
                } catch (err) {
                
                    console.log(err);
                
                }
        };
        
    public addParking = async (req: Request, res: Response): Promise<void> => {
        
                try {
        
                    const body: Parking = req.body;
                    const docs: void = await ParkingModel.insertParking(body);
                    res.status(200).json(docs);
        
                } catch (err) {
        
                    console.log(err);
                }
        
        }
        
    public removeParkingById = async (req: Request, res: Response): Promise<void> => {
        
                try {
        
                    const id: number = parseInt(req.params.id);
                    const docs: void = await ParkingModel.deleteParking(id);
                    res.status(200).json(docs);
        
                } catch (err) {
                    
                    console.log(err);
        
                }
        
        }
        
        
        
    public updateParkingById = async (req: Request, res: Response): Promise<void> => {
        
                try {
        
                    const id: number = parseInt(req.params.id); 
                    const body: Parking = req.body;
                    const docs: void = await ParkingModel.updateParking(body, id);
                    res.status(200).json(docs);
        
                } catch (err) {
        
                    console.log(err);
        
                }



    }





}

 
module.exports = new ParkingController;





