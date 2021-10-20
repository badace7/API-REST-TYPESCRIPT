import {
    parkingList,
    parkingById,
    insertParking,
    deleteParking,
    updateParking
} from '../Models/ParkingModel';

import { Response, Request} from 'express';



export const getParkings = async (req: Request, res: Response): Promise<void> => {
        try {
            const docs = await parkingList(); 
            res.status(200).json(docs);
        } catch (err) {
            console.log(err);
        };
};

export const getParkingById = async (req: Request, res: Response): Promise<void> => {
        try {

            const id: number = parseInt(req.params.id);
            const docs: Parkings = await parkingById(id); 
            res.status(200).json(docs);

        } catch (err) {
        
            console.log(err);
        
        }
};

export const addParking = async (req: Request, res: Response): Promise<void> => {

        try {

            const body: Parking = req.body;
            const docs: void = await insertParking(body);
            res.status(200).json(docs);

        } catch (err) {

            console.log(err);
        }

}

export const removeParkingById = async (req: Request, res: Response): Promise<void> => {

        try {

            const id: number = parseInt(req.params.id);
            const docs: void = await deleteParking(id);
            res.status(200).json(docs);

        } catch (err) {
            
            console.log(err);

        }

}



export const updateParkingById = async (req: Request, res: Response): Promise<void> => {

        try {

            const id: number = parseInt(req.params.id); 
            const body: Parking = req.body;
            const docs: void = await updateParking(body, id);
            res.status(200).json(docs);

        } catch (err) {

            console.log(err);

        }


}

 






